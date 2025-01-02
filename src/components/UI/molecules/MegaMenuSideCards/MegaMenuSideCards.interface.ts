import { IMegaMenuCard } from '@components/UI/molecules'
import { IMegaMenuLink } from '@components/UI/template/MegaMenu/MegaMenuContext.interface'
import { Ref } from 'react'

export interface IMegaMenuSideCards {
  /**
   * Array of jobs for each card
   */
  jobs: IMegaMenuCard[]
  /**
   * CallBack when a card is selected
   */
  onSelectCard?: (index: number) => void
  /**
   * Actrion button on the end of the component
   */
  action?: IMegaMenuLink
  /**
   * Max amount of cards
   */
  maxCards?: number
  /**
   * Initial selected card
   */
  initValue?: number
  /**
   * Reference for iterative bnehaviour
   */
  cardsRef?: Ref<ICardsRef>
}

export interface ICardsRef {
  /**
   * CallBack to restart filters
   */
  setSelectedCard: (index: number) => void
}
