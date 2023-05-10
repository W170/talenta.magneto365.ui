import styled from 'styled-components'
import { IBreadcrumbs } from './Breadcrumbs.interface'

export const withStyles = (c: React.FC<IBreadcrumbs>): React.FC<IBreadcrumbs> => styled(c)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1.5rem;
  gap: 6px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 16px;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.$grayDark};
  }
`
