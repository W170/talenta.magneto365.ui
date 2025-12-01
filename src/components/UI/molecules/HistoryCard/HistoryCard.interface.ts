import React from 'react'

export interface IHistoryCardDetail {
  label: string
  value: React.ReactNode
  isStrikethrough?: boolean
}

export interface IHistoryCardHeader {
  label: string
  value: string
}

export interface IHistoryCard {
  type: 'edited' | 'deleted'
  headerData: IHistoryCardHeader[]
  details: IHistoryCardDetail[]
  className?: string
}
