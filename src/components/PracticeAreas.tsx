import { Section, SectionHeading } from "@/components/Section";
import { practiceAreas } from "@/data/practiceAreas";

export function PracticeAreas() {
  return (
    <Section id="practice" tone="gray">
      <SectionHeading
        eyebrow="PRACTICE AREAS"
        title="주요 업무 분야"
        description="피해금 회복과 채권 회수를 중심으로 사건의 사실관계를 면밀히 검토하고 대응 방향을 제시합니다."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {practiceAreas.map((area, index) => {
          const number = String(index + 1).padStart(2, "0");
          return (
            <article
              key={area.id}
              className="border border-gray-200 bg-white p-6 transition-colors hover:border-slate-300 sm:p-8"
            >
              <p className="text-[11px] font-medium tracking-[0.22em] text-navy">
                {number}
              </p>
              <div className="mt-3 h-px w-8 bg-navy/20" aria-hidden />
              <h3 className="mt-5 text-lg font-semibold text-navy">{area.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
