import { IMegaMenuCard } from '@components/UI/molecules'
import { IMegaMenuLink } from '@components/UI/template/MegaMenu/MegaMenuContext.interface'
import { Ref } from 'react'

export interface IMegaMenuSideCards {
  jobs: IMegaMenuCard[]
  onSelectCard?: (index: number) => void
  action?: IMegaMenuLink
  maxCards?: number
  initValue?: number
  cardsRef?: Ref<ICardsRef>
}

export interface ICardsRef {
  /**
   * CallBack to restart filters
   */
  setSelectedCard: (index: number) => void
}
