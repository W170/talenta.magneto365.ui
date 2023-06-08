import styled, { css } from 'styled-components'
import { IHeaderTab } from './HeaderTab.interface'

const isActiveTab = ({ isActive = false }: IHeaderTab) => {
  if (isActive) {
    return css`
      background-color: ${(props) => props.theme.colors.disabledColors.gray2};
      &:hover {
        cursor: pointer;
      }
    `
  }
}

export const withStyles = (Component: React.FC<IHeaderTab>): React.FC<IHeaderTab> => {
  return styled(Component)`
    display: inline-flex;
    align-items: center;
    height: 1.75rem;
    padding: 5px 10px;
    border-radius: 6px;

    p {
      font-style: normal;
      font-weight: 400;
      font-weight: ${(props) => props.theme.weight.regular};
      font-size: 13px;
      line-height: 16px;
      margin: 0;
    }

    ${({ tabType }) =>
      tabType === 'tabTitle' &&
      css`
        p {
          color: ${(props) => props.theme.colors.textColors.disable};
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}

    ${({ tabType }) =>
      tabType === 'tabOption' &&
      css`
        :hover {
          background-color: ${(props) => props.theme.colors.disabledColors.gray2};
        }
        p {
          color: ${(props) => props.theme.colors.textColors.black};
        }
      `}

      ${(props) => isActiveTab(props)}
  `
}
