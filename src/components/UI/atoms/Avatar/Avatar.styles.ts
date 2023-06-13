import styled from 'styled-components'
import { IAvatar } from './Avatar.interface'
import React from 'react'

export const withStyles = (Component: React.FC<IAvatar>): React.FC<IAvatar> => {
  return styled(Component)`
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    position: relative;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      object-fit: cover;
    }

    .magneto-ui-default-avatar {
      display: flex;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      justify-content: center;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.primaryColors.green};
    }
  `
}
