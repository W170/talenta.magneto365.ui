import styled from 'styled-components'

export const StyledTabButton = styled.div.attrs((props: { fontSize: string }) => props)`
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
    font-style: normal;
    font-weight: 800;
    font-size: ${(props) => props.fontSize};
    line-height: 14px;
  }
`
