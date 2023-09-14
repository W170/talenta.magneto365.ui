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
    offerDetailsList: [
      'Hace 10 días',
      '4 cupos, 256 aplicaron',
      '2 años de experiencia, profesional',
      undefined,
      'Bello - Copacabana - Itagui - La Estrella'
    ],
    iconList: [Calendar1, People, Briefcase, DollarCircle, Location]
  }
}
