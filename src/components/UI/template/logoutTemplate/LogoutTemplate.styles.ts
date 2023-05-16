import styled from 'styled-components'
import { screenSize } from '../../../../constants/responsive.constants'
import { ILogoutTemplate } from './LogoutTemplate.interface'

export const withStyles = (c: React.FC<ILogoutTemplate>): React.FC<ILogoutTemplate> => styled(c)``

export const MenuContainer = styled.div`
  @media (min-width: ${screenSize.md}px) {
    margin-top: 40px;
  }
`

export const ActiosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: ${screenSize.md}px) {
    gap: 25px;
    margin-top: 40px;
  }
`
