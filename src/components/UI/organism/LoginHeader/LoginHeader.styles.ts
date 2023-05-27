import styled from 'styled-components'
import { ILoginHeader } from './LoginHeader.interface'
import { screenSize } from '../../../../constants/responsive.constants'

export const withStyles = (Component: React.FC<ILoginHeader>): React.FC<ILoginHeader> => {
  return styled(Component)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.colors.primaryColors.white};
    border-bottom: 1px solid ${(props) => props.theme.colors.disabledColors.gray2};

    .magneto-ui-first-row {
      display: inherit;
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
        margin-right: 3rem;
        button {
          padding: 0px;
        }
      }

      .magneto-ui-searchbar-section {
        display: inherit;
        width: 25%;
      }

      .magneto-ui-tabs-section {
        display: inherit;
        width: auto;
        margin-left: 3rem;
        margin-right: 1.75rem;
      }
    }

    .magneto-ui-third-row {
      display: inherit;
      flex-direction: row;
      margin: 5px 0px;
    }

    @media screen and (max-width: ${screenSize.xl - 1}px) {
      .magneto-ui-second-row {
        .magneto-ui-searchbar-section {
          display: inherit;
          width: 50%;
        }
      }
    }

    @media screen and (max-width: ${screenSize.lg - 1}px) {
      .magneto-ui-third-row {
        margin: 0px;
      }
    }
  `
}
