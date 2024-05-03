import React from 'react'
import { IUserMenuWrapperAnalystModalProps } from '.'
import { Modal, UserMenuAnalyst } from '@components/UI/molecules'
import { UserMenuButtonAnalyst } from '@components/UI/atoms'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuWrapperAnalystModal.module.scss'

const Component: React.FC<IUserMenuWrapperAnalystModalProps> = ({
  clickOut = false,
  companyName,
  footerSections,
  headerSections,
  setClickOut = () => ({}),
  user
}) => {
  return (
    <React.Fragment>
      <Modal
        className={CNM.get({ styles, cls: ['user-menu-wrapper-analyst-modal'] })}
        isOpen={clickOut}
        onClose={() => setClickOut(!clickOut)}
        title=""
        description=""
      >
        <UserMenuAnalyst user={user} headerSections={headerSections} footerSections={footerSections} />
      </Modal>
      <UserMenuButtonAnalyst user={user.name} company={companyName} onClick={() => setClickOut(true)} />
    </React.Fragment>
  )
}

/**
 * Molecule UI child component of user menu analyst wrapper
 */
export const UserMenuWrapperAnalystModal = Component
