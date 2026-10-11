import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "gray" | "navy";
};

const tones = {
  white: "bg-white",
  gray: "bg-gray-50",
  navy: "bg-navy",
};

export function Section({
  id,
  children,
  className = "",
  tone = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        {children}
      </div>
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: HeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={`text-xs font-medium tracking-[0.18em] ${
            light ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
