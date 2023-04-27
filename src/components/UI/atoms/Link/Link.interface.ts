export type LinkType = 'button' | 'link'

export interface ILinkProps {
  color?: string
  colorHover?: string
  colorVisited?: string
  type: LinkType
  href?: string
  label?: string
}
