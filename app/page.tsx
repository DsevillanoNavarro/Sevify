import type { Metadata } from "next"

// Cargar componentes críticos inmediatamente
import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DynamicSections } from "./client-components"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { seoConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  keywords: [
    ...seoConfig.defaultKeywords,
    "página principal",
    "inicio",
    "home",
    "diseño web Sevilla centro",
    "agencia digital Andalucía",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sevify - Diseño Web Moderno y Minimalista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: ["/twitter-image.jpg"],
  },
  other: {
    "article:publisher": seoConfig.social.linkedin,
    "article:author": seoConfig.social.linkedin,
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main id="main" className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <DynamicSections />
      </main>
      <Footer />
    </>
  )
}
