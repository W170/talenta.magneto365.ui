import React from 'react'
import styled, { css } from 'styled-components'
import { ILinkProps, LinkType } from './Link.interface'

export const linkTypeStyles = ({ type = 'link' }: { type: LinkType }) => {
  switch (type) {
    case 'link':
      return css<ILinkProps>`
        :visited {
          color: ${(props) => props.linkStyles?.visitedColor};
        }
      `
    case 'button':
      return css<ILinkProps>`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        width: max-content;
        padding: 10px 20px;
        border: none;
        border-radius: 50px;
        background-color: ${(props) => props.linkStyles?.buttonColor};
        color: ${(props) => props.linkStyles?.textColor};

        p {
          font-style: normal;
          font-weight: ${(props) => props.theme.weight.bold};
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          margin: 0px;
        }

        :hover {
          background-color: ${(props) => props.theme.colors.$gray5};
        }

        :visited {
          color: ${(props) => props.linkStyles?.textColor};
        }
      `

    default:
      return css``
  }
}

const isMobile = ({ isMobile = false, type }: ILinkProps) => {
  if (isMobile && type === 'button') {
    return css`
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
    `
  }
}

export const withStyles = (Component: React.FC<ILinkProps>): React.FC<ILinkProps> => {
  return styled(Component)`
    color: ${(props) => (props.linkStyles?.textColor ? props.linkStyles?.textColor : props.theme.colors.$gray1)};

    text-decoration: none;
    &:hover {
      cursor: pointer;
      color: ${(props) => (props.linkStyles?.hoverColor ? props.linkStyles?.hoverColor : props.theme.colors.primary)};
    }

    ${(props) => linkTypeStyles(props)}

    ${(props) => isMobile(props)}
  `
}
