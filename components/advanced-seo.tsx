"use client"

import { usePathname } from "next/navigation"
import { seoConfig } from "@/lib/seo-config"
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateFAQSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/advanced-schema"

interface AdvancedSEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  ogImage?: string
  twitterImage?: string
  publishDate?: string
  modifiedDate?: string
  breadcrumbs?: Array<{ name: string; url: string }>
}

export function AdvancedSEO({
  title,
  description,
  keywords = [],
  canonical,
  noindex = false,
  nofollow = false,
  ogImage,
  twitterImage,
  publishDate,
  modifiedDate,
  breadcrumbs,
}: AdvancedSEOProps) {
  const pathname = usePathname()
  const currentUrl = `${seoConfig.siteUrl}${pathname}`

  const pageTitle = title || seoConfig.defaultTitle
  const pageDescription = description || seoConfig.defaultDescription
  const pageKeywords = [...seoConfig.defaultKeywords, ...keywords]
  const canonicalUrl = canonical || currentUrl

  // Generar esquemas según la página
  const schemas = []

  // Esquemas básicos para todas las páginas
  schemas.push(generateLocalBusinessSchema())
  schemas.push(generateWebsiteSchema())

  // Esquemas específicos para la página principal
  if (pathname === "/") {
    schemas.push(generateFAQSchema())
    schemas.push(...generateServiceSchema())
  }

  // Breadcrumbs schema si se proporcionan
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs))
  }

  return (
    <>
      {/* Meta tags básicos mejorados */}
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(", ")} />
      <meta name="author" content={seoConfig.author} />
      <meta name="creator" content={seoConfig.creator} />
      <meta name="publisher" content={seoConfig.publisher} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots meta */}
      <meta
        name="robots"
        content={`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}
      />
      <meta
        name="googlebot"
        content={`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}
      />
      <meta
        name="bingbot"
        content={`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}
      />

      {/* Idioma y región */}
      <meta name="language" content={seoConfig.language} />
      <meta name="geo.region" content={seoConfig.region} />
      <meta name="geo.placename" content={seoConfig.city} />
      <meta name="geo.position" content="37.3886;-5.9945" />
      <meta name="ICBM" content="37.3886, -5.9945" />

      {/* Fechas */}
      {publishDate && <meta name="article:published_time" content={publishDate} />}
      {modifiedDate && <meta name="article:modified_time" content={modifiedDate} />}

      {/* Open Graph mejorado */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content={seoConfig.language} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage || `${seoConfig.siteUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />

      {/* Twitter Cards mejorado */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.social.twitter} />
      <meta name="twitter:creator" content={seoConfig.social.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={twitterImage || `${seoConfig.siteUrl}/twitter-image.jpg`} />
      <meta name="twitter:image:alt" content={pageTitle} />

      {/* Meta tags adicionales para otros motores de búsqueda */}
      <meta name="yandex-verification" content="yandex-verification-code" />
      <meta name="msvalidate.01" content="bing-verification-code" />
      <meta name="p:domain_verify" content="pinterest-verification-code" />

      {/* Meta tags para dispositivos móviles */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={seoConfig.siteName} />

      {/* Meta tags para rendimiento */}
      <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />

      {/* Preconnect a dominios externos */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Preload de recursos críticos */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

      {/* Esquemas JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hreflang para internacionalización futura */}
      <link rel="alternate" hrefLang="es" href={currentUrl} />
      <link rel="alternate" hrefLang="es-ES" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />
    </>
  )
}
