import styled from 'styled-components'
import { ITabButton } from './TabButton.interface'

export const withStyles = (c: React.FC<ITabButton>): React.FC<ITabButton> => styled(c)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 96px;
  height: 18px;
  padding: 2px 8px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);

  a {
    color: ${(props) => props.theme.colors.black};
    font-weight: 800;
    font-size: ${(props) => props.size};
    line-height: 14px;

    :hover {
      color: ${(props) => props.theme.colors.black};
    }
  }
`
