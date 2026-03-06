import React from 'react'
import { IconItem } from '../Icon'
import { ILoading } from './Loading.interface'

import styles from './Loading.modules.scss'

const Component: React.FC<ILoading> = ({ loadingIcon }) => {
  return (
    <div className={styles.loadingComponent}>
      <IconItem {...loadingIcon} />
    </div>
  )
}

/**
 * Atom UI component of loading icon for general purpose
 */

export const Loading = Component
