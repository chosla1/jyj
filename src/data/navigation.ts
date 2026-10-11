export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/#about", label: "법률사무소 소개" },
  { href: "/#practice", label: "업무 분야" },
  { href: "/#attorney", label: "변호사 소개" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#consultation", label: "상담 신청" },
];

export const footerNav: NavItem[] = [
  { href: "/#about", label: "법률사무소 소개" },
  { href: "/#practice", label: "업무 분야" },
  { href: "/#attorney", label: "변호사 소개" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#consultation", label: "상담 신청" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/terms", label: "이용약관" },
];
