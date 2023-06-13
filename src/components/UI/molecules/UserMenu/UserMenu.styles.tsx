import styled from 'styled-components'
import { IMenuUser } from './UserMenu.interface'

export const withStyles = (Component: React.FC<IMenuUser>): React.FC<IMenuUser> => {
  return styled(Component)`
    .magneto-ui-bghover {
      position: fixed;
      top: 0px;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
  `
}
