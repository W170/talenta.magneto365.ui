import React from 'react'
import styled, { css } from 'styled-components'
import { ILinkProps, LinkType } from './Link.interface'
import { screenSize } from '../../../../constants/responsive.constants'

export const getTypeStyles = ({ type = 'link' }: { type: LinkType }) => {
  switch (type) {
    case 'link':
      return css<ILinkProps>`
        :visited {
          color: ${(props) => props.visitedColor};
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
        background-color: ${(props) => props.buttonColor};
        color: ${(props) => props.textColor};

        p {
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          margin: 0px;
        }

        :hover {
          background-color: ${(props) => props.theme.colors.$gray5};
        }

        :visited {
          color: ${(props) => props.textColor};
        }

        @media screen and (max-width: ${screenSize.md - 1}px) {
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          padding: 0;
        }
      `

    default:
      return css``
  }
}

export const withStyles = (c: React.FC<ILinkProps>): React.FC<ILinkProps> => styled(c)`
  color: ${(props) => (props.textColor ? props.textColor : props.theme.colors.gray1)};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.hoverColor ? props.hoverColor : props.theme.colors.primary)};
  }

  ${(props) => getTypeStyles(props)}
`
