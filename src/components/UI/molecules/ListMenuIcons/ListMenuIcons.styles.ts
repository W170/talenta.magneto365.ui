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
    font-size: 13px;
    color: ${(props) => props.theme.colors.disabledColors.gray3};
    padding-left: 10px;
    text-align: left;
    margin-bottom: 5px;
    display: none;
    @media (min-width: ${screenSize.xxs}px) {
      display: block;
    }
  }
`
