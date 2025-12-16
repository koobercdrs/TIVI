import localFont from 'next/font/local'
import { ReactNode } from 'react'

import './styles.scss'

import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export const metadata = {
  title: 'TIVI',
  description: 'A blank template using Payload in a Next.js app.',
}

const tanker = localFont({
  src: '../../fonts/tanker-regular.otf',
  variable: '--font-primary',
})

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={tanker.variable}>
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
