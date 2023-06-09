import styled, { css } from 'styled-components'
import { IMenuIcon } from './MenuIcon.interface'
import { screenSize } from '../../../../constants/responsive.constants'
import { lightTheme } from '../../../../shared/stylesheets/theme.styles'

const isActiveLink = ({ isActive = false }: IMenuIcon) => {
  if (isActive) {
    return css`
      background-color: ${lightTheme.colors.disabledColors.gray2};

      &:hover {
        background-color: ${lightTheme.colors.disabledColors.gray2};
      }
    `
  }
}

export const withStyles = (c: React.FC<IMenuIcon>): React.FC<IMenuIcon> => styled(c)`
  background: none;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(props) => (props.spacing ? props.spacing : 15)}px;
  cursor: pointer;
  border-radius: 7px;
  transition: all 0.3s ease-in-out;
  height: 15px;
  padding: 18px 5px;
  @media (min-width: ${screenSize.xxs}px) {
    padding: 25px 10px;
    height: 40px;
  }
  &:hover {
    background-color: ${lightTheme.colors.disabledColors.gray};
  }
  ${(props) => isActiveLink(props)}
  .magneto-ui-menu-text {
    font-size: 10px;
    @media (min-width: ${screenSize.xxs}px) {
      font-size: 14px;
    }
    margin: 0;
    color: ${lightTheme.colors.textColors.black};
  }
`
