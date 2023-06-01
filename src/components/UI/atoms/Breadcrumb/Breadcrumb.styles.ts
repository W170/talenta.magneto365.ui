import styled from 'styled-components'
import { IBreadcrumb } from './Breadcrumb.interface'

export const withStyles = (Component: React.FC<IBreadcrumb>): React.FC<IBreadcrumb> => {
  return styled(Component)`
    display: flex;
    align-items: center;
    p {
      align-items: center;
      color: #a3a3b5;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 13px;
      margin: 0 5px 0 0;
      text-transform: capitalize;
    }
    .magneto-ui-bc-active {
      font-weight: ${(props) => props.theme.weight.bold};
    }
  `
}
