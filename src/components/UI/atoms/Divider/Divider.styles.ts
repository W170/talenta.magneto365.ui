import styled from 'styled-components'
import { IDivider } from './Divider.interface'

export const withStyles = (c: React.FC<IDivider>): React.FC<IDivider> => styled(c)`
  width: ${(props) => (props.width ? props.width : 100)}%;
  background-color: ${(props) => (props.color ? props.color : 'black')};
  height: 1px;
  opacity: ${(props) => (props.opacity ? `0.${props.opacity}` : 1)};
  margin: ${(props) => (props.spacing ? props.spacing : 0)}px 0px;
`
