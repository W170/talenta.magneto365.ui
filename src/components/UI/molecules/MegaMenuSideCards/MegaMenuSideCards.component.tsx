import React, { useCallback, useImperativeHandle, useState } from 'react'
import style from './MegaMenuSideCards.module.scss'
import { IMegaMenuSideCards } from './MegaMenuSideCards.interface'
import { ArrowRightWhite } from '@constants/icons.constants'
import { MegaMenuCard } from '../MegaMenuCard'
import { ButtonLink } from '@components/UI/atoms/ButtonLink'

const MegaMenuSideCards: React.FC<IMegaMenuSideCards> = ({
  jobs,
  action,
  onSelectCard,
  initValue,
  maxCards = 10,
  cardsRef
}) => {
  const [selected, setSelected] = useState(initValue || 0)

  const handleClick = useCallback(
    (index: number) => () => {
      setSelected(index)
      onSelectCard && onSelectCard(index)
    },
    [onSelectCard]
  )

  useImperativeHandle(cardsRef, () => ({
    setSelectedCard: (index: number) => setSelected(index)
  }))

  return (
    <ul className={`${style[`mega-menu-side-cards`]}`}>
      {jobs &&
        jobs.slice(0, maxCards).map((job, key) => (
          <li key={key}>
            <MegaMenuCard
              {...job}
              showRigthArrow={selected == key}
              className={`${style[`mega-menu-side-cards__card`]} ${
                selected == key ? style[`mega-menu-side-cards__card--selected`] : ''
              }`}
              onClick={onSelectCard ? handleClick(key) : undefined}
            />
          </li>
        ))}
      {action && (
        <li>
          <ButtonLink
            href={action.url}
            buttonText={action.label}
            onClick={action.onClick}
            className={`${style[`mega-menu-side-cards__action`]}`}
            prefixIcon={ArrowRightWhite}
          />
        </li>
      )}
    </ul>
  )
}

export default MegaMenuSideCards
