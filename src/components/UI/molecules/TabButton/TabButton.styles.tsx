import styled, { css } from 'styled-components'
import { ITabButton } from './TabButton.interface'

export const withStyles = (Component: React.FC<ITabButton>): React.FC<ITabButton> => {
  return styled(Component)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 96px;
    height: 18px;
    padding: 2px 8px;
    border-radius: 6px;
    background: ${(props) => props.tabButtonColor};

    ${({ boxShadow }) =>
      boxShadow &&
      css`
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
      `}

    p {
      margin: 0%;
      font-weight: ${(props) => props.tabButtonTextWeight};
      font-size: ${(props) => props.tabButtonTextSize};
      line-height: 14px;

      :hover {
        color: ${(props) => props.theme.colors.black};
      }
    }
  `
}
