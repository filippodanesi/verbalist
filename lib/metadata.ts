import type { Metadata } from "next"

const siteConfig = {
  name: "Verbalist 2.0",
  description: "Piattaforma intelligente per l'ottimizzazione SEO automatizzata. Analisi SERP, generazione contenuti e ottimizzazione data-driven.",
  url: "https://verbalist.ai",
  ogImage: "/og-image.png",
  twitterHandle: "@verbalist_ai",
}

interface PageMetadataProps {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  image,
  noIndex = false,
}: PageMetadataProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — SEO Automation Powered by AI`

  const pageDescription = description || siteConfig.description
  const pageImage = image || siteConfig.ogImage

  return {
    title: pageTitle,
    description: pageDescription,

    // Open Graph
    openGraph: {
      type: "website",
      locale: "it_IT",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.twitterHandle,
    },

    // Robots
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),

    // Additional meta
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
    },
  }
}

export { siteConfig }
