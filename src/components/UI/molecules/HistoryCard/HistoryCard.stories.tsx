import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HistoryCard } from './HistoryCard.component'

export default {
  title: 'Molecules/HistoryCard',
  component: HistoryCard,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['edited', 'deleted']
      }
    }
  }
} as ComponentMeta<typeof HistoryCard>

const Template: ComponentStory<typeof HistoryCard> = (args) => <HistoryCard {...args} />

export const Edited = Template.bind({})
Edited.args = {
  type: 'edited',
  headerData: [
    { label: 'Analista', value: 'Andrea Jimenez | correo@correo.com' },
    { label: 'Campo editado', value: 'Experiencia laboral' }
  ],
  details: [
    { label: 'Nombre especifico del cargo', value: 'Colanta' },
    { label: 'Empresa', value: 'Coordinador de proyectos' },
    {
      label: 'Funciones del cargo',
      value:
        'Las funciones incluyen la gestión de recursos, la coordinación con diferentes departamentos, la elaboración de informes de progreso y la garantía de que los proyectos se completen dentro del plazo y presupuesto establecidos.'
    },
    { label: '¿Trabaja actualmente aquí?', value: 'No' },
    { label: 'Desde', value: 'Julio /2020' },
    { label: 'Hasta', value: 'Julio /2024' }
  ]
}

export const Deleted = Template.bind({})
Deleted.args = {
  type: 'deleted',
  headerData: [
    { label: 'Analista', value: 'Andrea Jimenez | correo@correo.com' },
    { label: 'Campo eliminado', value: 'Experiencia laboral' }
  ],
  details: [
    { label: 'Nombre especifico del cargo', value: 'Colanta' },
    { label: 'Empresa', value: 'Coordinador de proyectos', isStrikethrough: true }
  ]
}
