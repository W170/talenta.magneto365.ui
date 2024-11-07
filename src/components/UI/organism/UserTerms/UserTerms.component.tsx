import React from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery/index'
import { MobileDrawer, Modal } from '@components/UI/molecules'
import { IUserTerm } from './UserTerms.interface'
import { classNames } from '@shared/utils/common'
import { UserTermCheck } from './children/UserTermCheck'
import { UserTermContent } from './children/UserTermContent'
import { UserTermSubTitle } from './children/UserTermSubtitle'
import { UserTermTitle } from './children/UserTermTitle'
import { UserTermSubmit } from './children/UserTermSubmit'
import { UserTermHighlight } from './children/UserTermHighlight'
import { UserTermText } from './children/UserTermText'
import styles from './UserTerms.module.scss'
import { UserTermUList } from './children/UserTermUList'

const cx = classNames.bind(styles)

const Component: React.FC<IUserTerm> = ({ children, isOpen, onClose }) => {
  const container = useMediaQuery(
    <Modal className={cx('user-term-modal')} blockBackgroundClose isOpen={isOpen} onClose={onClose}>
      {children}
    </Modal>,
    {
      sm: (
        <MobileDrawer blockBackgroundClose isOpen={isOpen} onClose={onClose}>
          {children}
        </MobileDrawer>
      )
    }
  )

  return container
}

export const UserTerms = Object.assign(Component, {
  Title: UserTermTitle,
  Subtitle: UserTermSubTitle,
  Content: UserTermContent,
  Check: UserTermCheck,
  Submit: UserTermSubmit,
  Highlight: UserTermHighlight,
  Text: UserTermText,
  UlList: UserTermUList
})
