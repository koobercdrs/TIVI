import { ReactNode } from 'react'
import './styles.css'

export const metadata = {
  title: 'TIVI',
  description: 'A blank template using Payload in a Next.js app.',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
