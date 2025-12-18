'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import styles from './navbar.module.scss'
import Link from 'next/link'

const links = [
  {
    href: '#',
    label: 'HOME',
  },
  {
    href: '#RESTAURANT',
    label: 'RESTAURANT',
  },
  {
    href: '#BOAT-TOURS',
    label: 'BOAT TOURS',
  },
  {
    href: '#EVENTS',
    label: 'EVENTS',
  },
  {
    href: '#GALLERY',
    label: 'GALLERY',
  },
  {
    href: '#CONTACT',
    label: 'CONTACT',
  },
]

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

export const Navbar = () => {
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
    <header className={styles.header}>
      <div className={`${styles.navbar} container`}>
        <a href="#">
          <Image
            className={styles.logo}
            src="/icons/Logo.svg"
            draggable={false}
            height={40}
            width={96}
            alt="Logo"
            priority
          />
        </a>

        <nav>
          <ul className={styles.ul}>
            {links.map((link, index) => {
              const isActive = hash === link.href

              return (
                <li key={`${index}_${link.label}`}>
                  <a className={`${styles.link} ${isActive ? styles.active : ''}`} href={link.href}>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className={styles.right}>
          {/* <Language /> */}

          <div className={styles.socials}>
            {socials.map((social, index) => (
              <a key={`${index}_${social.link}`} href="#" className={styles.socialLink}>
                <Image
                  draggable={false}
                  alt="Social Media"
                  src={social.icon}
                  loading="eager"
                  height={24}
                  width={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

const Language = () => {
  return (
    <div className={styles.language}>
      <div className={styles.label}></div>

      <div className={styles.options}>
        <Link className={styles.link} href="en">
          English
        </Link>

        <Link className={styles.link} href="ka">
          ქართული
        </Link>
      </div>
    </div>
  )
}
