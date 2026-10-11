import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <p className="text-base font-semibold text-white">{site.name}</p>
          <p className="mt-3 text-sm leading-7">
            대표변호사 정유진
            <span className="mx-2 text-slate-500" aria-hidden>
              ·
            </span>
            광고책임변호사 정유진
          </p>
          <p className="mt-4 text-sm leading-7">
            주소
            <br />
            {site.address}
          </p>
          <p className="mt-4 text-sm">전화 {site.phoneDisplay}</p>
        </div>
        <nav className="lg:col-span-7" aria-label="푸터 메뉴">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs leading-6 text-slate-500 sm:px-8 lg:px-10">
          <p>
            {site.name}
            <span className="mx-1.5">·</span>
            대표변호사 정유진
            <span className="mx-1.5">·</span>
            광고책임변호사 정유진
            <span className="mx-1.5">·</span>
            {site.address}
          </p>
          <p>© 2026 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
