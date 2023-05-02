import styled, { css } from 'styled-components'
import { IMenuItem } from './MenuItem.interface'

const isActiveLink = ({ isActive = false }: IMenuItem) => {
  if (isActive) {
    return css`
      background-color: ${(props) => props.theme.colors.disabledColors.gray2};
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.disabledColors.gray2};
      }
      svg {
        opacity: 1;
      }
      p {
        margin-left: 25px;
      }
    `
  }
}

export const withStyles = (c: React.FC<IMenuItem>): React.FC<IMenuItem> => styled(c)`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 12px;
  height: 40px;
  padding: 2px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.disabledColors.gray};
    svg {
      opacity: 1;
    }
    p {
      margin-left: 25px;
    }
  }

  svg {
    height: 20px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  p {
    position: absolute;
    color: ${(props) => props.theme.colors.textColors.black};
    transition: all 0.3s ease-in-out;
  }

  ${(props) => isActiveLink(props)}
`
