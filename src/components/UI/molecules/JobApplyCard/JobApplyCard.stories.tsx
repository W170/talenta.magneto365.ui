import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MainButton } from '@components/UI/atoms'
import { JobApplyCard } from './JobApplyCard.component'

const meta: Meta<typeof JobApplyCard> = {
  title: 'Molecules/Job Apply Card',
  component: JobApplyCard,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobApplyCard>

export const Default: Story = {
  args: {
    offerApplyHeader: 'Requisitos para aplicar a la vacante:',
    offerApplyElements: [
      { offerApplyLabel: 'Experiencia:', offerApplyInfo: ' 1 año de experiencia' },
      { offerApplyLabel: 'Nivel de estudios:', offerApplyInfo: ' Especialización / Maestría' },
      { offerApplyLabel: 'Ciudad de residencia:', offerApplyInfo: ' Planadas' },
      { offerApplyLabel: 'Salario:', offerApplyInfo: ` $2’100.000` }
    ],
    externalChild: <MainButton buttonText="Aplicar" />
  }
}
