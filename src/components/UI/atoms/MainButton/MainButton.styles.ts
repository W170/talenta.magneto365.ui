import styled, { css } from 'styled-components'
import { IMainButton } from './MainButton.interface'

const isMobile = ({ isMobile = false }: IMainButton) => {
  if (isMobile) {
    return css`
      width: 2.5rem;
      height: 2.5rem;

      &.small {
        width: 2.3rem;
        height: 2.3rem;
        padding: 0;
      }

      &.medium {
        padding: 0;
      }

      &.large {
        padding: 0;
        width: 2.7rem;
        height: 2.7rem;
      }
    `
  }
}

export const withStyles = (Component: React.FC<IMainButton>): React.FC<IMainButton> => styled(Component)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.spacing ? props.spacing : 0)}px;
  padding: 10px 20px;

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
    font-weight: ${(props) => props.theme.weight.bold};
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

  ${(props) => isMobile(props)}
`
