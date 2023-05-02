import styled from 'styled-components'

export const StyledTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 188px;
  height: 24px;
  padding: 2px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.$gray5};
`

export const StyledInsideTab = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 16px;
  border-radius: 6px;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
    color: ${(props) => props.theme.colors.$grayDark};

    :hover {
      color: ${(props) => props.theme.colors.$grayDark};
    }
  }
`
