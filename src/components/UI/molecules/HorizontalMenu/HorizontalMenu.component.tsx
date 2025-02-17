import React, { useEffect, useState } from 'react'
import { HORIZONTAL_MENU_ICONS } from './HorizontalMenu.constant'
import { IHorizontalMenu } from './HorizontalMenu.interface'
import { ArrowLeft2 } from '@constants/icons.constants'
import { IconItem, Button } from '@components/UI/atoms'
import { classNames } from '@shared/utils/common'
import styles from './HorizontalMenu.module.scss'

const Component: React.FC<IHorizontalMenu> = ({ className, options, onChange, onclick }) => {
  const [selectedItem, setSelectedItem] = useState(0)

  useEffect(() => {
    if (onChange) {
      onChange(selectedItem)
    }
  }, [selectedItem, onChange])

  const cx = classNames.bind(styles)

  if (!options || !Array.isArray(options)) return null

  return (
    <header className={cx('magneto-ui-horizontal-menu', className && className)}>
      <button className={cx('magneto-ui-horizontal-menu__back')} onClick={() => onclick?.()}>
        <IconItem icon={ArrowLeft2} size={20} />
      </button>
      <nav className={cx('magneto-ui-horizontal-menu__nav')}>
        <ul className={cx('magneto-ui-horizontal-menu__list')}>
          {options.map(({ icon, label }, key) => (
            <li key={key}>
              <Button
                suffixIcon={HORIZONTAL_MENU_ICONS[icon]}
                className={cx('magneto-ui-horizontal-menu__button', {
                  'magneto-ui-horizontal-menu__button--active': selectedItem === key
                })}
                buttonText={label}
                onClick={() => setSelectedItem(key)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

/**
 * UI Molecule Component for Horizontal Menu
 */
export const HorizontalMenu = Component
