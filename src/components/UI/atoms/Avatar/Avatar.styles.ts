import styled from 'styled-components'
import { IAvatar } from './Avatar.interface'
import React from 'react'

export const withStyles = (Component: React.FC<IAvatar>): React.FC<IAvatar> => {
  return styled(Component)`
    display: flex;
    flex-direction: column;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      object-fit: cover;
    }

    .magneto-ui-default-avatar {
      display: inherit;
      width: 3rem;
      height: 3rem;
      justify-content: center;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.primaryColors.green};
    }
  `
}
