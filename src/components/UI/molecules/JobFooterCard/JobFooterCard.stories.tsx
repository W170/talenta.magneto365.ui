import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { JobFooterCard } from './JobFooterCard.component'
import { FacebookBlue, LinkedInBlue, SMSBlue, TwitterBlue, WhatsAppColor } from '../../../../constants/icons.constants'
import { CompanyLogo } from '@constants/stories.constants'
import { ShareButton } from '@components/UI/atoms/ShareButton'

const meta: Meta<typeof JobFooterCard> = {
  title: 'Molecules/Job Footer Card',
  component: JobFooterCard,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobFooterCard>

export const Default: Story = {
  args: {
    offerCompanyLogo: CompanyLogo,
    offerFooterHeader: 'Compartir vacante en:',
    offerFooterList: [
      { href: '#', ariaLabel: 'facebook' },
      { href: '#', ariaLabel: 'whatsapp' },
      { href: '#', ariaLabel: 'linkedin' },
      { href: '#', ariaLabel: 'twitter' },
      { href: '#', ariaLabel: 'sms' }
    ],
    iconList: [FacebookBlue, WhatsAppColor, LinkedInBlue, TwitterBlue, SMSBlue],
    externalChild: <ShareButton buttonTitle="share" />
  }
}
