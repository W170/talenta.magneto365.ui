import React from 'react'
import { classNames } from '@shared/utils/common'
import { Select } from '../../Select.component'
import { MobileDrawer } from '@components/UI/molecules'
import { ISelectDrawer } from './SelectDrawer.interface'
import styles from './SelectDrawer.module.scss'

const cx = classNames.bind(styles)

const SelectDrawer: React.FC<ISelectDrawer> = ({ className, children }) => {
  const { open, onSwitch } = Select.useContext()

  return (
    <MobileDrawer
      className={cx('select-drawer', className)}
      isOpen={open}
      onClose={() => onSwitch(false)}
      blockBackgroundClose
    >
      {children}
    </MobileDrawer>
  )
}

export default SelectDrawer
