import React from 'react'
import style from './MegaMenuCards.module.scss'
import { IMegaMenuCards } from './MegaMenuCards.interface'
import { MegaMenuCard, SearchItem } from '@components/UI/atoms'
import { ArrowRightWhite } from '@constants/icons.constants'

const MegaMenuCards: React.FC<IMegaMenuCards> = ({ jobs, action, title, actionTitle, className }) => {
  return (
    <nav className={className}>
      {title && (
        <div className={`${style[`mega-menu-cards__title`]}`}>
          <h4>{title}</h4>
          {actionTitle && (
            <SearchItem
              url={actionTitle.url}
              tag={actionTitle.label}
              className={`${style[`mega-menu-cards__action`]} ${style[`mega-menu-cards__action--grey`]}`}
            />
          )}
        </div>
      )}

      <ul className={`${style[`mega-menu-cards`]}`}>
        {jobs &&
          jobs.slice(0, 39).map((job, key) => (
            <li key={key}>
              <MegaMenuCard {...job} />
            </li>
          ))}
        {action && (
          <li>
            <SearchItem
              url={action.url}
              tag={action.label}
              icon={ArrowRightWhite}
              className={`${style[`mega-menu-cards__action`]}`}
            />
          </li>
        )}
      </ul>
    </nav>
  )
}

export default MegaMenuCards
