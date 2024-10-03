import React, { useCallback, useState } from 'react'
import style from './MegaMenuSideCards.module.scss'
import { IMegaMenuSideCards } from './MegaMenuSideCards.interface'
import { ArrowRightWhite } from '@constants/icons.constants'
import { MegaMenuCard } from '../MegaMenuCard'
import { SearchItem } from '@components/UI/atoms'

const MegaMenuSideCards: React.FC<IMegaMenuSideCards> = ({ jobs, action, onSelectCard }) => {
  const [selected, setSelected] = useState(0)

  const handleClick = useCallback(
    (index: number) => () => {
      setSelected(index)
      onSelectCard && onSelectCard(index)
    },
    [onSelectCard]
  )
  return (
    <ul className={`${style[`mega-menu-side-cards`]}`}> 
      {jobs &&
        jobs.slice(0, 10).map((job, key) => (
          <li key={key}>
            <MegaMenuCard
              {...job}
              showRigthArrow={selected == key}
              className={`${style[`mega-menu-side-cards__card`]} ${
                selected == key ? style[`mega-menu-side-cards__card--selected`] : ''
              }`}
              onClick={handleClick(key)}
            />
          </li>
        ))}
      {action && (
        <li>
          <SearchItem
            url={action.url}
            tag={action.label}
            className={`${style[`mega-menu-side-cards__action`]}`}
            icon={ArrowRightWhite}
          />
        </li>
      )}
    </ul>
  )
}

export default MegaMenuSideCards
