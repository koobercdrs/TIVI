import Image from 'next/image'
import styles from './hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image src="/hero-img.jpg" alt="hero img" fill priority />
    </section>
  )
}
