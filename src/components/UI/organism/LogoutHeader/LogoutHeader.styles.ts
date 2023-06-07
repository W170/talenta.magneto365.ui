import styled from 'styled-components'
import { ILogoutHeader } from './LogoutHeader.interface'
import { screenSize } from '../../../../constants/responsive.constants'

export const withStyles = (Component: React.FC<ILogoutHeader>): React.FC<ILogoutHeader> => {
  return styled(Component)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding: 5px 20px;
    background-color: ${(props) => props.theme.colors.primaryColors.white};
    border-bottom: 1px solid ${(props) => props.theme.colors.disabledColors.gray2};

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
        @media (min-width: ${screenSize.xl}px) {
          width: 50%;
        }
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

    @media screen and (max-width: ${screenSize.lg - 1}px) {
      .magneto-ui-first-row {
        margin: 0px;
      }

      .magneto-ui-third-row {
        margin: 0px;
      }
    }
  `
}
