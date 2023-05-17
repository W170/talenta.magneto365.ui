import styled from 'styled-components'
import { IHeaderTabs } from './HeaderTabs.interface'

export const withStyles = (Component: React.FC<IHeaderTabs>): React.FC<IHeaderTabs> => {
  return styled(Component)`
    display: flex;
    gap: 10px;

    hr {
      margin: 0;
    }
  `
}
