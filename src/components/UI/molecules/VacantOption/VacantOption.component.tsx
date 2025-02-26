import React, { useState } from 'react'
import { classNames } from '@shared/utils/common'
import { ArrowDown2 } from '@constants/icons.constants'
import { ShareIcons } from '@constants/vacancies.constants'
import { IconItem, MenuDropdown } from '@components/UI/atoms'
import { IVacantOption } from './VacantOption.interface'
import styles from './VacantOption.module.scss'

const cx = classNames.bind(styles)

const VacantOption: React.FC<IVacantOption> = ({ option, onClick }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (option.type === 'button') {
      option.onClick?.()
      onClick?.()
    }
  }

  const icon = ShareIcons[option.icon as keyof typeof ShareIcons]
    ? ShareIcons[option.icon as keyof typeof ShareIcons].icon
    : option.icon

  if (option.type === 'menu') {
    return (
      <MenuDropdown
        title={option.label}
        opened={open}
        onClick={setOpen}
        prefixIcon={{ icon: icon, size: 18 }}
        suffixIcon={{ icon: ArrowDown2 }}
        className={cx('option', 'option--menu', { 'option--menu-open': open }, option.className)}
        listClassName={cx('option__menu-list')}
      >
        {option.children.map((child) => (
          <VacantOption onClick={handleClick} key={child.label} option={child} />
        ))}
      </MenuDropdown>
    )
  }

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

  if (option.type === 'button') {
    return (
      <button className={cx('option', 'option--button', option.className)} onClick={handleClick} type="button">
        {option.icon ? <IconItem size={18} icon={icon} /> : null} {option.label}
      </button>
    )
  }

  return <React.Fragment />
}

export default VacantOption
