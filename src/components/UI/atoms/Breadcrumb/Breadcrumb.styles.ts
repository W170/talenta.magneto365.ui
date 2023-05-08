import styled, { css } from 'styled-components'
import { IBreadcrumb } from './Breadcrumb.interface'

const isActiveBreadcrumb = ({ isActive = false }: IBreadcrumb) => {
  if (isActive) {
    return css`
      p {
        font-weight: ${(props) => props.theme.weight.bold};
      }
    `
  }
}

export const withStyles = (c: React.FC<IBreadcrumb>): React.FC<IBreadcrumb> => styled(c)`
  a {
    text-decoration: none;
  }
  p {
    color: #a3a3b5;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    margin: 0;
    &:hover {
      color: #14141c;
    }
  }
  ${(props) => isActiveBreadcrumb(props)}
`
