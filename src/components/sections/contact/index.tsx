import Image from 'next/image'
import styles from './contact.module.scss'
import { HomeView } from '@/payload-types'

export const Contact = ({ content }: { content: HomeView['contact'] }) => {
  return (
    <section id="CONTACT" className={`${styles.section} container`}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className={styles.title}>{content.header.title}</h1>
          <p className={styles.text}>{content.header.description}</p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.card}>
            <Image draggable={false} src="/contact/Phone.svg" alt="icon" width={32} height={32} />
            <span>{content.info.phone}</span>
          </div>
          <div className={styles.card}>
            <Image
              draggable={false}
              src="/contact/Everyday.svg"
              alt="icon"
              width={32}
              height={32}
            />
            <span>{content.info.working_hours}</span>
          </div>
          <div className={styles.card}>
            <Image
              draggable={false}
              src="/contact/Location.svg"
              alt="icon"
              width={32}
              height={32}
            />
            <span>{content.info.address}</span>
          </div>

          <div className={styles.social}>
            <a href={content.social.facebook || ''} className={styles.card}>
              <Image
                draggable={false}
                src="/contact/Facebook.svg"
                height={32}
                width={32}
                alt="icon"
              />

              <span>Facebook</span>
            </a>

            <a href={content.social.instagram || ''} className={styles.card}>
              <Image
                src="/contact/Instagram.svg"
                draggable={false}
                height={32}
                width={32}
                alt="icon"
              />

              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          style={{ border: 0 }}
          src={content.map.embed_url}
          referrerPolicy="no-referrer-when-downgrade"
          title={content.map.location_name || 'google map'}
        />
      </div>
    </section>
  )
}
