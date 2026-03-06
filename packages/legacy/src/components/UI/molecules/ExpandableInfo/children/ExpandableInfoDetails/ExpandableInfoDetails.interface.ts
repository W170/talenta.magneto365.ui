import { IExpandableInfoActionProps } from '../ExpandableInfoAction'

export interface IExpandableInfoDetailsProps {
  /**
   * Details sections
   */
  sections?: IExpandableInfoDetailsSection[]
  /**
   * Details footer action
   */
  footer?: TExpandableInfoDetailsFooter
}

export type TExpandableInfoDetailsFooter = Pick<IExpandableInfoActionProps, 'title' | 'onAction'>

export interface IExpandableInfoDetailsSection {
  /**
   * Section children
   */
  children: IExpandableInfoDetailsContent[]
}

export interface IExpandableInfoDetailsContent {
  /**
   * Section title
   */
  title: string
  /**
   * Section summary
   */
  summary: string
  /**
   * Section sub content
   */
  content?: IExpandableInfoDetailsContent[]
}
