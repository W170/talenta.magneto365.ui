import React from 'react'

export interface SwipeProps {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onCloseModal?: () => void
  children: React.ReactNode
  openModal?: boolean
  modalTitle?: string
  modalLeftText?: string
  modalRightText?: string
  modalConfirmText?: string
}

export enum SwipeMode {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT'
}
