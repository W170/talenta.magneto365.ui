import React from 'react'
import { IUserMenuAnalystQueryString, IUserMenuAnalystSection } from '../../../../UserMenuAnalyst.interface'

export interface IUserMenuAnalystOptionProps {
  /**
   * Class name for styling
   */
  classNames?: IUserMenuAnalystOptionClassNames
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
