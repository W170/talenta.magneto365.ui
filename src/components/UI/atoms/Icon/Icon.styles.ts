import styled, { css } from 'styled-components'
import { IconProps } from './Icon.interface'

const hover = ({ hover = true }) => {
  if (hover) {
    return css`
      transition: all ease-in 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    `
  }
}

export const withStyles = (c: React.FC<IconProps>): React.FC<IconProps> => styled(c)`
  .magneto-ui-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => hover(props)}
    width: ${(props) => (props.size ? props.size : 25)}px;
    height: auto;
    color: ${(props) => (props.color ? props.color : 'black')};
  }

  .magneto-ui-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: auto;
    filter: brightness(0%);
  }
`
