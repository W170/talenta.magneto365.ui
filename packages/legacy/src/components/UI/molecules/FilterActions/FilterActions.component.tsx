import style from './FilterActions.module.scss'
import React, { FC, useCallback, useImperativeHandle, useMemo, useState } from 'react'
import { IFilterActions } from '.'
import { alphabet } from '@constants/stories'
import { Button } from '@components/UI/atoms'

export const FilterActions: FC<IFilterActions> = ({ allAction, onClickAction, filtersRef }) => {
  const [selected, setSelected] = useState(0)

  const handleClickAction = useCallback(
    (index: number, letter: string) => () => {
      setSelected(index)
      onClickAction(index, letter)
    },
    [onClickAction]
  )

  useImperativeHandle(filtersRef, () => ({
    restartFilters: () => setSelected(0)
  }))

  const actions = useMemo(() => {
    const values = [allAction, ...alphabet.split('')]
    return values.map((letter, index) => (
      <Button
        onClick={handleClickAction(index, letter)}
        className={`${style[`filter-actions__action`]} ${
          selected == index ? style[`filter-actions__action--selected`] : ''
        }`}
        buttonText={letter}
        key={index}
      />
    ))
  }, [allAction, handleClickAction, selected])

  return <nav className={style['filter-actions']}>{actions}</nav>
}
