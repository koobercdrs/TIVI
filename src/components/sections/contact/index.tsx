import Image from 'next/image'
import styles from './contact.module.scss'

export const Contact = () => {
  return (
    <section id="CONTACT" className={`${styles.section} container`}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className={styles.title}>Reach Out to TIVI</h1>
          <p className={styles.text}>
            Planning a visit or a river cruise? We&apos;re just a message away.
          </p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.card}>
            <Image src="/contact/Phone.svg" alt="icon" width={32} height={32} />
            <span>+995 578 761 982</span>
          </div>
          <div className={styles.card}>
            <Image src="/contact/Everyday.svg" alt="icon" width={32} height={32} />
            <span>Everyday from 9:00 - to 23:00</span>
          </div>
          <div className={styles.card}>
            <Image src="/contact/Location.svg" alt="icon" width={32} height={32} />
            <span>Their exact address goes here</span>
          </div>

          <div className={styles.social}>
            <div className={styles.card}>
              <Image src="/contact/Facebook.svg" alt="icon" width={32} height={32} />
              <span>Facebook</span>
            </div>

            <div className={styles.card}>
              <Image src="/contact/Instagram.svg" alt="icon" width={32} height={32} />
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          title="Google Map"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.123456789!2d44.7427138!3d41.7221797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447310dca04119%3A0x6216685a43114f42!2s34b%20Alexander%20Kazbegi%20Ave%2C%20T'bilisi!5e0!3m2!1sen!2sge!4v1234567890123"
        />
      </div>
    </section>
  )
}
