import styled from 'styled-components'
import { IListIconLink } from './ListIconLink.interface'

export const withStyles = (c: React.FC<IListIconLink>): React.FC<IListIconLink> => styled(c)`
  background-color: 'black';
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.spacing}px;
`
