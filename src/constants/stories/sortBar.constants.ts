import { ISortMenuItem } from '@components/UI/molecules'
import { ArrowDown2, ArrowSwapVertical } from '@constants/icons.constants'

export const menuSortButton = {
  icon: ArrowDown2,
  hover: false,
  size: 17
}

export const iconFilterOrder = {
  icon: ArrowSwapVertical,
  hover: false,
  size: 20
}

export const optionsFilterOrderBy: ISortMenuItem[] = [
  {
    field: 'salary_show',
    label: 'Salario'
  },
  {
    field: 'publish_date',
    label: 'Fecha de publicación'
  },
  {
    field: 'experience_months_number',
    label: 'Experiencia requerida'
  },
  {
    field: 'education_level_id',
    label: 'Nivel de estudios'
  }
]

export const sortBarProps = {
  textSortButton: 'FILTROS',
  mainTitle: 'Ofertas de empleo en colombia',
  filterSummary: '280 cupos',
  textOrderFilter: 'Fecha de publicación',
  orderFields: optionsFilterOrderBy,
  orderByText: 'Organizar por',
  isFiltersOpen: true,
  loading: false,
  titleBtnOrder: 'Ordenar de forma ascendente',
  setIsFiltersOpen: () => console.log('setIsFiltersOpen'),
  orderFilter: () => console.log('orderFilter'),
  setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
  infoMessageQuotas:
    'El número de resultados varias respecto al número de cupos, revisa los cupos disponibles en el detalle de las vacantes.'
}
