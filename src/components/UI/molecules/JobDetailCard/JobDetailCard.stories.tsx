import { StoryObj, Meta } from '@storybook/react'

import { JobDetailCard } from './JobDetailCard.component'

const meta: Meta<typeof JobDetailCard> = {
  title: 'Molecules/Job Detail Card',
  component: JobDetailCard,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobDetailCard>

export const Default: Story = {
  args: {
    jobDetailCardHeader: '¡Trabaja con el Grupo Éxito!',
    jobDetailCardText:
      'Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.'
  }
}
