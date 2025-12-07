import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contatti",
  description: "Prenota una demo di Verbalist. Compila il form e ti contatteremo entro 24 ore per mostrarti il software in azione.",
  alternates: {
    canonical: "/contatti",
  },
  openGraph: {
    title: "Contatti — Verbalist",
    description: "Prenota una demo di Verbalist. Compila il form e ti contatteremo entro 24 ore per mostrarti il software in azione.",
  },
}

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
