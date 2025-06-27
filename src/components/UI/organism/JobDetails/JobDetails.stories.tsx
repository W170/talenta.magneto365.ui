import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { JobDetails } from './index'

const meta: Meta<typeof JobDetails> = {
  title: 'Organism/JobDetails',
  component: JobDetails,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobDetails>

export const Default: Story = {}

export const Custom: Story = {
  render() {
    return (
      <JobDetails renderHeader={() => 'Main Header'}>
        <JobDetails.Summary>Lista de opciones</JobDetails.Summary>
        Hola Mundo
        <JobDetails.Fraud renderTitle={() => '¡Ten cuidado con el fraude!'}>
          Magneto y sus empresas aliadas nunca te pedirán dinero a cambio en un proceso de selección. Ten cuidado,
          revisa bien la vacante y si ves algo sospechoso repórtalo.
          <JobDetails.Fraud.Link>Reportar Fraude</JobDetails.Fraud.Link>
        </JobDetails.Fraud>
      </JobDetails>
    )
  }
}
