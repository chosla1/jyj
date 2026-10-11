import type { Metadata } from "next";
import { seo, site } from "@/data/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: `%s | ${site.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: site.name,
  authors: [{ name: `${site.attorneyTitle} ${site.attorneyName}` }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site.url,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  description: seo.description,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "호계동 250-3 302호",
    addressLocality: "북구",
    addressRegion: "울산광역시",
    addressCountry: "KR",
  },
  employee: {
    "@type": "Person",
    name: site.attorneyName,
    jobTitle: site.attorneyTitle,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full scroll-smooth">
      <body className="min-h-full bg-white text-slate-700 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
