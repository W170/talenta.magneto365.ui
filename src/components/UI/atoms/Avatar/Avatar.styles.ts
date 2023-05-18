import styled from 'styled-components'
import { IAvatar } from './Avatar.interface'
import React from 'react'
import { lightTheme } from '../../../../shared/stylesheets/theme.styles'

export const withStyles = (Component: React.FC<IAvatar>): React.FC<IAvatar> => {
  return styled(Component)`
    display: flex;
    flex-direction: column;
    width: 2.25rem;
    height: 2.25rem;

    img {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      object-fit: cover;
    }

    .magneto-ui-default-avatar {
      display: flex;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: ${lightTheme.colors.primaryColors.green};
    }
  `
}
