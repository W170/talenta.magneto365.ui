import styled from 'styled-components'
import { ILogoutHeader } from './LogoutHeader.interface'

export const withStyles = (c: React.FC<ILogoutHeader>): React.FC<ILogoutHeader> => styled(c)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primaryColors.white};
  border-bottom: 1px solid #e9e9f6;

  .magneto-ui-row1 {
    grid-row: 1;
  }

  .magneto-ui-row2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5px 0px;

    .magneto-ui-logo-wrapper {
      display: flex;
      gap: 20px;
      button {
        padding: 0px;
      }
    }

    .magneto-ui-button-wrapper {
      display: inherit;
      gap: 18px;
    }

    .magneto-ui-searchbar-wrapper {
      width: 40%;
    }
  }

  .magneto-ui-row3 {
    display: flex;
    flex-direction: row;
    margin: 5px 0px;
  }
`
