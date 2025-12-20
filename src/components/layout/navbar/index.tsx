'use client'
import { ChevronDown, TextAlignJustify } from 'lucide-react'
import { Fragment, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import styles from './navbar.module.scss'
import { LayoutView } from '@/payload-types'

const socials = [
  {
    icon: 'icons/Facebook.svg',
    link: '',
  },
  {
    icon: 'icons/Instagram.svg',
    link: '',
  },
  {
    icon: 'icons/Whatsapp.svg',
    link: '',
  },
  {
    icon: 'icons/Location.svg',
    link: '',
  },
]

export const Navbar = ({ content }: { content: LayoutView['navbar'] }) => {
  const [open, setOpen] = useState(false)
  const [hash, setHash] = useState('#')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const onHashChange = () => {
      setHash(window.location.hash || '#')
    }

    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={`${styles.navbar} container`}>
          <a href="#">
            <Image
              src="/icons/Logo.svg"
              className={styles.logo}
              draggable={false}
              height={40}
              width={96}
              alt="Logo"
              priority
            />
          </a>

          <nav className={styles.nav}>
            <ul className={styles.ul}>
              {content.navigation.map((link, index) => {
                const isActive = hash === link.href

                return (
                  <li key={`${index}_${link.label}`}>
                    <a
                      className={`${styles.link} ${isActive ? styles.active : ''}`}
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className={styles.right}>
            <Language />

            <div className={styles.socials}>
              {socials.map((social, index) => (
                <a key={`${index}_${social.link}`} href="#" className={styles.socialLink}>
                  <Image
                    src={social.icon}
                    alt="Social Media"
                    draggable={false}
                    loading="eager"
                    height={24}
                    width={24}
                  />
                </a>
              ))}
            </div>
          </div>

          <button className={styles.menu} onClick={() => setOpen(!open)}>
            <TextAlignJustify className={styles.menu_icon} />
          </button>
        </div>
      </header>

      <MobileMenu
        onClose={() => setOpen(false)}
        content={content.navigation}
        hash={hash}
        open={open}
      />
    </Fragment>
  )
}

const Language = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Fragment>
      <div className={styles.language}>
        <div onClick={() => setOpen(!open)} className={styles.label}>
          <span>{pathname.slice(1, 3)}</span>

          <ChevronDown />
        </div>

        <div className={`${styles.options} ${open ? styles.open : ''}`}>
          <Link
            className={`${styles.link} ${pathname === '/en' ? styles.active : ''}`}
            onClick={() => setOpen(false)}
            href="en"
          >
            English
          </Link>

          <Link
            className={`${styles.link} ${pathname === '/ka' ? styles.active : ''}`}
            onClick={() => setOpen(false)}
            href="ka"
          >
            ქართული
          </Link>
        </div>
      </div>

      {open && <div onClick={() => setOpen(false)} className={styles.overlay} />}
    </Fragment>
  )
}

interface IMobileMenu {
  hash: string
  open: boolean
  onClose: () => void
  content: LayoutView['navbar']['navigation']
}

const MobileMenu = ({ hash, open, onClose, content }: IMobileMenu) => {
  return (
    <Fragment>
      {open && <div onClick={() => onClose()} className={styles.overlay} />}

      <div className={`${styles.mobile_navbar} ${open ? styles.open : ''}`}>
        {content.map((link, index) => {
          const isActive = hash === link.href

          return (
            <a
              className={`${styles.mobile_link} ${isActive ? styles.active : ''}`}
              key={`${index}_${link.label}`}
              onClick={() => onClose()}
              href={link.href}
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </Fragment>
  )
}
