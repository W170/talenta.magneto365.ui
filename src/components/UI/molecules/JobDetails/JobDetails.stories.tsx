import { StoryObj, Meta } from '@storybook/react'
import { Briefcase, Calendar1, DollarCircle, Location, People } from '../../../../constants/icons.constants'

import { JobDetails } from './JobDetails.component'

const meta: Meta<typeof JobDetails> = {
  title: 'Molecules/ Job Details',
  component: JobDetails,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobDetails>

export const Default: Story = {
  args: {
    jobDetailsList: [
      { Icon: Calendar1, detailText: 'Hace 10 días' },
      { Icon: People, detailText: '4 cupos, 256 aplicaron' },
      { Icon: Briefcase, detailText: '2 años de experiencia, profesional' },
      { Icon: DollarCircle, detailText: '$ 2.000.000 a $ 3.000.000' },
      { Icon: Location, detailText: 'Bello - Copacabana - Itagui - La Estrella' }
    ]
  }
}
