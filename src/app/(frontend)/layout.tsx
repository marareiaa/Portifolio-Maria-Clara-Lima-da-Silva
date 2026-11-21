import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Maria Clara — Designer Front-End',
  description: 'Portfólio de Maria Clara, estudante de Engenharia de Software e Designer Front-End.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className="min-h-screen antialiased">
        <div id="root" tabIndex={-1}>{children}</div>
      </body>
    </html>
  )
}
