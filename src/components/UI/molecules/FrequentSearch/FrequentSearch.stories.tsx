import { Meta, StoryObj } from '@storybook/react'

import { FrequentSearch } from './FrequentSearch.component'
import { ISearchItem } from '../../atoms/SearchItem/SearchItem.interface'
import { SearchItem } from '@components/UI/atoms/SearchItem'
import React from 'react'

const meta: Meta<typeof FrequentSearch> = {
  title: 'Molecules/Frequent Search',
  component: FrequentSearch,
  args: {}
}

export default meta

type Story = StoryObj<typeof FrequentSearch>

const searchList: ISearchItem[] = [
  { tag: 'Bolsa de empleo México' },
  { tag: 'Bolsa de empleo Argentina' },
  { tag: 'Bolsa de empleo Nicaragua' },
  { tag: 'Bolsa de empleo Costa Rica' },
  { tag: 'Servicio de empleo Colombia' },
  { tag: 'Bolsa de empleo Colombia' },
  { tag: 'Empleo en Barranquilla' },
  { tag: 'Empleo en Cartagena' },
  { tag: 'Empleo en Medellín' },
  { tag: 'Empleo en Bogotá' },
  { tag: 'Empleo en Cali' },
  { tag: 'Empleo en Pereira' },
  { tag: 'Empleo como agente' },
  { tag: 'Trabajos como ingeniero' },
  { tag: 'Servicio de empleo' },
  { tag: 'Empleos como abogado' },
  { tag: 'Empleo como desarrollador' },
  { tag: 'Empleos SENA' },
  { tag: 'Empleos en bodega' },
  { tag: 'Empleo como regente de farmacia' }
]

export const Default: Story = {
  args: {
    searchHeading: 'Búsquedas de empleo más frecuentes',
    children: searchList.map(({ tag }, index: number) => (
      <a key={index}>
        <SearchItem tag={tag} />
      </a>
    ))
  }
}
