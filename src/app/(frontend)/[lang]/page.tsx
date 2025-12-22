import { notFound } from 'next/navigation'
import { cache, Fragment } from 'react'

import { Contact } from '@/components/sections/contact'
import { Gallery } from '@/components/sections/gallery'
import { Events } from '@/components/sections/events'
import { Boats } from '@/components/sections/boats'
import { About } from '@/components/sections/about'
import { Menu } from '@/components/sections/menu'
import { Hero } from '@/components/sections/hero'

import { getPayload } from '@/library/payload'
import { ILang } from '@/types'

const getData = cache(async (lang: ILang) => {
  try {
    const payload = await getPayload()

    const content = await payload.findGlobal({ slug: 'home-view', locale: lang })

    return content
  } catch (_) {
    return null
  }
})

interface IProps {
  params: Promise<{ lang: ILang }>
}

export default async function Home({ params }: IProps) {
  const { lang } = await params

  const content = await getData(lang)

  if (!content) return notFound()

  return (
    <Fragment>
      <Hero content={content.hero} />
      <Events content={content.events} />
      <About content={content.about} />
      <Menu content={content.menu} />
      <Boats content={content.boat_tours_section} />
      <Gallery content={content.gallery} />
      <Contact content={content.contact} />
    </Fragment>
  )
}
