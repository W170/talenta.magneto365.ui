import styled from 'styled-components'
import { ISearchbar } from './Searchbar.interface'

export const withStyles = (Component: React.FC<ISearchbar>): React.FC<ISearchbar> => {
  return styled(Component)`
    display: flex;
    width: 100%;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.$gray5};

    form {
      display: inherit;
      justify-content: space-between;
      width: 100%;
      height: 45px;

      input {
        flex: 1;
        padding: 10px;

        background-color: transparent;
        border: none;
        border-radius: 8px;

        font-style: normal;
        font-weight: ${(props) => props.theme.weight.regular};
        font-size: ${(props) => props.theme.size.s2}px;
        line-height: 17px;
        color: ${(props) => props.theme.colors.$grayDark};

        &:not(:placeholder-shown) {
          color: #020202;
        }

        :focus-visible {
          outline: none;
        }
      }

      .magneto-ui-searchbar-buttons {
        display: flex;
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
        color: ${(props) => props.theme.colors.$grayDark};
      }
    }

    .magneto-ui-remove-button {
      display: flex;
      align-items: center;
      margin: 0px 10px;

      svg {
        transform: rotate(45deg);
      }
    }
  `
}
