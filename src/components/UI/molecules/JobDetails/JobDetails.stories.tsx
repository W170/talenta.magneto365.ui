import { StoryObj, Meta } from '@storybook/react'
import { Briefcase, Calendar1, DollarCircle, People } from '../../../../constants/icons.constants'
import { CitiesDetailDrawerProps } from '@constants/stories'

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
    ...CitiesDetailDrawerProps,
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

export const WithoutCities: Story = {
  args: {
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
    ...CitiesDetailDrawerProps,
    offerDetailsList: ['Hace 10 días', '4 cupos, 256 aplicaron', null, undefined],
    iconList: [Calendar1, People, Briefcase, DollarCircle],
    altList: ['Calendar1-icon', 'People-icon', 'Briefcase-icon', 'DollarCircle-icon']
  }
}

export const LargeData: Story = {
  args: {
    ...CitiesDetailDrawerProps,
    offerDetailsList: [
      'Hace 9 días',
      '9999 cupos, 7 postulantes',
      '3 años de experiencia, no tengo estudios',
      'Salario a convenir'
    ],
    iconList: [Calendar1, People, Briefcase, DollarCircle],
    altList: ['Calendar1-icon', 'People-icon', 'Briefcase-icon', 'DollarCircle-icon']
  }
}

export const ExceededElements: Story = {
  args: {
    ...CitiesDetailDrawerProps,
    offerDetailsList: [
      'Hace 9 días',
      '9999 cupos, 7 postulantes',
      '3 años de experiencia, no tengo estudios',
      'Salario a convenir',
      'Elementos extra 1',
      'Elementos extra 2',
      'Elementos extra 3'
    ],
    iconList: [Calendar1, People, Briefcase, DollarCircle],
    altList: ['Calendar1-icon', 'People-icon', 'Briefcase-icon', 'DollarCircle-icon']
  }
}
