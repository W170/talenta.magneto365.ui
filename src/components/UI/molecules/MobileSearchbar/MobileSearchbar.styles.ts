import styled from 'styled-components'
import { IMobileSearchbar } from './MobileSearchbar.interface'

export const withStyles = (c: React.FC<IMobileSearchbar>): React.FC<IMobileSearchbar> => styled(c)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 22.5rem;
  height: 3.75rem;

  .toggle-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  form {
    display: inherit;
    justify-content: space-between;
    align-items: center;
    height: 1.5rem;
  }

  input {
    width: 87%;
    background-color: transparent;
    border: none;

    font-style: normal;
    font-weight: ${(props) => props.theme.weight.regular};
    font-size: ${(props) => props.theme.size.s2}px;
    line-height: 17px;
    color: ${(props) => props.theme.colors.$grayDark};

    :focus-visible {
      outline: none;
    }
  }

  button {
    width: 20px;
    height: 20px;
    padding: 0px !important;
    border-radius: 0px;
  }
`
