import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sevify | Agencia de Diseño Web en Sevilla",
  description:
    "Agencia de diseño web en Sevilla. Creamos páginas web modernas, profesionales y a medida para impulsar tu negocio digital.",
  keywords: [
    "diseño web",
    "páginas web",
    "desarrollo web",
    "agencia digital",
    "diseño profesional",
    "Sevilla",
    "diseño web Sevilla",
    "desarrollo web Sevilla",
  ],
  authors: [{ name: "Sevify" }],
  creator: "Sevify",
  publisher: "Sevify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sevify | Agencia de Diseño Web en Sevilla",
    description: "Creamos experiencias digitales excepcionales que transforman ideas en realidades impactantes.",
    url: "https://sevify.com",
    siteName: "Sevify",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sevify | Agencia de Diseño Web en Sevilla",
    description: "Creamos experiencias digitales excepcionales que transforman ideas en realidades impactantes.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
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
