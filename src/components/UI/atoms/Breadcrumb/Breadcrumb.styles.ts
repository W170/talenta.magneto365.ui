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

export const withStyles = (Component: React.FC<IBreadcrumb>): React.FC<IBreadcrumb> => {
  return styled(Component)`
    p {
      color: #a3a3b5;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 13px;
      margin: 0;
    }
    ${(props) => isActiveBreadcrumb(props)}
  `
}
