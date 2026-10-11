import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center bg-white">
        <div className="mx-auto max-w-xl px-5 py-28 text-center">
          <p className="text-xs tracking-[0.18em] text-slate-500">404</p>
          <h1 className="mt-3 text-2xl font-semibold text-navy">페이지를 찾을 수 없습니다</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            요청하신 페이지가 없거나 이동되었을 수 있습니다.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-12 items-center bg-navy px-6 text-sm font-medium text-white"
          >
            홈으로 이동
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
