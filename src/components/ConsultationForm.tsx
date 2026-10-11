"use client";

import { FormEvent, useEffect, useState, type ReactNode } from "react";
import { practiceAreas } from "@/data/practiceAreas";
import { validateConsultation } from "@/lib/consultation-validation";
import type { ConsultationField, ConsultationPayload } from "@/types/consultation";

const initialForm: ConsultationPayload = {
  name: "",
  phone: "",
  email: "",
  area: "",
  message: "",
  consent: false,
};

export function ConsultationForm() {
  const [form, setForm] = useState<ConsultationPayload>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [invalidField, setInvalidField] = useState<ConsultationField | null>(null);

  useEffect(() => {
    try {
      const name = sessionStorage.getItem("consultationName") ?? "";
      const phone = sessionStorage.getItem("consultationPhone") ?? "";
      if (!name && !phone) return;
      setForm((current) => ({
        ...current,
        name: name || current.name,
        phone: phone || current.phone,
      }));
      sessionStorage.removeItem("consultationName");
      sessionStorage.removeItem("consultationPhone");
    } catch {
      /* ignore */
    }
  }, []);

  function updateForm(patch: Partial<ConsultationPayload>) {
    setForm((current) => ({ ...current, ...patch }));
    setInvalidField((current) => {
      const edited = Object.keys(patch)[0];
      return current === edited ? null : current;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (process.env.NODE_ENV === "development") {
      console.log("[consultation] payload", form);
    }

    const validationError = validateConsultation(form);
    if (validationError) {
      setInvalidField(validationError.field ?? null);
      setStatus("error");
      setMessage(validationError.message);
      return;
    }

    setInvalidField(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { ok: boolean; message: string };
      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message || "신청 처리 중 문제가 발생했습니다.");
        return;
      }
      setStatus("success");
      setMessage(data.message);
      setInvalidField(null);
      setForm(initialForm);
    } catch {
      setStatus("error");
      setMessage("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="이름" htmlFor="name" required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className={fieldClass(invalidField === "name")}
            aria-invalid={invalidField === "name"}
            required
          />
        </Field>
        <Field label="연락처" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateForm({ phone: e.target.value })}
            className={fieldClass(invalidField === "phone")}
            aria-invalid={invalidField === "phone"}
            required
          />
        </Field>
      </div>
      <Field label="이메일" htmlFor="email" required>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => updateForm({ email: e.target.value })}
          className={fieldClass(invalidField === "email")}
          aria-invalid={invalidField === "email"}
          required
        />
      </Field>
      <Field label="상담 분야" htmlFor="area" required>
        <select
          id="area"
          name="area"
          value={form.area}
          onChange={(e) => updateForm({ area: e.target.value })}
          className={fieldClass(invalidField === "area")}
          aria-invalid={invalidField === "area"}
          required
        >
          <option value="">상담 분야를 선택해 주세요</option>
          {practiceAreas.map((area) => (
            <option key={area.id} value={area.id}>
              {area.title}
            </option>
          ))}
        </select>
      </Field>
      <Field label="상담 내용" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(e) => updateForm({ message: e.target.value })}
          placeholder="10자 이상 입력해 주세요"
          className={`${fieldClass(invalidField === "message")} resize-y`}
          aria-invalid={invalidField === "message"}
          required
        />
      </Field>
      <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-white"
          checked={form.consent}
          onChange={(e) => updateForm({ consent: e.target.checked })}
          aria-invalid={invalidField === "consent"}
          required
        />
        <span>
          개인정보 수집 및 이용에 동의합니다. 수집 항목은 이름, 연락처, 이메일, 상담 내용이며
          상담 응대 목적으로만 사용됩니다. 자세한 내용은 개인정보처리방침을 확인해 주세요.
        </span>
      </label>
      {message ? (
        <p
          className={`text-sm ${status === "success" ? "text-slate-200" : "text-slate-200"}`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 w-full items-center justify-center bg-white px-6 text-[15px] font-medium text-navy transition-colors hover:bg-slate-100 disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "신청 중..." : "상담 신청하기"}
      </button>
    </form>
  );
}

const inputClass =
  "mt-2 w-full min-h-12 border border-white/20 bg-navy-800 px-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-white/50";

function fieldClass(invalid: boolean) {
  return invalid ? `${inputClass} border-white` : inputClass;
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm text-slate-200">
        {label}
        {required ? <span className="ml-1 text-slate-400">*</span> : null}
      </label>
      {children}
    </div>
  );
}
