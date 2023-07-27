import { Meta, StoryObj } from '@storybook/react'

import { JobFooterCard } from './JobFooterCard.component'

import {
  FacebookBlue,
  LinkedInBlue,
  SMSBlue,
  ShareBlue,
  TwitterBlue,
  WhatsAppColor
} from '../../../../constants/icons.constants'
import { CompanyLogo } from '@constants/stories.constants'

const meta: Meta<typeof JobFooterCard> = {
  title: 'Molecules/Job Footer Card',
  component: JobFooterCard,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobFooterCard>

export const Default: Story = {
  args: {
    jobFooterCompanyImg: CompanyLogo,
    jobFooterHeader: 'Compartir vacante en:',
    jobFooterLinks: [
      { Icon: FacebookBlue, url: '' },
      { Icon: WhatsAppColor, url: '' },
      { Icon: LinkedInBlue, url: '' },
      { Icon: TwitterBlue, url: '' },
      { Icon: SMSBlue, url: '' },
      { Icon: ShareBlue, url: '' }
    ]
  }
}
