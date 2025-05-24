import type { Metadata } from "next"

// Cargar componentes críticos inmediatamente
import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DynamicSections } from "./client-components"

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
  icons: {
    icon: "./favicon.ico", // ruta relativa en public/
    shortcut: "./favicon.ico", // para navegadores que usan shortcut icon
    apple: "./apple-touch-icon.png", // si tienes icono para iOS
  },
}

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <DynamicSections />
      <Footer />
    </main>
  )
}
