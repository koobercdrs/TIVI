import { HomeView, Menu as IMenu } from '@/payload-types'
import styles from './menu.module.scss'
import { MenuCard } from './card'

export const Menu = ({ content }: { content: HomeView['menu'] }) => {
  const drinks = content.menu_list
    .filter((e) => (e.menu as IMenu).type === 'drink')
    .map((e) => e.menu as IMenu)

  const dishes = content.menu_list
    .filter((e) => (e.menu as IMenu).type === 'dish')
    .map((e) => e.menu as IMenu)

  return (
    <section id="RESTAURANT" className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{content.name}</h1>

        <MenuCard side="right" data={dishes} />
      </div>

      <div className={styles.wrapper}>
        <h1 className={styles.title}>{content.subname}</h1>

        <MenuCard side="left" data={drinks} />
      </div>
    </section>
  )
}
