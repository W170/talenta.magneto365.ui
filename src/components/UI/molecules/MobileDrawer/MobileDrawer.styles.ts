import styled, { css } from 'styled-components'

import { IMoblieDrawer } from './MobileDrawer.interface'

const toggleDrawer = ({ isOpen = false }) => {
  if (isOpen) {
    return css<IMoblieDrawer>`
      bottom: 0;
    `
  }
}

export const withStyles = (c: React.FC<IMoblieDrawer>): React.FC<IMoblieDrawer> => styled(c)`
  & > aside {
    background-color: white;
    padding: 20px;
    bottom: -160%;
    left: 0;
    position: fixed;
    width: 100vw;
    height: auto;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.1);
    z-index: 99;
    transition: all 0.6s ease-in-out;
    border-radius: 20px 20px 0 0;
    .magneto-ui-close-button {
      width: 40px;
      height: 40px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 10px;
      top: -50px;
      background-color: black;
      border: none;
      cursor: pointer;
      &:nth-child(1) {
        svg {
          color: white;
          transform: rotate(45deg);
          width: 30px;
          height: 30px;
        }
      }
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
