import { notFound } from 'next/navigation'
import { cache, ReactNode } from 'react'
import localFont from 'next/font/local'

import './../styles.scss'

import { QueryProvider } from '@/providers/QueryProvider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { getPayload } from '@/library/payload'
import { ILang } from '@/types'

export const metadata = {
  title: 'TIVI',
  description: 'A blank template using Payload in a Next.js app.',
}

const tanker = localFont({
  src: '../../fonts/Tanker-Regular.otf',
  variable: '--font-primary',
})

const getData = cache(async (lang: ILang) => {
  try {
    const payload = await getPayload()

    const content = await payload.findGlobal({ slug: 'layout-view', locale: lang })

    return content
  } catch (_) {
    return null
  }
})

interface IProps {
  params: Promise<{ lang: ILang }>
  children: ReactNode
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ka' }]
}

export default async function RootLayout({ children, params }: IProps) {
  const { lang } = await params

  const content = await getData(lang)

  if (!content) return notFound()

  return (
    <html lang="en" className={tanker.variable}>
      <body>
        <main>
          <Navbar content={content.navbar} />

          <QueryProvider>{children}</QueryProvider>

          <Footer content={content.footer} />
        </main>
      </body>
    </html>
  )
}
