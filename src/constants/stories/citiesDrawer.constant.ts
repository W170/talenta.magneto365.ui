import { ICitiesDetailDrawer } from '@components/UI/molecules'

export const CitiesDetailDrawerProps: ICitiesDetailDrawer = {
  cities: [
    {
      name: 'Bello',
      url: 'https://www-stg.magneto365.com/co/trabajos/ofertas-empleo-en-bello',
      title: 'Ofertas empleo en Bello'
    },
    {
      name: 'Copacabana',
      url: 'https://www-stg.magneto365.com/co/trabajos/ofertas-empleo-en-copacabana',
      title: 'Ofertas empleo en Copacabana'
    }
  ],
  isRemote: true,
  textRemote: 'Remoto / híbrido en: '
}
