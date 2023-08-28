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
    detailsTextList: [
      'Hace 10 días',
      '4 cupos, 256 aplicaron',
      '2 años de experiencia, profesional',
      '$ 2.000.000 a $ 3.000.000',
      'Bello - Copacabana - Itagui - La Estrella'
    ],
    iconList: [Calendar1, People, Briefcase, DollarCircle, Location]
  }
}
