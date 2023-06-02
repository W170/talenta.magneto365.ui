import styled, { css } from 'styled-components'
import { IPopover } from './Popover.interface'

const positionYValue = ({ positionY }: IPopover) => {
  if (positionY === 'top') {
    return css`
      bottom: 100%;
    `
  } else {
    return css`
      top: 100%;
    `
  }
}

const positionXValue = ({ positionX }: IPopover) => {
  if (positionX === 'right') {
    return css`
      left: 0%;
    `
  } else if (positionX === 'left') {
    return css`
      right: 0%;
    `
  } else {
    return css`
      left: 50%;
      transform: translateX(-50%);
    `
  }
}

export const withStyles = (c: React.FC<IPopover>): React.FC<IPopover> => styled(c)`
  position: relative;
  width: 40px;
  height: 40px;
  .magneto-ui-popover {
    width: ${(props) => (props.width ? props.width : 300)}px;
    background-color: white;
    height: auto;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    position: absolute;
    z-index: 12;
    padding: 15px;
    ${(props) => positionYValue(props)}
    ${(props) => positionXValue(props)}
  }
  .magneto-ui-popover-children {
    display: inline;
  }
`
