import { Section, SectionHeading } from "@/components/Section";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <Section id="process" tone="white">
      <SectionHeading
        eyebrow="PROCESS"
        title="상담 절차"
        description="법률 상담이 처음이어도 다음 단계를 예측할 수 있도록 과정을 단순하게 구성했습니다."
      />
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <li key={step.number} className="relative">
            <div className="border border-gray-200 p-6">
              <p className="text-xs font-medium tracking-[0.18em] text-slate-500">
                STEP {step.number}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </div>
            {index < processSteps.length - 1 ? (
              <span className="absolute top-8 -right-3 hidden h-px w-6 bg-gray-200 lg:block" aria-hidden />
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
