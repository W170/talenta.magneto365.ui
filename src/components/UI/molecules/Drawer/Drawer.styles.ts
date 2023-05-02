import styled from 'styled-components'
import { IDrawer } from './Drawer.interface'

export const withStyles = (c: React.FC<IDrawer>): React.FC<IDrawer> => styled(c)`
  & > div {
    background-color: white;
    padding: 20px;
    ${(props) => props.direction}: -100%;
    top: 0;
    position: fixed;
    width: 370px;
    height: 100vh;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.1);
    z-index: 99;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: translate;
    button {
      position: absolute;
      /* ${(props) => (props.direction === 'left' ? 'right' : 'left')}: 5%; */
      right: 5%;
      background: none;
      border: none;
      cursor: pointer;
    }
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

    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: fadeIn;
  }

  //ANIMATIONS

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }

  @keyframes translate {
    0% {
      ${(props) => props.direction}: -100%;
    }
    100% {
      ${(props) => props.direction}: 0;
    }
  }
`
