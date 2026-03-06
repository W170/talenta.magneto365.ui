import { IFilterValue } from '@components/UI/template'

export const optionsFilterMenu: IFilterValue[] = [
  {
    id: 1,
    operator: 1,
    label: 'Administración y oficina',
    total: 200,
    isApplied: false
  },
  {
    id: 14,
    operator: 1,
    label: 'Ingenierías',
    total: 9999,
    isApplied: false
  },
  {
    id: 18,
    operator: 1,
    label: 'Medicina, sector de la salud y Ciencias',
    total: 200,
    isApplied: true
  },
  {
    id: 2,
    operator: 1,
    label: 'Recursos Humanos',
    total: 0,
    isApplied: false
  },
  {
    id: 25,
    operator: 1,
    label: 'Ventas',
    total: 10,
    isApplied: false
  }
]

export const appliedOptionsBySearchRenderType = [
  {
    id: '776@47',
    label: 'Antioquia, Colombia',
    parentId: 47,
    isApplied: true
  },
  {
    id: '789@47',
    label: 'Cundinamarca, Colombia',
    parentId: 47,
    isApplied: true
  }
]
