import { StoryObj, Meta } from '@storybook/react'

import { JobDetailCardHeader } from './JobDetailCard.component'

const meta: Meta<typeof JobDetailCardHeader> = {
  title: 'Molecules/ Job Detail Card Header',
  component: JobDetailCardHeader,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobDetailCardHeader>

export const Default: Story = {
  args: {
    jobDetailCardHeader: '¡Trabaja con el Grupo Éxito!',
    jobDetailCardText:
      'Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.'
  }
}
