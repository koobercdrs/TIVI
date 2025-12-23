import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { getMedia } from '@/library/helpers'
import { Event } from '@/payload-types'

import styles from './proposal-modal.module.scss'
import { ILang } from '@/types'

interface IProps {
  data: Event
  lang: ILang
  back: () => void
}

export const ProposalModal = ({ back, data, lang }: IProps) => {
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
        <div className={styles.event_content}>
          <Image
            className={styles.event_banner}
            src={getMedia(data.image).url}
            alt={getMedia(data.image).alt}
            loading="eager"
            height={312}
            width={313}
          />

          <div className={styles.right}>
            <div className={styles.right_top}>
              <h1 className={styles.right_title}>{data.proposal_packages?.name}</h1>

              <div className={styles.right_packages}>
                {data.proposal_packages?.list?.map((item, index) => (
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

            <p className={styles.right_desc}>{data.proposal_packages?.text}</p>
          </div>
        </div>

        <Button>{lang === 'ka' ? 'დაჯავშნა' : 'Make a Reservation'}</Button>
      </div>
    </div>
  )
}
