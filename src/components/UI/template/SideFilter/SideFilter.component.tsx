import React, { FC } from 'react'
import { ISideFilter } from './SideFilter.interface'
import { FilterHeader } from '@components/UI/organism/FilterHeader'
import { FilterCard } from '@components/UI/organism/FilterCard'
import styles from './SideFilter.module.scss'

//TODO: this is a temporal

import { optionsFilterMenu } from '@constants/stories.constants'
const argsHeader = {
  title: 'Filtrar empleos',
  buttonText: 'Limpiar',
  switchText: 'Apto para personas con discapacidad',
  filtersApplied: 5,
  cleanFilters: () => console.log('This function clean all filters')
}

const argsCard = {
  totalOptions: [...optionsFilterMenu, ...optionsFilterMenu],
  // setOptions: (filteredOptions) => console.log(filteredOptions),
  title: 'Sector Laboral',
  hasSwitch: false,
  switchText: 'remoto',
  searchPlaceholder: 'Buscar por un sector laboral'
}

// end TODO:
export const SideFilter: FC<ISideFilter> = () => {
  return (
    <aside className={styles['magneto-iu-side-filter']}>
      <FilterHeader {...argsHeader} />
      {[1, 2, 3, 4].map((number) => (
        <FilterCard key={number} {...argsCard} />
      ))}
    </aside>
  )
}
