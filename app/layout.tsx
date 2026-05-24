import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Dependency Mapper — Visualize Table Relationships',
  description: 'Analyze database schemas and generate interactive dependency graphs showing foreign keys, triggers, and cascading effects.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7221ccaf-2c24-43c0-95ae-f431a1260683"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
