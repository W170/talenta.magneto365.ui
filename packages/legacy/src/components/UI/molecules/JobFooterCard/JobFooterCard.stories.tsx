import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { JobFooterCard } from './JobFooterCard.component'
import {
  FacebookBlue,
  LinkedInBlue,
  SMSBlue,
  X,
  WhatsAppColor,
  MagnetoIcon,
  LinkedInSolidBlue
} from '../../../../constants/icons.constants'
import { CompanyLogo } from '@constants/stories'
import { Button } from '../../atoms'

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
      { href: '#', ariaLabel: 'facebook', title: 'Facebook' },
      { href: '#', ariaLabel: 'whatsapp', title: 'Whatsapp' },
      { href: '#', ariaLabel: 'linkedin', title: 'Linkedin' },
      { href: '#', ariaLabel: 'x', title: 'X' },
      { href: '#', ariaLabel: 'sms', title: 'Correo' }
    ],
    iconList: [FacebookBlue, WhatsAppColor, LinkedInBlue, X, SMSBlue],
    shareButtonProps: {
      buttonTitle: 'Compartir vacante',
      onCopySuccess: () => console.log('Success'),
      icon: 'archiveAdd'
    }
  }
}

export const WithExternalChild: Story = {
  args: {
    offerCompanyLogo: CompanyLogo,
    offerFooterHeader: 'Compartir vacante en:',
    offerFooterList: [
      { href: '#', ariaLabel: 'facebook', title: 'Facebook' },
      { href: '#', ariaLabel: 'whatsapp', title: 'Whatsapp' },
      { href: '#', ariaLabel: 'linkedin', title: 'Linkedin' },
      { href: '#', ariaLabel: 'x', title: 'X' },
      { href: '#', ariaLabel: 'sms', title: 'Correo' }
    ],
    iconList: [FacebookBlue, WhatsAppColor, LinkedInBlue, X, SMSBlue],
    shareButtonProps: {
      buttonTitle: 'Compartir vacante',
      onCopySuccess: () => console.log('Success'),
      icon: 'export3'
    },
    externalChild: (
      <>
        <Button buttonText="Aplicar con Magneto" onClick={() => console.log} suffixIcon={MagnetoIcon} />
        <Button buttonText="Aplicar con LinkedIn" onClick={() => console.log} suffixIcon={LinkedInSolidBlue} />
      </>
    ),
    variant: 'detailed'
  }
}
