"use client"

import { usePathname } from "next/navigation"
import { generateOrganizationSchema, generateWebPageSchema, generateServiceSchema } from "@/lib/schema"

interface SchemaMarkupProps {
  title?: string
  description?: string
}

export function SchemaMarkup({ title, description }: SchemaMarkupProps) {
  const pathname = usePathname()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sevify.es"
  const currentUrl = `${baseUrl}${pathname}`

  const pageTitle = title || "Sevify | Diseño Web Moderno, Minimalista y Funcional"
  const pageDescription =
    description ||
    "Sevify crea experiencias digitales con diseño web minimalista, interfaces intuitivas y alto rendimiento. Inspirado en la estética y la usabilidad."

  // Determinar qué esquemas generar según la página actual
  const schemas = []

  // Esquema de organización para todas las páginas
  schemas.push(generateOrganizationSchema())

  // Esquema de página web para todas las páginas
  schemas.push(generateWebPageSchema(pageTitle, pageDescription, currentUrl))

  // Esquema de servicio solo para la página principal
  if (pathname === "/") {
    schemas.push(generateServiceSchema())
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}
