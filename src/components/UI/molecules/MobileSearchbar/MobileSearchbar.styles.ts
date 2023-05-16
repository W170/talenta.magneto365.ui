import styled, { css } from 'styled-components'
import { IMobileSearchbar } from './MobileSearchbar.interface'

const toggleMobile = ({ toggle = false }) => {
  if (toggle) {
    return css<IMobileSearchbar>`
      top: 0;
    `
  }
  return css<IMobileSearchbar>`
    top: -100%;
  `
}

export const withStyles = (c: React.FC<IMobileSearchbar>): React.FC<IMobileSearchbar> => styled(c)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  width: 100vw;
  height: 3.75rem;
  z-index: 1;
  margin: 0;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  form {
    display: inherit;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.5rem;
    margin: 19px 20px;
    background-color: #fff;
    z-index: 1;
  }

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;

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
    padding: 0px !important;
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

  ${(props) => toggleMobile(props)}
`
