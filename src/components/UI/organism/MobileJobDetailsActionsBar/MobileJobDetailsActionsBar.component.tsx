import React, { useState } from 'react'
import { IconItem, MainButton } from '@components/UI/atoms'
import { Actions, MobileDrawer } from '@components/UI/molecules'

import { IMobileJobDetailsActionsBar } from './MobileJobDetailsActionsBar.interface'
import styles from './MobileJobDetailsActionsBar.module.scss'

import { anchorIconList, buttonIconsList } from '@constants/stories.constants'
import { More } from '../../../../constants/icons.constants'

const Component: React.FC<IMobileJobDetailsActionsBar> = ({ mobileActionButtonText, actionsProps, onApplyClick }) => {
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)

  const onOpenClick = () => {
    setToggleMobileDrawer(!toggleMobileDrawer)
  }

  return (
    <div className={styles.MobileJobDetailsActionsBarComponent}>
      <MainButton buttonType="button" buttonText={mobileActionButtonText} onClick={onApplyClick} buttonSize="full" />
      <div className={styles['DrawerButtonWrapper']}>
        <button type="button" onClick={onOpenClick}>
          <IconItem icon={More} hover={false} />
        </button>
      </div>
      <MobileDrawer isOpen={toggleMobileDrawer} onClose={() => setToggleMobileDrawer(!toggleMobileDrawer)}>
        <Actions ActionsButtonIcons={buttonIconsList} ActionsAnchorIcons={anchorIconList} {...actionsProps} />
      </MobileDrawer>
    </div>
  )
}
/**
 * UI Organism Component for Mobile Job Details Drawer
 */

export const MobileJobDetailsActionsBar = Component
