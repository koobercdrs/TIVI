import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { Loader } from 'lucide-react'
import Image from 'next/image'

import { getEventById } from '@/server/queries'
import { Button } from '@/components/ui/button'
import { getMedia } from '@/library/helpers'
import { Menu } from '@/payload-types'
import { ILang } from '@/types'

import styles from './package-modal.module.scss'
import { ProposalModal } from './proposal-moadl'

const NormalPackages = ['VIP', 'premium', 'standard']

export const PackageModal = ({ id, back }: { id: string; back: () => void }) => {
  const params: { lang: ILang } = useParams()

  const { data, status } = useQuery({
    queryKey: ['event-details', id],
    queryFn: async () => await getEventById(id, params['lang'] || 'en'),
  })

  if (status === 'pending') {
    return (
      <div className={styles.loader_wrapper}>
        <Loader className={styles.loader_icon} />
      </div>
    )
  }

  if (status === 'error') {
    return <div></div>
  }

  const drinks = data.menu?.list.filter((e) => (e.menu as Menu).type === 'drink') || []
  const dishes = data.menu?.list.filter((e) => (e.menu as Menu).type === 'dish') || []

  if (!NormalPackages.includes(data.package)) {
    return <ProposalModal lang={params.lang} data={data} back={back} />
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Button onClick={back} variant="icon">
            <Image src="/icons/arrow-right.svg" alt="icon" width={24} height={24} />
          </Button>

          <div className={styles.info}>
            <h1 className={styles.name}>{data.name}</h1>

            <p className={styles.desc}>{data.desc}</p>
          </div>
        </div>

        <p className={styles.price}>{data.price}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.menu}>
          {dishes.length > 0 && (
            <div className={styles.menu_card}>
              <div className={styles.menu_name}>{data.menu?.food_menu_name}</div>

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
              <div className={styles.menu_name}>{data.menu?.drink_menu_name}</div>

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
              src={getMedia(data.image).url}
              alt={getMedia(data.image).alt}
              loading="eager"
              height={312}
              width={313}
            />

            <div className={styles.event_packages}>
              {data.packages?.map((item, index) => (
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

          <a href="#CONTACT">
            <Button>{params.lang === 'ka' ? 'დაჯავშნა' : 'Make a Reservation'}</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
