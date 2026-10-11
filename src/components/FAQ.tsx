"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { faqGroups } from "@/data/faq";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(
    faqGroups[0]?.items[0]?.id ?? null,
  );

  return (
    <Section id="faq" tone="gray">
      <SectionHeading
        eyebrow="FAQ"
        title="자주 묻는 질문"
        description="보이스피싱, 투자사기, 금융기관 사칭, 채권 회수 및 상담 진행과 관련해 자주 확인하는 내용을 정리했습니다."
      />
      <div className="mt-12 space-y-10">
        {faqGroups.map((group) => (
          <div key={group.id}>
            <p className="mb-3 text-xs font-medium tracking-[0.14em] text-slate-500">
              {group.title}
            </p>
            <div className="divide-y divide-gray-200 border-y border-gray-200 bg-white">
              {group.items.map((item) => {
                const open = openId === item.id;
                return (
                  <div key={item.id}>
                    <h3>
                      <button
                        type="button"
                        className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                        aria-expanded={open}
                        onClick={() => setOpenId(open ? null : item.id)}
                      >
                        <span className="text-[15px] font-medium text-navy">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                            open ? "rotate-180" : ""
                          }`}
                          size={18}
                          strokeWidth={1.6}
                          aria-hidden
                        />
                      </button>
                    </h3>
                    {open ? (
                      <div className="px-5 pb-5 sm:px-6">
                        <p className="max-w-3xl text-sm leading-7 text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
