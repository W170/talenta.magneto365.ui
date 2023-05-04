import styled from 'styled-components'
import { IDrawerOrganism } from './DrawerOrganism.interface'

export const withStyles = (c: React.FC<IDrawerOrganism>): React.FC<IDrawerOrganism> => styled(c)`
  & > div {
    display: flex;
  }
`
