import React, { useCallback, useState } from 'react'
import { IHorizontalMenu } from './HorizontalMenu.interface'
import { ArrowLeft2 } from '@constants/icons.constants'
import { IconItem, Button } from '@components/UI/atoms'
import { classNames } from '@shared/utils/common'
import styles from './HorizontalMenu.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IHorizontalMenu> = ({ className, options, onChange, onClick }) => {
  const [selectedItem, setSelectedItem] = useState<number>(0)

  const handleOnSelect = useCallback(
    (key: number) => {
      setSelectedItem(key)
      onChange?.(key)
    },
    [onChange]
  )

  if (!options || !Array.isArray(options)) return null

  return (
    <header className={cx('magneto-ui-horizontal-menu', className)}>
      <button className={cx('magneto-ui-horizontal-menu__back')} onClick={() => onClick?.()}>
        <IconItem icon={ArrowLeft2} size={20} />
      </button>
      <nav className={cx('magneto-ui-horizontal-menu__nav')}>
        <ul className={cx('magneto-ui-horizontal-menu__list')}>
          {options.map(({ icon, title }, key) => (
            <li
              key={key}
              className={cx('magneto-ui-horizontal-menu__button', {
                'magneto-ui-horizontal-menu__button--active': selectedItem === key
              })}
            >
              <Button suffixIcon={icon} buttonText={title} onClick={() => handleOnSelect(key)} />
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
