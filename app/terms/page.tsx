import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SchemaMarkup } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Sevify",
  description: "Términos y condiciones de uso de los servicios de Sevify",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Términos y Condiciones | Sevify",
    description: "Términos y condiciones de uso de los servicios de Sevify",
    url: "https://sevify.com/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup
        title="Términos y Condiciones | Sevify"
        description="Términos y condiciones de uso de los servicios de Sevify"
      />
      <div className="container py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los términos</h2>
            <p className="mb-4">
              Al acceder y utilizar el sitio web de Sevify, aceptas estar sujeto a estos términos y condiciones de uso.
              Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Descripción del servicio</h2>
            <p className="mb-4">Sevify ofrece servicios de diseño y desarrollo web, incluyendo pero no limitado a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Diseño web responsivo y moderno</li>
              <li>Desarrollo de aplicaciones web</li>
              <li>Optimización SEO</li>
              <li>Mantenimiento web</li>
              <li>Consultoría digital</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Uso del sitio web</h2>
            <p className="mb-4">
              Te comprometes a utilizar nuestro sitio web únicamente para fines legítimos y de manera que no infrinja
              los derechos de terceros o restrinja o inhiba el uso y disfrute del sitio web por parte de cualquier
              tercero.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Propiedad intelectual</h2>
            <p className="mb-4">
              Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes, clips de audio,
              descargas digitales y software, es propiedad de Sevify o de sus proveedores de contenido y está protegido
              por las leyes de derechos de autor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Limitación de responsabilidad</h2>
            <p className="mb-4">
              Sevify no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que
              resulte del uso o la imposibilidad de usar nuestro sitio web o servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Modificaciones</h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las
              modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Ley aplicable</h2>
            <p className="mb-4">
              Estos términos y condiciones se rigen por las leyes españolas. Cualquier disputa será sometida a la
              jurisdicción de los tribunales competentes de España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contacto</h2>
            <p className="mb-4">
              Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos a través de nuestro formulario
              de contacto en el sitio web.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
