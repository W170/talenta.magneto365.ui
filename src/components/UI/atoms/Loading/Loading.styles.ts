import styled from 'styled-components'
import { ILoading } from './Loading.interface'

export const withStyles = (Component: React.FC<ILoading>): React.FC<ILoading> => {
  return styled(Component)`
    svg {
      animation: animate 2s infinite;

      @keyframes animate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(720deg);
        }
      }
    }
  `
}
