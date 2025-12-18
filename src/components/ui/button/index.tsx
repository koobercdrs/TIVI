import { ComponentProps } from 'react'

import styles from './button.module.scss'

interface IButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'icon'
}

export const Button = ({ variant = 'primary', ...props }: IButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {props.children}
    </button>
  )
}
