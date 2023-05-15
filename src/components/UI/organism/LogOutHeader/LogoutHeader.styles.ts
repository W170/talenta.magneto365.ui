import styled from 'styled-components'
import { ILogoutHeader } from './LogoutHeader.interface'

export const withStyles = (c: React.FC<ILogoutHeader>): React.FC<ILogoutHeader> => styled(c)`
  display: grid;
  grid-template-rows: auto auto auto;
  width: 64rem;
  height: 8rem;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.primaryColors.white};

  .magneto-ui-row1 {
    grid-row: 1;
    margin: 5px 0px;
  }

  .magneto-ui-row2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0px;

    .magneto-ui-logo-wrapper {
      display: inherit;
      align-items: center;
      margin-right: 63px;
      gap: 10px;
    }

    .magneto-ui-button-wrapper {
      display: inherit;
      gap: 18px;
    }
  }

  .magneto-ui-row3 {
    display: flex;
    flex-direction: row;
    margin: 5px 0px;
  }
`
