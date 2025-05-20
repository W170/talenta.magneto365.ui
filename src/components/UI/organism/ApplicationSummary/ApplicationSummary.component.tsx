import React from 'react'
import { IApplicationSummary } from './ApplicationSummary.interface'
import { ApplicationSection } from './children/ApplicationSection'
import { ModalResponsive } from '@components/UI/molecules'
import { ApplicationTitle } from './children/ApplicationTitle'
import { ApplicationSubtitle } from './children/ApplicationSubTitle'
import { ApplicationButton } from './children/ApplicationButton'
import { ApplicationText } from './children/ApplicationText'
import styles from './ApplicationSummary.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)
const Component: React.FC<IApplicationSummary> = ({ children, className, ...props }) => {
  return (
    <ModalResponsive
      modalClassName={cx('summary-modal', className)}
      mobileDrawerClassName={cx('summary-drawer')}
      {...props}
    >
      {children}
    </ModalResponsive>
  )
}

export const ApplicationSummary = Object.assign(Component, {
  Section: ApplicationSection,
  Title: ApplicationTitle,
  SubTitle: ApplicationSubtitle,
  Button: ApplicationButton,
  Text: ApplicationText
})
