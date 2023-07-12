import { Meta, StoryObj } from '@storybook/react'

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
    jobApplyCardHeader: 'Requisitos para aplicar a la vacante:',
    jobApplyCardReqs: [
      { jobRequirementTitle: 'Experiencia:', jobRequirementInfo: ' 1 año de experiencia' },
      { jobRequirementTitle: 'Nivel de estudios:', jobRequirementInfo: ' Especialización / Maestría' },
      { jobRequirementTitle: 'Ciudad de residencia:', jobRequirementInfo: ' Planadas' },
      { jobRequirementTitle: 'Salario:', jobRequirementInfo: ` $2’100.000` }
    ],
    jobApplyButtonText: 'Aplicar'
  }
}
