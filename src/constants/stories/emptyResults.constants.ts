import { IEmptyResults } from '@components/UI/molecules/EmptyResults/EmptyResults.interface'

export const emptyResultsProps: IEmptyResults = {
  noResultsImage:
    'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fstatic.magneto365.com%2Fco%2F_next%2Fstatic%2Fmedia%2FemptyResultWithSession.6de8a42c.png&w=256&q=75',
  titleNoResults:
    'Actualmente no encontramos vacantes, pero puedes realizar una nueva búsqueda o acceder a otras secciones: ',
  noResultsDescription:
    'Modifica los términos de búsqueda o filtros que usaste, utiliza cargos o profesiones similares.',
  noResultsDescriptionTwo:
    'Te recomendamos tener tu perfil completo, así podremos sugerirte empleos ajustados a tu perfil cada vez que sean publicados.',
  filteredOptions: [
    { tag: 'Empleos por ciudad', url: '#' },
    { tag: 'Empleos por empresa', url: '#' },
    { tag: 'Empleos más buscados', url: '#' },
    { tag: 'Volver al inicio', url: '#' },
    { tag: 'Blog', url: '#' }
  ],
  noResultsMagnetoBusinessOne: '¿Tienes ofertas de empleo para publicar? Visita ',
  noResultsMagnetoBusinessTwo: ' y publica ilimitadamente.',
  magnetoBusiness: {
    magnetoLink: '#',
    magnetoText: 'Magneto Negocios'
  }
}
