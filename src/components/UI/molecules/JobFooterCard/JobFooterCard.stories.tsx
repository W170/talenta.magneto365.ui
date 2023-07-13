import { Meta, StoryObj } from '@storybook/react'

import { JobFooterCard } from './JobFooterCard.component'
import Logo from '../../../../assets/grupo-exito-1.png'
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
      { Icon: FacebookDark, url: '' },
      { Icon: WhatsAppDark, url: '' },
      { Icon: LinkedInDark, url: '' },
      { Icon: TwitterDark, url: '' },
      { Icon: MailDark, url: '' },
      { Icon: LinkDark, url: '' }
    ]
  }
}
