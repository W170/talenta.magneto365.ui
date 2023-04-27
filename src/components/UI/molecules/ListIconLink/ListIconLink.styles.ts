import styled from 'styled-components'

export const ListIconContainer = styled.div.attrs((props: { direction: string; spacing: number }) => props)`
  background-color: 'black';
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.spacing}px;

  &:hover {
  }
`
