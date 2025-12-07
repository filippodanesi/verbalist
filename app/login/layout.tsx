import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accedi",
  description: "Accedi al tuo account Verbalist per generare contenuti SEO ottimizzati con l'AI.",
  alternates: {
    canonical: "/login",
  },
  openGraph: {
    title: "Accedi — Verbalist",
    description: "Accedi al tuo account Verbalist per generare contenuti SEO ottimizzati con l'AI.",
  },
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
