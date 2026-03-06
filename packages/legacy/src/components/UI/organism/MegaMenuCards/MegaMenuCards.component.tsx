import React from 'react'
import style from './MegaMenuCards.module.scss'
import { IMegaMenuCards } from './MegaMenuCards.interface'
import { ArrowRight2, ArrowRightWhite } from '@constants/icons.constants'
import { ButtonLink } from '@components/UI/atoms/ButtonLink'
import { MegaMenuCard } from '@components/UI/molecules'
import { AlphabetFilter } from '@components/UI/organism'
import { useMediaQuery } from '@components/hooks'

const MegaMenuCards: React.FC<IMegaMenuCards> = ({
  jobs,
  action,
  title,
  actionTitle,
  className,
  filterProps,
  maxCards = 39
}) => {
  const renderTitle = useMediaQuery(
    title && (
      <div className={`${style[`mega-menu-cards__title`]}`}>
        <p>{title}</p>
        {actionTitle && (
          <ButtonLink
            href={actionTitle.url}
            buttonText={actionTitle.label}
            onClick={actionTitle.onClick}
            prefixIcon={ArrowRight2}
            iconSize={14}
            className={`${style[`mega-menu-cards__action--grey`]}`}
          />
        )}
      </div>
    ),
    {
      md: title && actionTitle && (
        <ButtonLink
          href={actionTitle.url}
          buttonText={actionTitle.label}
          onClick={actionTitle.onClick}
          prefixIcon={ArrowRight2}
          iconSize={14}
          className={`${style[`mega-menu-cards__action--grey`]}`}
        />
      )
    }
  )

  return (
    <nav className={className}>
      {renderTitle}
      {filterProps && <AlphabetFilter className={style[`mega-menu-cards__filter`]} {...filterProps} />}
      <ul className={`${style[`mega-menu-cards`]}`}>
        {jobs &&
          jobs.slice(0, maxCards).map((job, key) => (
            <li key={key}>
              <MegaMenuCard {...job} />
            </li>
          ))}
      </ul>
      {action && (
        <ButtonLink
          buttonText={action.label}
          href={action.url}
          onClick={action.onClick}
          target={action.target ?? '_self'}
          prefixIcon={ArrowRightWhite}
          className={`${style[`mega-menu-cards__action`]}`}
        />
      )}
    </nav>
  )
}

export default MegaMenuCards
