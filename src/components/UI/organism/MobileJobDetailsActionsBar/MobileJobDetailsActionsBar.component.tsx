import React, { useState } from 'react'
import { IconItem } from '@components/UI/atoms'
import { Actions, MobileDrawer } from '@components/UI/molecules'

import { IMobileJobDetailsActionsBar } from './MobileJobDetailsActionsBar.interface'
import styles from './MobileJobDetailsActionsBar.module.scss'

import { anchorIconList } from '@constants/stories.constants'
import { More } from '../../../../constants/icons.constants'

const Component: React.FC<IMobileJobDetailsActionsBar> = ({ externalButtonChild, actionsProps }) => {
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)

  const onOpenClick = () => {
    setToggleMobileDrawer(!toggleMobileDrawer)
  }

  return (
    <div className={styles.MobileJobDetailsActionsBarComponent}>
      <div id={styles['magneto-ui__external-child']}>{externalButtonChild}</div>
      <div className={styles['DrawerButtonWrapper']}>
        <button type="button" onClick={onOpenClick}>
          <IconItem icon={More} hover={false} />
        </button>
      </div>
      <MobileDrawer isOpen={toggleMobileDrawer} onClose={() => setToggleMobileDrawer(!toggleMobileDrawer)}>
        <Actions ActionsAnchorIcons={anchorIconList} {...actionsProps} />
      </MobileDrawer>
    </div>
  )
}
/**
 * UI Organism Component for Mobile Job Details Drawer
 */

export const MobileJobDetailsActionsBar = Component
