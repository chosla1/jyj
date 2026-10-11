"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import {
  caseFilters,
  cases,
  type RecoveryCase,
} from "@/data/cases";

const disclaimer = "본 사례는 시험용 예시이며, 실제 사례와 다를 수 있습니다.";

export function WhyUs() {
  const [filter, setFilter] = useState<(typeof caseFilters)[number]>("전체");
  const [selected, setSelected] = useState<RecoveryCase | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const visibleCases = useMemo(
    () =>
      filter === "전체"
        ? cases
        : cases.filter((item) => item.category === filter),
    [filter],
  );

  function openCase(item: RecoveryCase, button: HTMLButtonElement) {
    openerRef.current = button;
    setSelected(item);
  }

  function closeCase() {
    setSelected(null);
    openerRef.current?.focus();
  }

  return (
    <Section id="why-us" tone="gray">
      <SectionHeading
        eyebrow="CASES"
        title="환수 완료 사례"
        description="다양한 피해 유형에 대한 환수 결과입니다."
      />
      <div className="mt-8 flex flex-wrap gap-2">
        {caseFilters.map((item) => {
          const active = filter === item;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`min-h-10 px-4 text-sm transition-colors duration-200 ${
                active
                  ? "bg-navy text-white"
                  : "border border-gray-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleCases.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={(event) => openCase(item, event.currentTarget)}
            className="cursor-pointer border border-gray-200 bg-white p-5 text-left shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-colors duration-200 hover:border-slate-300"
            aria-haspopup="dialog"
          >
            <p className="text-xs tracking-[0.08em] text-slate-500">
              {item.category} · {item.type}
            </p>
            <p className="mt-4 text-sm text-slate-500">피해 금액</p>
            <p className="mt-1 text-base font-medium text-navy">{item.amount}</p>
            <p className="mt-4 text-sm text-slate-500">환수 결과</p>
            <p className="mt-1 text-base font-medium text-navy">{item.result}</p>
            <p className="mt-4 text-sm text-slate-500">소요 기간</p>
            <p className="mt-1 text-sm text-slate-600">{item.period}</p>
          </button>
        ))}
      </div>
      <p className="mt-8 text-xs leading-6 text-slate-500">{disclaimer}</p>
      {selected ? (
        <CaseModal caseItem={selected} onClose={closeCase} />
      ) : null}
    </Section>
  );
}

function CaseModal({
  caseItem,
  onClose,
}: {
  caseItem: RecoveryCase;
  onClose: () => void;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-navy/70"
        aria-label="모달 닫기"
        onClick={onClose}
      />
      <div className="pointer-events-none absolute inset-0 flex items-stretch justify-center sm:items-center sm:p-6">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="pointer-events-auto relative h-full w-full max-w-xl overflow-y-auto bg-white px-6 pb-10 pt-14 sm:h-auto sm:max-h-[90vh] sm:border sm:border-gray-200 sm:px-8 sm:pb-10 sm:pt-16"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors duration-300 hover:bg-black/60"
            aria-label="닫기"
          >
            <X size={18} strokeWidth={1.8} />
          </button>
          <p className="text-xs tracking-[0.12em] text-slate-500">
            {caseItem.category} · {caseItem.type}
          </p>
          <h3
            id={titleId}
            className="mt-3 text-2xl font-bold tracking-tight text-navy"
          >
            {caseItem.type} {caseItem.category}
          </h3>
          <dl className="mt-8 grid gap-4 border border-gray-200 bg-gray-50 p-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs text-slate-500">피해 금액</dt>
              <dd className="mt-1 text-sm font-medium text-navy">
                {caseItem.amount}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">환수 결과</dt>
              <dd className="mt-1 text-sm font-medium text-navy">
                {caseItem.result}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">소요 기간</dt>
              <dd className="mt-1 text-sm font-medium text-navy">
                {caseItem.period}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">담당 변호사</dt>
              <dd className="mt-1 text-sm font-medium text-navy">
                {caseItem.attorney}
              </dd>
            </div>
          </dl>
          <div className="mt-8">
            <p className="text-xs font-medium tracking-[0.14em] text-slate-500">
              피해 경위
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {caseItem.summary}
            </p>
          </div>
          <div className="mt-8">
            <p className="text-xs font-medium tracking-[0.14em] text-slate-500">
              진행 내용
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {caseItem.process}
            </p>
          </div>
          <p className="mt-8 text-xs leading-6 text-slate-500">{disclaimer}</p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
