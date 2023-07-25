import React from 'react'
import { IconItem } from '@components/UI/atoms'

import { IMobileJobDetailsHeader } from './MobileJobDetailsHeader.interface'
import styles from './MobileJobDetailHeader.module.scss'

import { ArrowLeft2 } from '@constants/icons.constants'

const Component: React.FC<IMobileJobDetailsHeader> = ({ returnText, onClick }) => {
  return (
    <div className={styles.MobileJobDetailHeaderComponent}>
      <button onClick={onClick}>
        <IconItem Icon={ArrowLeft2} />
      </button>
      <p>{returnText}</p>
    </div>
  )
}

/**
 * UI Molecule Component for Mobile Jobs Drawer
 */

export const MobileJobDetailsHeader = Component
