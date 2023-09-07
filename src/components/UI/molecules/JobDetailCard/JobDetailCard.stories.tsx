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
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p>'
  }
}

export const Example1: Story = {
  args: {
    offerDescription:
      '<h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p>'
  }
}

export const Example2: Story = {
  args: {
    offerDescription: '<h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p>'
  }
}

export const Example3: Story = {
  args: {
    offerDescription:
      '<h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>'
  }
}
