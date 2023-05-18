import styled from 'styled-components'
import { ISearchbar } from './Searchbar.interface'
import { lightTheme } from '../../../../shared/stylesheets/theme.styles'

export const withStyles = (c: React.FC<ISearchbar>): React.FC<ISearchbar> => styled(c)`
  display: flex;
  width: 100%;
  border-radius: 8px;
  background-color: ${lightTheme.colors.$gray5};

  form {
    display: inherit;
    justify-content: space-between;
    width: 100%;

    input {
      flex: 1;
      padding: 10px;

      background-color: transparent;
      border: none;
      border-radius: 8px;

      font-style: normal;
      font-weight: ${lightTheme.weight.regular};
      font-size: ${lightTheme.size.s2}px;
      line-height: 17px;
      color: ${lightTheme.colors.$grayDark};

      &:not(:placeholder-shown) {
        color: #020202;
      }

      :focus-visible {
        outline: none;
      }
    }

    .magneto-ui-searchbar-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: auto;
    }

    button {
      margin: 0px 10px;
      width: 18px;
      padding: 0px;
      border-radius: 8px;
      background-color: transparent;
    }

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      font-size: 18px;
      color: #a3a3b5;
    }
  }

  .magneto-ui-remove-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    margin: 0px 10px;

    svg {
      transform: rotate(45deg);
    }
  }
`
