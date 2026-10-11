import { Section } from "@/components/Section";
import { site } from "@/data/site";

export function About() {
  return (
    <Section id="about" tone="white">
      <p className="text-xs font-medium tracking-[0.18em] text-slate-500">
        ABOUT
      </p>
      <div className="mt-3 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-semibold leading-snug tracking-tight text-navy sm:text-3xl">
            {site.name}
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            정유진 법률사무소는 보이스피싱·투자사기·폰지사기 등 금전 피해 사건과
            대여금·미수금 등 채권 회수 사건을 중심으로 의뢰인의 상황을 면밀히
            살피고, 실질적인 대응 방향을 함께 검토합니다.
          </p>
          <p className="mt-6 text-base leading-8 text-slate-600">
            금전 피해 사건은 피해가 발생한 경위와 자금의 흐름, 상대방과 주고받은
            자료 등에 따라 대응 방법이 달라질 수 있습니다. 정유진 법률사무소는
            사건의 사실관계를 구체적으로 확인하고, 민·형사상 가능한 법적 대응과
            피해금 회복 방안을 검토합니다.
          </p>
        </div>
        <aside className="h-fit border border-gray-200 bg-gray-50 p-6 lg:col-span-5 lg:p-7">
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="text-slate-500">법률사무소</dt>
              <dd className="mt-1 text-base font-medium text-navy">{site.name}</dd>
            </div>
            <div>
              <dt className="text-slate-500">담당 변호사</dt>
              <dd className="mt-1 text-base font-medium text-navy">
                {site.attorneyTitle} {site.attorneyName}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">위치</dt>
              <dd className="mt-1 text-base font-medium text-navy">{site.address}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  );
}
