import React from 'react'
import { IUserMenuAnalystQueryString, IUserMenuAnalystSection } from '../../../../UserMenuAnalyst.interface'

export interface IUserMenuAnalystOptionProps {
  /**
   * Class name for styling
   */
  classNames?: IUserMenuAnalystOptionClassNames
  /**
   * Function to handle modal visibility from analyst template
   */
  handleModal?: (name: string, visible: boolean, data: unknown) => void
  /**
   * Function to handle menu visibility
   */
  handleMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Is the option open
   */
  isOpen?: boolean
  /**
   * Option to show
   */
  option: IUserMenuAnalystOption
  /**
   * Query string params
   */
  queryString?: IUserMenuAnalystQueryString
}

export enum EUserMenuAnalystOptionType {
  HOVER = 'hover',
  BUTTON = 'button',
  UNDERLINE = 'underline',
  TEXT = 'text'
}

export interface IUserMenuAnalystOption extends IUserMenuAnalystOptionBase {
  /**
   * Prefix array data to display aditional options
   */
  prefix?: (IUserMenuAnalystOptionBase & { data?: string | ((option: IUserMenuAnalystOption) => void) })[]
  /**
   * Section subtitle
   */
  subTitle?: string
  /**
   * Suffix array data to display aditional options
   */
  suffix?: (IUserMenuAnalystOptionBase & { data?: string | ((option: IUserMenuAnalystOption) => void) })[]
}

export interface IUserMenuAnalystOptionBase {
  /**
   * Data for the option, can be a string or an array of INavMenuAnalystSection
   */
  data?: string | IUserMenuAnalystSection[] | ((option: IUserMenuAnalystOption) => void)
  /**
   * Icon index type
   */
  icon?: string
  /**
   * Name of the modal to open
   */
  modal?: {
    name: string
    data: unknown
  }
  /**
   * Relationship when opening the link
   */
  rel?: string
  /**
   * Target when opening the link
   */
  target?: string
  /**
   * Optional query string by option
   */
  selfQueryString?: IUserMenuAnalystQueryString
  /**
   * Option title
   */
  title?: string
  /**
   * Option type
   */
  type?: EUserMenuAnalystOptionType
  /**
   * Enables query string params
   */
  useQueryString?: boolean
}

export interface IUserMenuAnalystOptionClassNames {
  link: string
  dropdown: string
}

export interface IUserMenuAnalystOptionCommonProps {
  /**
   * Classnames to get principal styling
   */
  className: string
  /**
   *
   */
  handleModal?: (name: string, visible: boolean, data: unknown) => void
  /**
   *
   */
  handleMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Option to show
   */
  option: IUserMenuAnalystOption
  /**
   *
   */
  prefix?: React.ReactElement
  /**
   *
   */
  suffix?: React.ReactElement
}
