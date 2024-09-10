import React from 'react'
import style from './MegaMenuSideCards.module.scss'
import { IMegaMenuSideCards } from './MegaMenuSideCards.interface'
import { MegaMenuCard, SearchItem } from '@components/UI/atoms'

const MegaMenuSideCards: React.FC<IMegaMenuSideCards> = ({ jobs, action, selected }) => {
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
            />
          </li>
        ))}
      {action && (
        <li>
          <SearchItem url={action.url} tag={action.label} className={`${style[`mega-menu-side-cards__action`]}`} />
        </li>
      )}
    </ul>
  )
}

export default MegaMenuSideCards
