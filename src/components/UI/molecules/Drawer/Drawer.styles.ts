import styled, { css } from 'styled-components'
import { IDrawer } from './Drawer.interface'

const toggleDrawer = ({ isOpen = false }) => {
  if (isOpen) {
    return css`
      ${(props) => props.direction}: 0;
    `
  }
}

export const withStyles = (c: React.FC<IDrawer>): React.FC<IDrawer> => styled(c)`
  & > div {
    background-color: white;
    padding: 20px;
    ${(props) => props.direction}: -50%;
    top: 0;
    position: fixed;
    width: 370px;
    height: 100vh;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.1);
    z-index: 99;
    transition: all 0.4s ease-in-out;
    button {
      position: absolute;
      /* ${(props) => (props.direction === 'left' ? 'right' : 'left')}: 5%; */
      right: 5%;
      background: none;
      border: none;
      cursor: pointer;
    }

    ${(props) => toggleDrawer(props)}
  }

  & > span {
    position: fixed;
    background-color: black;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 90;
    cursor: pointer;

    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }
`
