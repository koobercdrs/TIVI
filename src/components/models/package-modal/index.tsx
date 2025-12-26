import { useParams } from 'next/navigation'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Event, Menu } from '@/payload-types'
import { getMedia } from '@/library/helpers'
import { ILang } from '@/types'

import styles from './package-modal.module.scss'
import { ProposalModal } from './proposal-moadl'

const NormalPackages = ['VIP', 'premium', 'standard']

export const PackageModal = ({ event, back }: { event: Event; back: () => void }) => {
  const params: { lang: ILang } = useParams()

  const drinks = event.menu?.list.filter((e) => (e.menu as Menu).type === 'drink') || []
  const dishes = event.menu?.list.filter((e) => (e.menu as Menu).type === 'dish') || []

  if (!NormalPackages.includes(event.package)) {
    return <ProposalModal lang={params.lang} data={event} back={back} />
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Button onClick={back} variant="icon">
          <Image src="/icons/arrow-right.svg" alt="icon" width={24} height={24} />
        </Button>

        <div className={styles.info}>
          <h1 className={styles.name}>
            {event.name}

            <p className={styles.price}>{event.price}</p>
          </h1>

          <p className={styles.desc}>{event.desc}</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.menu}>
          {dishes.length > 0 && (
            <div className={styles.menu_card}>
              <div className={styles.menu_name}>{event.menu?.food_menu_name}</div>

              <div className={styles.menu_list}>
                {dishes.map((item, index) => (
                  <p key={index} className={styles.menu_item}>
                    {(item.menu as Menu).name}
                  </p>
                ))}
              </div>
            </div>
          )}

          {drinks?.length > 0 && (
            <div className={styles.menu_card}>
              <div className={styles.menu_name}>{event.menu?.drink_menu_name}</div>

              <div className={styles.menu_list}>
                {drinks.map((item, index) => (
                  <p key={index} className={styles.menu_item}>
                    {(item.menu as Menu).name}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.event}>
          <div className={styles.event_content}>
            <Image
              className={styles.event_banner}
              src={getMedia(event.image).url}
              alt={getMedia(event.image).alt}
              loading="eager"
              height={700}
              width={800}
            />

            <div className={styles.event_packages}>
              {event.packages?.map((item, index) => (
                <div key={index} className={styles.package_item}>
                  <Image
                    className={styles.package_item_icon}
                    src="/icons/arrow-right.svg"
                    height={24}
                    width={24}
                    alt="icon"
                  />

                  <span className={styles.package_item_name}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <a target="_blank" href="https://wa.me/995595073372">
            <Button>{params.lang === 'ka' ? 'დაჯავშნა' : 'Make a Reservation'}</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
