import styled, { css } from 'styled-components'
import { IMenuItem } from './MenuItem.interface'
import { screenSize } from '../../../../constants/responsive.constants'
import { lightTheme } from '../../../../shared/stylesheets/theme.styles'

const isActiveLink = ({ isActive = false }: IMenuItem) => {
  if (isActive) {
    return css`
      background-color: ${lightTheme.colors.disabledColors.gray2};
      &:hover {
        cursor: pointer;
        background-color: ${lightTheme.colors.disabledColors.gray2};
      }
      svg {
        opacity: 1;
      }
      p {
        margin: 0 0 0 25px;
      }
    `
  }
}

export const withStyles = (c: React.FC<IMenuItem>): React.FC<IMenuItem> => styled(c)`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  height: 22px;
  padding: 2px;
  margin: 5px 0;
  font-size: 12px;
  @media (min-width: ${screenSize.xxs}px) {
    margin-bottom: 10px;
    font-size: 16px;
    height: 32px;
  }
  @media (min-width: ${screenSize.sm}px) {
    height: 40px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${lightTheme.colors.disabledColors.gray};
    svg {
      opacity: 1;
    }
    p {
      margin: 0 0 0 25px;
    }
  }

  svg {
    height: 20px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  p {
    position: absolute;
    color: ${lightTheme.colors.textColors.black};
    transition: all 0.3s ease-in-out;
    margin: 0;
  }

  ${(props) => isActiveLink(props)}
`
