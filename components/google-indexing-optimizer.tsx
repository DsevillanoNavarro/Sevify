"use client"

import { useEffect } from "react"

export function GoogleIndexingOptimizer() {
  useEffect(() => {
    // Optimizaciones básicas para indexación
    const addStructuredData = () => {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Sevify",
        url: "https://sevify.es",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://sevify.es/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      })

      if (!document.querySelector('script[type="application/ld+json"]')) {
        document.head.appendChild(script)
      }
    }

    addStructuredData()
  }, [])

  return null
}
