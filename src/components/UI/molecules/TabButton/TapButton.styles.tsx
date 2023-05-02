import styled from 'styled-components'
import { ITabButton } from './TabButton.interface'

export const withStyles = (c: React.FC<ITabButton>): React.FC<ITabButton> => styled(c)`
  width: 96px;
  height: 18px;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);

  a {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 2px 8px;
    color: #14141c;
    font-style: normal;
    font-weight: 800;
    font-size: ${(props) => props.size};
    line-height: 14px;

    :hover {
      color: #14141c;
    }
  }
`
