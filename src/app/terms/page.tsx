import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "이용약관",
  description: `${site.name} 홈페이지 이용약관 초안입니다.`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 lg:pt-32">
          <p className="text-xs tracking-[0.18em] text-slate-500">POLICY</p>
          <h1 className="mt-3 text-3xl font-semibold text-navy">이용약관</h1>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            본 문서는 홈페이지 이용에 관한 초안입니다. 실제 약관 문구는 법률 검토 후 교체해야 합니다.
          </p>
          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
            <section>
              <h2 className="text-lg font-semibold text-navy">1. 목적</h2>
              <p className="mt-3">
                이 약관은 {site.name} 홈페이지 이용과 관련된 기본 사항을 안내하기 위한 것입니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">2. 정보의 성격</h2>
              <p className="mt-3">
                본 사이트에 게시된 내용은 일반적인 안내이며, 개별 사건에 대한 법률 자문 또는 법률 의견을 대체하지 않습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-navy">3. 상담 신청</h2>
              <p className="mt-3">
                상담 신청이 수임을 의미하지는 않습니다. 수임 여부 및 비용은 별도 안내 후 협의합니다. 세부 절차는 [추후 입력]입니다.
              </p>
            </section>
          </div>
          <Link href="/" className="mt-12 inline-flex min-h-11 items-center text-sm text-navy">
            홈으로 돌아가기
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
