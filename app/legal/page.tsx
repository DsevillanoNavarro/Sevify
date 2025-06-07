import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SchemaMarkup } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal | Sevify",
  description: "Aviso legal e información corporativa de Sevify",
  alternates: {
    canonical: "/legal",
  },
  openGraph: {
    title: "Aviso Legal | Sevify",
    description: "Aviso legal e información corporativa de Sevify",
    url: "https://sevify.es/legal",
  },
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup title="Aviso Legal | Sevify" description="Aviso legal e información corporativa de Sevify" />
      <div className="container py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Aviso Legal</h1>
          <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datos identificativos</h2>
            <p className="mb-4">
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de
              Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los
              siguientes datos:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p>
                <strong>Denominación social:</strong> Sevify
              </p>
              <p>
                <strong>Actividad:</strong> Diseño y desarrollo web
              </p>
              <p>
                <strong>Sitio web:</strong> sevify.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Objeto</h2>
            <p className="mb-4">
              El presente aviso legal regula el uso del sitio web sevify.com (en adelante, "el sitio web"), del que es
              titular Sevify (en adelante, "el titular").
            </p>
            <p className="mb-4">
              La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y
              sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Condiciones de uso</h2>
            <p className="mb-4">
              El sitio web y sus servicios son de acceso libre y gratuito. No obstante, el titular condiciona la
              utilización de algunos de los servicios ofrecidos en su web a la previa cumplimentación del
              correspondiente formulario.
            </p>
            <p className="mb-4">
              El usuario garantiza la autenticidad y actualidad de todos aquellos datos que comunique al titular y será
              el único responsable de las manifestaciones falsas o inexactas que realice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Contenidos</h2>
            <p className="mb-4">
              Los contenidos del sitio web se encuentran sujetos a la legislación española e internacional sobre
              propiedad intelectual e industrial. Queda expresamente prohibida su reproducción, distribución,
              comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos
              de sus páginas web ni aun citando las fuentes, salvo consentimiento por escrito del titular.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Responsabilidad</h2>
            <p className="mb-4">
              El titular no se hace responsable de los daños y perjuicios de toda naturaleza que pudieran deberse a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>La falta de disponibilidad o continuidad del funcionamiento del sitio web</li>
              <li>Los errores en el contenido del sitio web</li>
              <li>La presencia de virus o elementos lesivos en el sitio web</li>
              <li>El uso ilícito o incorrecto del sitio web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Enlaces</h2>
            <p className="mb-4">
              En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet,
              el titular no ejercerá ningún tipo de control sobre dichos sitios y contenidos.
            </p>
            <p className="mb-4">
              En ningún caso el titular asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente
              a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud,
              veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos
              hipervínculos u otros sitios de Internet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Modificaciones</h2>
            <p className="mb-4">
              El titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas
              en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través
              de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Legislación aplicable y jurisdicción</h2>
            <p className="mb-4">
              La relación entre el titular y el usuario se regirá por la normativa española vigente y cualquier
              controversia se someterá a los Juzgados y tribunales de la ciudad de España.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
