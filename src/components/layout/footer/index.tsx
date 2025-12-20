import Image from 'next/image'

import styles from './footer.module.scss'

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

export const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.top}>
        <Image src="/icons/footer-icon.svg" alt="logo" width={756} height={400} />

        <div className={styles.menu}>
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.left}>All Rights Reserved.</h1>

        <div className={styles.right}>
          <h1>Designed & Developed by</h1>

          <Image src="/icons/koober-logo.svg" alt="koober coders" width={64} height={24} priority />
        </div>
      </div>
    </footer>
  )
}
