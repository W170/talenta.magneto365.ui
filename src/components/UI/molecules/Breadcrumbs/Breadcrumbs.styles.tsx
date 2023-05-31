import styled from 'styled-components'
import { IBreadcrumbs } from './Breadcrumbs.interface'

export const withStyles = (Component: React.FC<IBreadcrumbs>): React.FC<IBreadcrumbs> => {
  return styled(Component)`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 1.5rem;
    gap: 15px;

    span {
      display: inherit;
      flex-direction: row;
      align-items: center;
      height: 1rem;
      font-size: 1.2rem;
      font-weight: ${(props) => props.theme.weight.regular};
      color: ${(props) => props.theme.colors.$grayDark};
    }
  `
}
