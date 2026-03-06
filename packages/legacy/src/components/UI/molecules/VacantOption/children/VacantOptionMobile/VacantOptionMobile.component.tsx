import React from 'react'
import { IconItem } from '@components/UI/atoms'
import { classNames } from '@shared/utils/common'
import { ShareIcons } from '@constants/vacancies.constants'
import { IVacantOptionMobile } from './VacantOptionMobile.interface'
import styles from './VacantOptionMobile.module.scss'

const cx = classNames.bind(styles)

const VacantOptionMobile: React.FC<IVacantOptionMobile> = ({ option, onClick, onMenu }) => {
  const handleClick = () => {
    if (option.type === 'button') {
      option.onClick?.()
      onClick?.()
    }
    if (option.type === 'menu') {
      onMenu?.(option.children)
    }
  }

  const icon = ShareIcons[option.icon as keyof typeof ShareIcons]
    ? ShareIcons[option.icon as keyof typeof ShareIcons].icon
    : option.icon

  if (option.type === 'link') {
    return (
      <a
        href={option.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cx('option', 'option--link', option.className)}
      >
        {option.icon ? <IconItem size={18} icon={icon} /> : null} {option.label}
      </a>
    )
  }

  if (option.type === 'button' || option.type === 'menu') {
    return (
      <button className={cx('option', 'option--button', option.className)} onClick={handleClick} type="button">
        {option.icon ? <IconItem size={18} icon={icon} /> : null} {option.label}
      </button>
    )
  }

  return <React.Fragment />
}

export default VacantOptionMobile
