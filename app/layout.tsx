import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waviora Lead Recovery',
  description: 'Never let a new restoration lead wait.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
