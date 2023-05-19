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

  .magneto-ui-first-row {
    display: inherit;
    margin: 5px 0px;
  }

  .magneto-ui-second-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5px 0px;

    .magneto-ui-left-section {
      display: inherit;
      gap: 20px;

      button {
        padding: 0px;
      }
    }

    .magneto-ui-middle-section {
      display: inherit;
      width: 40%;
    }

    .magneto-ui-right-section {
      display: inherit;
      gap: 18px;
    }
  }

  .magneto-ui-third-row {
    display: inherit;
    flex-direction: row;
    margin: 5px 0px;
  }
`
