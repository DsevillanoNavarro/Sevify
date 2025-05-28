import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SchemaMarkup } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies | Sevify",
  description: "Información sobre el uso de cookies en el sitio web de Sevify",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Política de Cookies | Sevify",
    description: "Información sobre el uso de cookies en el sitio web de Sevify",
    url: "https://sevify.com/cookies",
  },
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup
        title="Política de Cookies | Sevify"
        description="Información sobre el uso de cookies en el sitio web de Sevify"
      />
      <div className="container py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Política de Cookies</h1>
          <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">¿Qué son las cookies?</h2>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
              Nos ayudan a hacer que el sitio web funcione, o funcione de manera más eficiente, así como a proporcionar
              información a los propietarios del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">¿Cómo utilizamos las cookies?</h2>
            <p className="mb-4">Utilizamos cookies para varios propósitos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web
              </li>
              <li>
                <strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo los visitantes interactúan con
                nuestro sitio web
              </li>
              <li>
                <strong>Cookies de funcionalidad:</strong> Permiten que el sitio web recuerde las elecciones que haces
              </li>
              <li>
                <strong>Cookies de preferencias:</strong> Guardan tus preferencias como el tema (claro/oscuro)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tipos de cookies que utilizamos</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Cookies técnicas</h3>
                <p className="mb-2">
                  Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las
                  diferentes opciones o servicios que en ella existan.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Cookies de personalización</h3>
                <p className="mb-2">
                  Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas
                  en función de una serie de criterios en el terminal del usuario.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Cookies de análisis</h3>
                <p className="mb-2">
                  Son aquellas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de
                  usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios
                  del servicio ofertado.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Gestión de cookies</h2>
            <p className="mb-4">
              Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en
              tu dispositivo y puedes configurar la mayoría de los navegadores para evitar que se coloquen.
            </p>
            <p className="mb-4">
              Para gestionar las cookies, puedes hacerlo a través de la configuración de tu navegador:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
              </li>
              <li>
                <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio
              </li>
              <li>
                <strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web
              </li>
              <li>
                <strong>Edge:</strong> Configuración → Cookies y permisos del sitio
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies de terceros</h2>
            <p className="mb-4">
              Nuestro sitio web puede contener enlaces a otros sitios web. No somos responsables de las políticas de
              privacidad o cookies de estos sitios web de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
            <p className="mb-4">
              Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos a través de nuestro formulario
              de contacto en el sitio web.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
