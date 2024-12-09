import React from 'react'
import { IApplicationSummary } from './ApplicationSummary.interface'
import { ApplicationSection } from './children/ApplicationSection'
import { ModalResponsive } from '@components/UI/molecules'
import { ApplicationTitle } from './children/ApplicationTitle'
import { ApplicationSubtitle } from './children/ApplicationSubTitle'
import { ApplicationButton } from './children/ApplicationButton'
import { ApplicationText } from './children/ApplicationText'

const Component: React.FC<IApplicationSummary> = ({ children, ...props }) => {
  return <ModalResponsive {...props}>{children}</ModalResponsive>
}

export const ApplicationSummary = Object.assign(Component, {
  Section: ApplicationSection,
  Title: ApplicationTitle,
  SubTitle: ApplicationSubtitle,
  Button: ApplicationButton,
  Text: ApplicationText
})
