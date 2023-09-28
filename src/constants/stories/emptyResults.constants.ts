import { IEmptyResutls } from '@components/UI/molecules/EmptyResults/EmptyResults.interface'

export const emptyResultsProps: IEmptyResutls = {
  titleNoResutls: 'No encontramos resultados para los filtros solicitados',
  noResultsDescription:
    'Modifica los términos de búsqueda o filtros que usaste, utiliza cargos o profesiones similares.',
  noResultsDescriptionTwo:
    'Te recomendamos tener tu perfil completo, así podremos sugerirte empleos ajustados a tu perfil cada vez que sean publicados.',
  filteredOptions: [
    { tag: 'Empleos por ciudad', url: '#' },
    { tag: 'Empleos por sectores', url: '#' },
    { tag: 'Empleos por empresa', url: '#' }
  ]
}
