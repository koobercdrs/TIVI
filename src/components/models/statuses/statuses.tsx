import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/ui/button'
import styles from './status.module.scss'

// Loading Component
export const PackageModalLoading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.skeleton_button} />

          <div className={styles.info}>
            <div className={styles.skeleton_title} />
            <div className={styles.skeleton_text} />
          </div>
        </div>

        <div className={styles.skeleton_price} />
      </div>

      <div className={styles.content}>
        <div className={styles.menu}>
          {[1, 2].map((i) => (
            <div key={i} className={styles.menu_card}>
              <div className={styles.skeleton_menu_name} />
              <div className={styles.menu_list}>
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className={styles.skeleton_menu_item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.event}>
          <div className={styles.event_content}>
            <div className={styles.skeleton_banner} />

            <div className={styles.event_packages}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.package_item}>
                  <div className={styles.skeleton_icon} />
                  <div className={styles.skeleton_package_name} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skeleton_button_full} />
        </div>
      </div>
    </div>
  )
}

// Error Component
export const PackageModalError = ({ onRetry }: { onRetry?: () => void }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.error_container}>
        <div className={styles.error_icon}>
          <Image src="/icons/error.svg" alt="error" width={64} height={64} />
        </div>

        <div className={styles.error_content}>
          <h2 className={styles.error_title}>შეცდომა მოხდა</h2>
          <p className={styles.error_message}>
            ვერ მოხერხდა ინფორმაციის ჩატვირთვა. გთხოვთ სცადოთ თავიდან.
          </p>
        </div>

        {onRetry && <Button onClick={onRetry}>თავიდან ცდა</Button>}
      </div>
    </div>
  )
}
