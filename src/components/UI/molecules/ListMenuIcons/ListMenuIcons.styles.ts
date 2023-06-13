import styled from 'styled-components'
import { IListMenuIcons } from './ListMenuIcons.interface'
import { screenSize } from '../../../../constants/responsive.constants'

export const withStyles = (c: React.FC<IListMenuIcons>): React.FC<IListMenuIcons> => styled(c)`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: ${screenSize.lg}px) {
    flex-direction: column;
  }
  p:nth-child(1) {
    font-size: 10px;
    color: ${(props) => props.theme.colors.disabledColors.gray3};
    padding-left: 10px;
    text-align: left;
    margin-bottom: 5px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (min-width: ${screenSize.xxs}px) {
      display: block;
      font-size: 13px;
    }
  }
`
