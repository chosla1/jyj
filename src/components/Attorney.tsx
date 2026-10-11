"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { attorneys, type Attorney as AttorneyProfile } from "@/data/attorneys";

export function Attorney() {
  const [selected, setSelected] = useState<AttorneyProfile | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  function openProfile(attorney: AttorneyProfile, button: HTMLButtonElement) {
    openerRef.current = button;
    setSelected(attorney);
  }

  function closeProfile() {
    setSelected(null);
    openerRef.current?.focus();
  }

  return (
    <Section id="attorney" tone="white">
      <SectionHeading eyebrow="ATTORNEY" title="변호사 소개" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {attorneys.map((attorney) => (
          <AttorneyCard
            key={attorney.id}
            attorney={attorney}
            onOpen={openProfile}
          />
        ))}
      </div>
      {selected ? (
        <AttorneyModal attorney={selected} onClose={closeProfile} />
      ) : null}
    </Section>
  );
}

function AttorneyCard({
  attorney,
  onOpen,
}: {
  attorney: AttorneyProfile;
  onOpen: (attorney: AttorneyProfile, button: HTMLButtonElement) => void;
}) {
  return (
    <button
      type="button"
      onClick={(event) => onOpen(attorney, event.currentTarget)}
      className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden border border-gray-200 bg-gray-100 text-left shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-[box-shadow] duration-300 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)] focus-visible:outline-offset-4"
      aria-haspopup="dialog"
      aria-label={`${attorney.name} ${attorney.role} 상세 보기`}
    >
      <div className="h-full w-full transition-transform duration-300 group-hover:scale-105">
        <AttorneyPhoto
          attorney={attorney}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-2xl font-bold tracking-tight">
          {attorney.name}
          <span className="ml-2 text-sm font-normal text-white/85">
            {attorney.role}
          </span>
        </p>
        <p className="mt-1 text-sm text-white/75">{attorney.nameEn}</p>
      </div>
    </button>
  );
}

function AttorneyPhoto({
  attorney,
  className,
}: {
  attorney: AttorneyProfile;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const initial = attorney.name.slice(0, 1);

  return (
    <div className="relative h-full w-full bg-navy-700">
      {failed ? (
        <div
          className="absolute inset-0 flex items-center justify-center text-5xl font-semibold text-white"
          aria-hidden
        >
          {initial}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={attorney.photo}
          alt={`${attorney.name} 변호사`}
          className={`absolute inset-0 h-full w-full object-cover ${className ?? ""}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function AttorneyModal({
  attorney,
  onClose,
}: {
  attorney: AttorneyProfile;
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
          className="pointer-events-auto relative flex h-full w-full max-w-3xl flex-col overflow-y-auto bg-white pt-0 sm:h-auto sm:max-h-[90vh] sm:border sm:border-gray-200"
        >
          <div className="grid flex-1 md:grid-cols-2">
            <div className="relative aspect-[3/4] bg-gray-100 md:aspect-auto md:min-h-[420px]">
              <AttorneyPhoto
                attorney={attorney}
                className="h-full w-full object-cover"
              />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors duration-300 hover:bg-black/60"
                aria-label="닫기"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>
            <div className="flex flex-col px-6 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8">
              <p className="text-sm text-slate-500">{attorney.role}</p>
              <h3
                id={titleId}
                className="mt-1 text-2xl font-bold tracking-tight text-navy"
              >
                {attorney.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{attorney.nameEn}</p>
              <div className="mt-8">
                <p className="text-xs font-medium tracking-[0.14em] text-slate-500">
                  전문 분야
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {attorney.specialties.map((item) => (
                    <li
                      key={item}
                      className="border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-navy"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-xs font-medium tracking-[0.14em] text-slate-500">
                  경력
                </p>
                <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-600">
                  {attorney.career.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-xs font-medium tracking-[0.14em] text-slate-500">
                  학력
                </p>
                <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-600">
                  {attorney.education.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
