import React from 'react'
import styles from './ProcessesCard.module.scss'
import { classNames } from '@shared/utils/common'
import { IProcessesCard } from './ProcessesCard.interface'
import { ProcessesCardSection } from './children/ProcessesCardSection/ProcessesCardSection.component'
import { ProcessesCardStatus } from './children/ProcessesCardStatus/ProcessesCardStatus.component'
import { ProcessesCardBrand } from './children/ProcessesCardBrand/ProcessesCardBrand.component'
import { ProcessesCardTitle } from './children/ProcessesCardTitle/ProcessesCardTitle.component'
import { ProcessesCardText } from './children/ProcessesCardText/ProcessesCardText.component'
import { ProcessesCardArrow } from './children/ProcessesCardArrow/ProcessesCardArrow.component'

const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard> = ({ children, className }) => {
  return (
    <button className={cx('processes-card', className)} type="button">
      {children}
    </button>
  )
}

export const ProcessesCard = Object.assign(Component, {
  Section: ProcessesCardSection,
  Status: ProcessesCardStatus,
  Brand: ProcessesCardBrand,
  Arrow: ProcessesCardArrow,
  Title: ProcessesCardTitle,
  Text: ProcessesCardText
})
