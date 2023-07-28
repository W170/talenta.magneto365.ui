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
    jobDetailsList: [
      { icon: Calendar1, detailText: 'Hace 10 días' },
      { icon: People, detailText: '4 cupos, 256 aplicaron' },
      { icon: Briefcase, detailText: '2 años de experiencia, profesional' },
      { icon: DollarCircle, detailText: '$ 2.000.000 a $ 3.000.000' },
      { icon: Location, detailText: 'Bello - Copacabana - Itagui - La Estrella' }
    ]
  }
}
