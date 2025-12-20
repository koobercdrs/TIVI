import { MenuCard } from './card'
import styles from './menu.module.scss'

const data = [
  {
    id: 1,
    name: 'Dish Full Name',
    desc: 'Here goes Dish Description text & Ingredients...',
    banner: '/images/menu-banner.png',
    price: 24,
  },
  {
    id: 2,
    name: 'Dish Full Name',
    desc: 'Here goes Dish Description text & Ingredients...',
    banner: '/images/menu-banner.png',
    price: 24,
  },
  {
    id: 3,
    name: 'Dish Full Name',
    desc: 'Here goes Dish Description text & Ingredients...',
    banner: '/images/menu-banner.png',
    price: 24,
  },
  {
    id: 4,
    name: 'Dish Full Name',
    desc: 'Here goes Dish Description text & Ingredients...',
    banner: '/images/menu-banner.png',
    price: 24,
  },
  {
    id: 5,
    name: 'Dish Full Name',
    desc: 'Here goes Dish Description text & Ingredients...',
    banner: '/images/menu-banner.png',
    price: 24,
  },
  {
    id: 6,
    name: 'Dish Full Name',
    desc: 'Here goes Dish Description text & Ingredients...',
    banner: '/images/menu-banner.png',
    price: 24,
  },
  {
    id: 7,
    name: 'Dish Full Name',
    desc: 'Here goes Dish Description text & Ingredients...',
    banner: '/images/menu-banner.png',
    price: 24,
  },
]

export const Menu = () => {
  return (
    <section id="RESTAURANT" className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Menu</h1>

        <MenuCard side="right" data={data} />
      </div>

      <div className={styles.wrapper}>
        <h1 className={styles.title}>Drinks</h1>

        <MenuCard side="left" data={data} />
      </div>
    </section>
  )
}
