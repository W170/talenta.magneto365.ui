import styled, { css } from 'styled-components'
import { IMenuIcon } from './MenuIcon.interface'
import { screenSize } from '../../../../constants/responsive.constants'

const isActiveLink = ({ isActive = false }: IMenuIcon) => {
  if (isActive) {
    return css`
      background-color: ${(props) => props.theme.colors.disabledColors.gray2};
      &:hover {
        background-color: ${(props) => props.theme.colors.disabledColors.gray2};
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
  height: 30px;
  padding: 25px 10px;
  @media (min-width: ${screenSize.xs}px) {
    height: 40px;
    font-size: 14px;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.disabledColors.gray};
  }

  ${(props) => isActiveLink(props)}
`
