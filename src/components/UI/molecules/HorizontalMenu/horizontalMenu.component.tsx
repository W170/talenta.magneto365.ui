import React, { useEffect, useState } from 'react'
import { IHorizontalMenu } from './horizontalMenu.interface'
import { classNames } from '@shared/utils/common'
import styles from './horizontalMenu.module.scss'
import { Button } from './../../atoms/Button'
import { IconItem } from '@components/UI/atoms'
import { ArrowLeft2 } from '@constants/icons.constants'

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
    <div className={cx('horizontalMenu', className && className)}>
      <div className={cx('horizontalMenu__back')} onClick={() => onclick?.()}>
        <IconItem icon={ArrowLeft2} size={20} />
      </div>
      {options.map(({ icon, label }, key) => (
        <Button
          suffixIcon={icon}
          className={cx('horizontalMenu__button', {
            horizontalMenu__buttonActive: selectedItem === key
          })}
          buttonText={label}
          onClick={() => setSelectedItem(key)}
          key={key}
        />
      ))}
    </div>
  )
}

/*
 * UI Molecule Component for Horizontal Menu
 */
export const HorizontalMenu = Component
