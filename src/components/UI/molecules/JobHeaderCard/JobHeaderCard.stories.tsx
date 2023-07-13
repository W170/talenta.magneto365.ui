import { Meta, StoryObj } from '@storybook/react'
import { JobHeaderCard } from './JobHeaderCard.component'

import Logo from '../../../../assets/grupo-exito-1.png'
import { ArchiveAdd, Buildings2, Export3, Share } from '../../../../constants/icons.constants'

const meta: Meta<typeof JobHeaderCard> = {
  title: 'Molecules/Job Header Card',
  component: JobHeaderCard,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobHeaderCard>

export const Default: Story = {
  args: {
    companyJobHeader: {
      companyLogoProps: {
        companyLogoImg: Logo,
        alt: 'Grupo Exito Logo'
      },
      jobHeaderProps: {
        jobTitle: 'Comunicador Audiovisual',
        jobSubtitle: 'Grupo Exito'
      }
    },
    jobActions: {
      actionButtonText: 'Aplicar',
      actionsListIcon: [
        { Icon: ArchiveAdd, url: '' },
        { Icon: Share, url: '' },
        { Icon: Export3, url: '' },
        { Icon: Buildings2, url: ' ' }
      ]
    }
  }
}
