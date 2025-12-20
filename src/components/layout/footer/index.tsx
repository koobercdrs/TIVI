import Image from 'next/image'

import styles from './footer.module.scss'
import { LayoutView } from '@/payload-types'

export const Footer = ({ content }: { content: LayoutView['footer'] }) => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.top}>
        <Image src="/icons/footer-icon.svg" draggable={false} height={400} width={756} alt="logo" />

        <div className={styles.menu}>
          {content.navigation.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.left}>{content.bottom.copyright}</h1>

        <div className={styles.right}>
          <h1>{content.bottom.developer_text}</h1>

          <Image
            src="/icons/koober-logo.svg"
            alt="koober coders"
            draggable={false}
            height={24}
            width={64}
            priority
          />
        </div>
      </div>
    </footer>
  )
}
