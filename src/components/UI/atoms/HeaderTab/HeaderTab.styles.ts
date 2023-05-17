import styled, { css } from 'styled-components'
import { IHeaderTab } from './HeaderTab.interface'

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
      font-size: 13px;
      line-height: 16px;
      margin: 0;
    }

    ${({ tabType }) =>
      tabType === 'tabTitle' &&
      css`
        p {
          color: #a3a3b5;
        }
      `}

    ${({ tabType }) =>
      tabType === 'tabOption' &&
      css`
        :hover {
          background-color: #e9e9f6;
        }
        p {
          color: #14141c;
        }
      `}
  `
}
