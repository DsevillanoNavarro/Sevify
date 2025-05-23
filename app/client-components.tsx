"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Cargar componentes no críticos de forma diferida
export const DynamicInteractiveCanvas = dynamic(
  () => import("@/components/interactive-canvas").then((mod) => mod.InteractiveCanvas),
  { ssr: false },
)

export const DynamicAbout = dynamic(() => import("@/components/about").then((mod) => mod.About), { suspense: true })

export const DynamicServices = dynamic(() => import("@/components/services").then((mod) => mod.Services), {
  suspense: true,
})

export const DynamicProcess = dynamic(() => import("@/components/process").then((mod) => mod.Process), {
  suspense: true,
})

export const DynamicPortfolio = dynamic(() => import("@/components/portfolio").then((mod) => mod.Portfolio), {
  suspense: true,
})

export const DynamicCreativeSection = dynamic(
  () => import("@/components/creative-section").then((mod) => mod.CreativeSection),
  { suspense: true },
)

// Reemplazar la importación del componente Team con el componente Technologies
//export const DynamicTeam = dynamic(() => import("@/components/team").then((mod) => mod.Team), { suspense: true })

// Cambiar por:
export const DynamicTechnologies = dynamic(() => import("@/components/technologies").then((mod) => mod.Technologies), {
  suspense: true,
})

export const DynamicContact = dynamic(() => import("@/components/contact").then((mod) => mod.Contact), {
  suspense: true,
})

// Componente contenedor para los componentes dinámicos con Suspense
export function DynamicSections() {
  return (
    <>
      <Suspense fallback={<div className="w-full h-[150px]"></div>}>
        <DynamicInteractiveCanvas />
      </Suspense>
      <Suspense fallback={<div className="w-full py-16 md:py-24 bg-accent/5"></div>}>
        <DynamicAbout />
      </Suspense>
      <Suspense fallback={<div className="w-full py-16 md:py-24"></div>}>
        <DynamicServices />
      </Suspense>
      <Suspense fallback={<div className="w-full py-16 md:py-24 bg-accent/5"></div>}>
        <DynamicProcess />
      </Suspense>
      <Suspense fallback={<div className="w-full py-16 md:py-24"></div>}>
        <DynamicPortfolio />
      </Suspense>
      <Suspense fallback={<div className="w-full py-16 md:py-24 bg-accent/5"></div>}>
        <DynamicCreativeSection />
      </Suspense>
      {/* Reemplazar la sección de DynamicTeam en el componente DynamicSections
      <Suspense fallback={<div className="w-full py-16 md:py-24 bg-accent/5"></div>}>
        <DynamicTeam />
      </Suspense>

      // Cambiar por: */}
      <Suspense fallback={<div className="w-full py-16 md:py-24 bg-accent/5"></div>}>
        <DynamicTechnologies />
      </Suspense>
      <Suspense fallback={<div className="w-full py-16 md:py-24 bg-accent/5"></div>}>
        <DynamicContact />
      </Suspense>
    </>
  )
}
