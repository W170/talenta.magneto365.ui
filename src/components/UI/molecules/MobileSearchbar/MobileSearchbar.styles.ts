import styled, { css } from 'styled-components'
import { IMobileSearchbar } from './MobileSearchbar.interface'

const toggleMobileSearchbar = ({ showMobileSearchbar = false }) => {
  if (showMobileSearchbar) {
    return css<IMobileSearchbar>`
      top: 0;
    `
  }
  return css<IMobileSearchbar>`
    top: -100%;
  `
}

export const withStyles = (Component: React.FC<IMobileSearchbar>): React.FC<IMobileSearchbar> => {
  return styled(Component)`
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3.7rem;
    margin: 0;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    z-index: 10;

    form {
      display: inherit;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 1.5rem;
      margin: 19px 20px;
      z-index: 1;
    }

    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      padding: 0 10px;
      font-style: normal;
      font-weight: ${(props) => props.theme.weight.regular};
      font-size: ${(props) => props.theme.size.s2}px;
      line-height: 17px;
      color: ${(props) => props.theme.colors.$grayDark};

      &:not(:placeholder-shown) {
        color: #020202;
      }

      :focus-visible {
        outline: none;
      }
    }

    button {
      width: 20px;
      height: 20px;
      padding: 0px;
      border-radius: 0px;
    }

    .close-button {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        transform: rotate(45deg);
      }
    }

    ${(props) => toggleMobileSearchbar(props)}
  `
}
