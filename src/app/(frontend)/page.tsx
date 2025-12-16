import { Fragment } from 'react'

import { Contact } from '@/components/sections/contact'
import { Gallery } from '@/components/sections/gallery'
import { Events } from '@/components/sections/events'
import { Boats } from '@/components/sections/boats'
import { About } from '@/components/sections/about'
import { Hero } from '@/components/sections/hero'
import { Menu } from '@/components/sections/menu'

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Events />
      <About />
      <Menu />
      <Boats />
      <Gallery />
      <Contact />
    </Fragment>
  )
}
