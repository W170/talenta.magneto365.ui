import styled from 'styled-components'
import { IHeaderDrawerTabs } from './HeaderDrawerTabs.interface'

export const withStyles = (c: React.FC<IHeaderDrawerTabs>): React.FC<IHeaderDrawerTabs> => styled(c)`
  display: flex;
  gap: ${(props) => props.spacing}px;
`
