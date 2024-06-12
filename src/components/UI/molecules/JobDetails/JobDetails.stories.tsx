import { StoryObj, Meta } from '@storybook/react'
import { Briefcase, Calendar1, DollarCircle, Location, People } from '../../../../constants/icons.constants'

import { JobDetails } from './JobDetails.component'

const meta: Meta<typeof JobDetails> = {
  title: 'Molecules/Job Details',
  component: JobDetails,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobDetails>

export const Default: Story = {
  args: {
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
    offerDetailsList: [
      'Hace 10 días',
      '4 cupos, 256 aplicaron',
      '2 años de experiencia, profesional',
      '$ 2.000.000 a $ 3.000.000'
    ],
    iconList: [Calendar1, People, Briefcase, DollarCircle],
    altList: ['Calendar1-icon', 'People-icon', 'Briefcase-icon', 'DollarCircle-icon']
  }
}

export const FalsyValues: Story = {
  args: {
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
    offerDetailsList: [
      'Hace 10 días',
      '4 cupos, 256 aplicaron',
      null,
      undefined,
      'Bello - Copacabana - Itagui - La Estrella'
    ],
    iconList: [Calendar1, People, Briefcase, DollarCircle, Location],
    altList: ['Calendar1-icon', 'People-icon', 'Briefcase-icon', 'DollarCircle-icon', 'Location-icon']
  }
}

export const LargeData: Story = {
  args: {
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
    offerDetailsList: [
      'Hace 9 días',
      '9999 cupos, 7 postulantes',
      '3 años de experiencia, no tengo estudios',
      'Salario a convenir',
      `Addanki - Adivivaram - Cranzalem - Adalaj - Sandur - Medak - Parichha - Otra(Colombia) - Otra(Germany) - Otra(ad-Dawhah) -  Otra(Atlantico Sur) - Otra (Atlantico Norte) - Otra(Atlnatida) - Medeiros Neto - Villa Alemana - Medellin - Ahorn - Medesano - Ahome - Medemblik - Vel'ky - Meder - Medellin de Bravo`
    ],
    iconList: [Calendar1, People, Briefcase, DollarCircle, Location],
    altList: ['Calendar1-icon', 'People-icon', 'Briefcase-icon', 'DollarCircle-icon', 'Location-icon']
  }
}

export const ExceededElements: Story = {
  args: {
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
    offerDetailsList: [
      'Hace 9 días',
      '9999 cupos, 7 postulantes',
      '3 años de experiencia, no tengo estudios',
      'Salario a convenir',
      `Addanki - Adivivaram - Cranzalem - Adalaj - Sandur - Medak - Parichha - Otra(Colombia) - Otra(Germany) - Otra(ad-Dawhah) -  Otra(Atlantico Sur) - Otra (Atlantico Norte) - Otra(Atlnatida) - Medeiros Neto - Villa Alemana - Medellin - Ahorn - Medesano - Ahome - Medemblik - Vel'ky - Meder - Medellin de Bravo`,
      'Elementos extra 1',
      'Elementos extra 2',
      'Elementos extra 3'
    ],
    iconList: [Calendar1, People, Briefcase, DollarCircle, Location],
    altList: ['Calendar1-icon', 'People-icon', 'Briefcase-icon', 'DollarCircle-icon', 'Location-icon']
  }
}
