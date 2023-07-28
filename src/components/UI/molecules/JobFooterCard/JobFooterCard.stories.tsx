import { Meta, StoryObj } from '@storybook/react'

import { JobFooterCard } from './JobFooterCard.component'
import Logo from '../../../../assets/Linkedin.svg'
import {
  FacebookDark,
  LinkDark,
  LinkedInDark,
  MailDark,
  TwitterDark,
  WhatsAppDark
} from '../../../../constants/icons.constants'

const meta: Meta<typeof JobFooterCard> = {
  title: 'Molecules/Job Footer Card',
  component: JobFooterCard,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobFooterCard>

export const Default: Story = {
  args: {
    jobFooterCompanyImg: Logo,
    jobFooterHeader: 'Compartir vacante en:',
    jobFooterLinks: [
      { icon: FacebookDark, url: '' },
      { icon: WhatsAppDark, url: '' },
      { icon: LinkedInDark, url: '' },
      { icon: TwitterDark, url: '' },
      { icon: MailDark, url: '' },
      { icon: LinkDark, url: '' }
    ]
  }
}
