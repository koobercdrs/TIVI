import { notFound } from 'next/navigation'
import { cache, ReactNode } from 'react'
import localFont from 'next/font/local'
import { Metadata } from 'next'

import './../styles.scss'

import { QueryProvider } from '@/providers/QueryProvider'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { getPayload } from '@/library/payload'
import { ILang } from '@/types'

export const metadata: Metadata = {
  title: 'TIVI - Riverside Restaurant & Bar in Tbilisi | Boat Tours & Events',
  description:
    "Experience TIVI, Tbilisi's premier riverside restaurant and bar on the Mtkvari River. Enjoy authentic Georgian cuisine, scenic boat tours, and unforgettable events with stunning city views. Open daily 9:00-23:00.",
  keywords:
    'TIVI Tbilisi, riverside restaurant Georgia, Mtkvari River dining, Georgian cuisine, boat tours Tbilisi, event venue Tbilisi, waterfront bar, Tbilisi restaurants',

  icons: { icon: '/icons/Logo.svg' },

  openGraph: {
    title: 'TIVI - Riverside Restaurant & Bar | Tbilisi',
    description:
      'Dine by the Mtkvari River with stunning views of Tbilisi. Authentic Georgian dishes, boat tours, and perfect venue for birthdays, proposals, and corporate events.',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'TIVI',
    locale: 'ka_GE',
    type: 'website',
    images: [
      {
        width: 1920,
        height: 1080,
        url: '/images/hero-img-1.jpg',
        alt: 'TIVI Riverside Restaurant Tbilisi',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TIVI - Riverside Restaurant & Bar in Tbilisi',
    description: 'Scenic dining, boat tours, and events by the Mtkvari River',
  },

  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL,
    languages: {
      ka: `${process.env.NEXT_PUBLIC_APP_URL}/ka`,
      en: `${process.env.NEXT_PUBLIC_APP_URL}/en`,
    },
  },
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
