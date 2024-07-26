import React from 'react'
import { IModalAnalystHeader, IModalAnalystFooter } from './children'

export interface IModalAnalystProps extends IModalAnalyst {
  handleClose: (name: string, visible: boolean) => void
  isOpen: boolean
}

export interface IModalAnalyst {
  name: string
  screens: IModalAnalystScreen[]
}

export interface IModalAnalystScreen {
  key: number
  // styles?: IModalAnalystStyles
  header?: IModalAnalystHeader
  content?: string
  footer?: IModalAnalystFooter
}

export interface IModalAnalystStyles {
  desktop?: IModalAnalystStylesSections
  mobile?: IModalAnalystStylesSections
}

export interface IModalAnalystStylesSections {
  header?: React.CSSProperties
  container?: React.CSSProperties
  content?: React.CSSProperties
  footer?: React.CSSProperties
}
