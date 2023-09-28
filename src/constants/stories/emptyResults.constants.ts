import { IEmptyResutls } from '@components/UI/molecules/EmptyResults/EmptyResults.interface'

export const emptyResultsProps: IEmptyResutls = {
  noResultsImage:
    'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fstatic.magneto365.com%2Fco%2F_next%2Fstatic%2Fmedia%2FemptyResultWithSession.6de8a42c.png&w=256&q=75',
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
