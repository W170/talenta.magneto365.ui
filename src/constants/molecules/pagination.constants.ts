export const paginationProps = {
  total: 826,
  current: 4,
  pageSize: 20,
  loading: false,
  numberOfButtons: 5,
  prevTitle: 'Anterior',
  nextTitle: 'Siguiente',
  onChange: (page: number, pageSize: number) => console.log('Pagination: ', { page, pageSize })
}
