import styled from 'styled-components'
import { IMainButton } from './MainButton.interface'
import { screenSize } from '../../../../constants/responsive.constants'

export const withStyles = (c: React.FC<IMainButton>): React.FC<IMainButton> => styled(c)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: none;
  border-radius: 50px;
  background-color: ${(props) => props.buttonColor};
  color: ${(props) => props.textColor};
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin: 0px;
  }

  &.small {
    padding: 8px 16px;
    p {
      font-size: 12px;
      line-height: 15px;
    }
  }

  &.medium {
    padding: 10px 20px;
    p {
      font-size: 14px;
      line-height: 17px;
    }
  }

  &.large {
    padding: 12px 24px;
    p {
      font-size: 16px;
      line-height: 19px;
    }
  }

  &.full {
    width: 100%;
    padding: 12px 24px;
    p {
      font-size: 16px;
      line-height: 19px;
    }
  }

  ${(props) => {
    switch (props.buttonSize) {
      case 'small':
        return `
          &.small;
        `
      case 'medium':
        return `
          &.medium;
        `
      case 'large':
        return `
          &.large;
        `

      case 'full':
        return `
            &.full;
          `
      default:
        return `
          &.medium;
        `
    }
  }}

  @media screen and (max-width: ${screenSize.md - 1}px) {
    width: 2.5rem;
    height: 2.5rem;

    &.medium {
      padding: 0;
    }
  }
`
