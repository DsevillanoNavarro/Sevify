import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { UltraAdvancedSEO } from "@/components/ultra-advanced-seo"
import { GoogleIndexingOptimizer } from "@/components/google-indexing-optimizer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sevify.es"),
  title: {
    default: "Sevify | Diseño Web Moderno, Minimalista y Funcional en Sevilla",
    template: "%s | Sevify - Diseño Web Profesional",
  },
  description:
    "Sevify crea experiencias digitales con diseño web minimalista, interfaces intuitivas y alto rendimiento. Diseño web profesional en Sevilla, Andalucía.",
  keywords: [
    "diseño web Sevilla",
    "desarrollo web profesional",
    "agencia web Andalucía",
    "páginas web responsive",
    "diseñador web freelance Sevilla",
    "desarrollo frontend",
    "UI UX design",
    "web minimalista",
    "diseño web moderno",
    "programador web Sevilla",
    "creación páginas web",
    "diseño web empresas",
    "desarrollo web a medida",
    "optimización web SEO",
    "mantenimiento web",
  ],
  authors: [{ name: "Sevify", url: "https://sevify.es" }],
  creator: "Sevify",
  publisher: "Sevify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      es: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sevify.es",
    title: "Sevify | Diseño Web Moderno y Profesional en Sevilla",
    description:
      "Creamos experiencias digitales únicas con diseño web moderno y desarrollo profesional.",
    siteName: "Sevify",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sevify - Diseño Web Profesional en Sevilla",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sevify | Diseño Web Profesional en Sevilla",
    description: "Creamos experiencias digitales únicas con diseño web moderno y desarrollo profesional.",
    creator: "@sevify",
    site: "@sevify",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Reemplazar con código real
  },
  category: "technology",
  classification: "Business",
  generator: "Next.js",
  applicationName: "Sevify",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <head>
        <UltraAdvancedSEO />
        <GoogleIndexingOptimizer />
        
        {/* Meta tags específicos para indexación rápida de Google */}
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="google" content="notranslate" />
        <meta name="google-site-verification" content="google-site-verification-code" />

        {/* Optimización para Core Web Vitals */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/og-image.jpg" as="image" />

        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Preconnect para recursos críticos */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NMGQX6HX63"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NMGQX6HX63');
              `,
            }}
          ></script>

        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <a href="#main" className="skip-link">
          Saltar al contenido principal
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
          
    </html>
  )
}
