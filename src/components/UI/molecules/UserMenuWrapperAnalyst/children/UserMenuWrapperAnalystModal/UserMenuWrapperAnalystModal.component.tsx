import React from 'react'
import { IUserMenuWrapperAnalystModalProps } from '.'
import { MobileDrawer, UserMenuAnalyst } from '@components/UI/molecules'
import { UserMenuButtonAnalyst } from '@components/UI/atoms'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuWrapperAnalystModal.module.scss'

const Component: React.FC<IUserMenuWrapperAnalystModalProps> = ({
  action,
  clickOut = false,
  footerSections,
  headerSections,
  setClickOut = () => ({}),
  user
}) => {
  return (
    <React.Fragment>
      <MobileDrawer
        isOpen={clickOut}
        onClose={() => setClickOut(!clickOut)}
        className={CNM.get({ styles, cls: ['user-menu-wrapper-analyst-modal'] })}
      >
        <UserMenuAnalyst
          isMenuOpen={clickOut}
          user={user}
          action={action}
          headerSections={headerSections}
          footerSections={footerSections}
        />
      </MobileDrawer>
      <UserMenuButtonAnalyst user={user.name} title={user.title} onClick={() => setClickOut(true)} />
    </React.Fragment>
  )
}

/**
 * Molecule UI child component of user menu analyst wrapper
 */
export const UserMenuWrapperAnalystModal = Component
