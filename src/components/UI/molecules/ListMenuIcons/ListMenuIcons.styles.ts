import styled from 'styled-components'
import { IListMenuIcons } from './ListMenuIcons.interface'

export const withStyles = (c: React.FC<IListMenuIcons>): React.FC<IListMenuIcons> => styled(c)`
  p:nth-child(1) {
    font-size: 13px;
    color: ${(props) => props.theme.colors.disabledColors.gray3};
    padding-left: 10px;
    text-align: left;
    margin-bottom: 5px;
  }
`
