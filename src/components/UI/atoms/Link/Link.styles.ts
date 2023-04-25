import styled, { css, StyledProps } from 'styled-components'
import { ILinkProps, LinkType } from './Link.interface'

export const getTypeStyles = ({ type = 'link' }: { type: LinkType }) => {
  switch (type) {
    case 'button':
      return css`
        display: block;
        border-radius: ${(props) => props.theme.spacing.padding.default}
        display: flex;
        justify-content: center;
        width: max-content;
        padding: .5rem 1rem;
      `
    case 'link':
    default:
      return css``
  }
}

export const Styledlink = styled.a<StyledProps<ILinkProps>>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.gray1)};
  text-decoration: none;
  &:hover {
    color: ${(props) => (props.colorVisited ? props.colorVisited : props.theme.colors.primary)};
  }

  ${(props) => getTypeStyles(props)}
`
