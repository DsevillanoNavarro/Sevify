"use client"

import { useEffect } from "react"

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload de imágenes críticas
    const criticalImages = ["/hero-image.jpg", "/logo.png", "/og-image.jpg"]

    criticalImages.forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      document.head.appendChild(link)
    })

    // Lazy loading para imágenes no críticas
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.classList.remove("lazy")
              observer.unobserve(img)
            }
          }
        })
      })

      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img)
      })
    }

    // Prefetch de páginas importantes
    const importantPages = ["/services", "/portfolio", "/contact"]
    importantPages.forEach((page) => {
      const link = document.createElement("link")
      link.rel = "prefetch"
      link.href = page
      document.head.appendChild(link)
    })
  }, [])

  return null
}
