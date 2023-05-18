import styled from 'styled-components'
import { IAvatar } from './Avatar.interface'
import React from 'react'

export const withStyles = (c: React.FC<IAvatar>): React.FC<IAvatar> => styled(c)`
  display: flex;
  flex-direction: column;
  width: 2.25rem;
  height: 2.25rem;
  cursor: pointer;
  img {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    object-fit: cover;
  }
`
