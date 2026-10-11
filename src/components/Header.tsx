"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  attachToHero?: boolean;
};

const headerNav = [
  { href: "/#practice", label: "업무분야" },
  { href: "/#attorney", label: "변호사 소개" },
  { href: "/#why-us", label: "상담 사례" },
  { href: "/#faq", label: "FAQ" },
] as const;

const LEAD_NAME_KEY = "consultationName";
const LEAD_PHONE_KEY = "consultationPhone";

export function Header({ attachToHero = false }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(pathname !== "/" || attachToHero);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (attachToHero) return;

    const onScroll = () => {
      if (pathname !== "/") {
        setScrolled(true);
        return;
      }
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, attachToHero]);

  useEffect(() => {
    if (!attachToHero) return;
    document.body.style.paddingBottom = "92px";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [attachToHero]);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onNavy = attachToHero || !scrolled;

  const headerClass = attachToHero
    ? "site-nav site-nav--hero fixed inset-x-0 bottom-0 z-40"
    : `site-nav fixed inset-x-0 top-0 z-40 ${
        scrolled ? "site-nav--light" : "site-nav--hero"
      }`;

  return (
    <>
      {attachToHero ? (
        <div className="h-16 shrink-0 sm:h-[72px]" aria-hidden />
      ) : null}
      <header className={headerClass}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[72px] sm:gap-4 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
            aria-label="정유진 변호사사무소 홈"
          >
            <img
              src="/images/mark.png"
              alt=""
              className="h-6 w-auto object-contain sm:h-8 lg:h-9"
            />
            <span
              className={`min-w-0 leading-none ${onNavy ? "text-white" : "text-navy"}`}
            >
              <span className="text-[14px] font-semibold tracking-tight sm:text-[15px]">
                정유진
              </span>
              <span
                className={`ml-1 text-[11px] font-normal sm:text-[12px] ${
                  onNavy ? "text-white/70" : "text-slate-500"
                } max-[380px]:hidden`}
              >
                변호사사무소
              </span>
            </span>
          </Link>

          <nav
            className="hidden h-full items-center gap-7 lg:flex"
            aria-label="주요 메뉴"
          >
            {headerNav.map((item) => {
              const active = pathname === "/" && hash === item.href.slice(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative inline-flex h-full items-center text-[13px] tracking-wide transition-colors duration-200 ${
                    onNavy
                      ? active
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                      : active
                        ? "text-navy"
                        : "text-slate-500 hover:text-navy"
                  }`}
                >
                  {item.label}
                  {active ? (
                    <span
                      className={`absolute inset-x-0 bottom-0 h-px ${
                        onNavy ? "bg-white/80" : "bg-navy"
                      }`}
                      aria-hidden
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex min-w-0 items-center gap-2">
            <LeadFields onNavy={onNavy} />
            <button
              type="button"
              className={`inline-flex min-h-10 min-w-10 items-center justify-center lg:hidden ${
                onNavy ? "text-white" : "text-navy"
              }`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X size={20} strokeWidth={1.6} />
              ) : (
                <Menu size={20} strokeWidth={1.6} />
              )}
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-menu"
            className={`lg:hidden ${
              attachToHero
                ? "absolute inset-x-0 bottom-full border-b border-white/10"
                : "border-t border-white/10"
            }`}
            style={{ background: "linear-gradient(to bottom, #141c2b, #1a2332)" }}
          >
            <nav
              className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8"
              aria-label="모바일 메뉴"
            >
              {headerNav.map((item) => {
                const active = pathname === "/" && hash === item.href.slice(1);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex min-h-11 items-center border-b border-white/[0.08] text-[14px] transition-colors duration-200 ${
                      active ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}

function LeadFields({ onNavy }: { onNavy: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const fieldClass = onNavy
    ? "h-9 border border-white/25 bg-white/10 px-3 text-[13px] text-white outline-none placeholder:text-white/45 focus:border-white/60"
    : "h-9 border border-gray-200 bg-white px-3 text-[13px] text-navy outline-none placeholder:text-slate-400 focus:border-navy";

  function goToConsultation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      sessionStorage.setItem(LEAD_NAME_KEY, name.trim());
      sessionStorage.setItem(LEAD_PHONE_KEY, phone.trim());
    } catch {
      /* ignore quota / private mode */
    }
    document
      .getElementById("consultation")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form
      onSubmit={goToConsultation}
      className="flex min-w-0 items-center gap-2"
    >
      <label className="sr-only" htmlFor="nav-lead-name">
        이름
      </label>
      <input
        id="nav-lead-name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="이름"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className={`hidden w-[132px] shrink-0 lg:block ${fieldClass}`}
      />
      <label className="sr-only" htmlFor="nav-lead-phone">
        전화번호
      </label>
      <input
        id="nav-lead-phone"
        name="phone"
        type="tel"
        inputMode="numeric"
        autoComplete="tel"
        placeholder="전화번호"
        value={phone}
        onChange={(event) =>
          setPhone(event.target.value.replace(/[^\d-]/g, ""))
        }
        className={`hidden w-[148px] shrink-0 min-[420px]:block sm:w-[168px] ${fieldClass}`}
      />
      <button
        type="submit"
        className="inline-flex h-9 shrink-0 items-center bg-white px-3.5 text-[12px] font-medium text-navy transition-colors hover:bg-slate-100 sm:px-4 sm:text-[13px]"
      >
        상담 신청
      </button>
    </form>
  );
}
