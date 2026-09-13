import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { site, links } from "@/data/content";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seoTitle,
    template: `%s · ${site.name}`,
  },
  description: site.seoDescription,
  keywords: [
    "AI Product Manager",
    "Ridhi Jolly",
    "KaDeep Studios",
    "TestStudios",
    "chat-first QA",
    "accessibility",
    "WCAG",
    "test automation",
    "IEEE",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    title: site.seoTitle,
    description: site.seoDescription,
    siteName: site.seoTitle,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F5FA" },
    { media: "(prefers-color-scheme: dark)", color: "#121018" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: links.email,
  telephone: links.phone,
  url: site.url,
  image: `${site.url}/portrait.png`,
  sameAs: [links.linkedin, links.github, links.leetcode],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bennett University",
  },
  worksFor: {
    "@type": "Organization",
    name: "KaDeep AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
