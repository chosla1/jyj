import Link from "next/link";
import { Check } from "lucide-react";
import { getPhoneHref, site } from "@/data/site";

export function Hero() {
  const phoneHref = getPhoneHref();
  const heroSrc = site.heroImageSrc || "/images/hero.jpg";

  return (
    <section className="hero-section relative flex min-h-0 flex-1 flex-col overflow-hidden bg-white lg:block">
      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center px-5 py-8 sm:px-10 sm:py-10 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[52%] lg:px-20 lg:py-12 xl:px-[7.5rem]">
        <div className="hero-copy w-full max-w-[640px] min-w-0 text-left">
          <h1 className="break-keep text-3xl font-semibold leading-snug tracking-tight text-navy sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-[1.22]">
            의뢰인의 재산은 곧 권리입니다.
            <br />
            끝까지 추적해 회수합니다.
          </h1>
          <div className="mt-6 break-keep text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>보이스피싱 · 로맨스스캠 · 투자사기 환수</p>
            <p>대여금 · 미수금 · 채권 회수까지</p>
            <p>상황에 맞는 실질적인 회수 절차를 진행합니다.</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/#consultation"
              className="inline-flex min-h-[44px] w-full items-center justify-center bg-navy px-7 text-[15px] font-medium text-white transition-colors hover:bg-navy-800 sm:min-h-12 sm:w-auto"
            >
              상담 신청
            </Link>
            <Link
              href={phoneHref}
              className="inline-flex min-h-[44px] w-full items-center justify-center border border-navy bg-white px-7 text-[15px] font-medium text-navy transition-colors hover:bg-gray-50 sm:min-h-12 sm:w-auto"
            >
              전화 상담
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="inline-flex items-center gap-2 text-[14px] leading-none text-slate-500 sm:text-[15px]">
              <Check
                className="size-3.5 shrink-0 text-navy sm:size-4"
                strokeWidth={2}
                aria-hidden
              />
              초기 상담 무료
            </p>
            <p className="inline-flex items-center gap-2 text-[14px] leading-none text-slate-500 sm:text-[15px]">
              <Check
                className="size-3.5 shrink-0 text-navy sm:size-4"
                strokeWidth={2}
                aria-hidden
              />
              24시간 상담 가능
            </p>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden>
        <img
          src={heroSrc}
          alt=""
          className="hero-visual-image"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}
