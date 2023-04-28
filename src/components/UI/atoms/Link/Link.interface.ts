export type LinkType = 'button' | 'link'

export interface ILinkProps {
  /**
   * set the font color in the link.
   */
  color?: string
  /**
   * color when hover event is dispatched in the component.
   */
  colorHover?: string
  /**
   * color when :visited pseudo-class is applied.
   */
  colorVisited?: string
  /**
   * change the base component style.
   */
  type: LinkType
  href: string
  /**
   * text displayed in the component
   */
  label: string
  className?: string
}
