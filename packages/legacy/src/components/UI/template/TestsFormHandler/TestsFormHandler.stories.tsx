import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { IQuestion } from './children/GlobalQuestion/GlobalQuestion.interface'
import TestFormHandler from './TestsFormHandler.component'
import GlobalQuestion from './children/GlobalQuestion/GlobalQuestion.component'

const questions: IQuestion[] = [
  {
    id: 'q1',
    text: '¿Consideras que tienes facilidad para hablar con los demás?',
    type: 'single',
    options: [
      { id: 1, label: 'Sí.' },
      { id: 2, label: 'No.' }
    ]
  },
  {
    id: 'q2',
    text: '¿Podrías fácilmente llevar un registro detallado de productos, por ejemplo, un inventario o productos facturados en caja registradora?',
    type: 'single',
    options: [
      { id: 1, label: 'Sí.' },
      { id: 2, label: 'No.' }
    ]
  },
  {
    id: 'q3',
    text: '¿Te gusta trabajar con números y datos?',
    type: 'single',
    options: [
      { id: 1, label: 'Sí.' },
      { id: 2, label: 'No.' }
    ]
  },
  {
    id: 'q4',
    text: '¿Se te facilita tomar decisiones basadas en datos?',
    type: 'single',
    options: [
      { id: 1, label: 'Sí.' },
      { id: 2, label: 'No.' }
    ]
  },
  {
    id: 'q5',
    text: '¿Se te facilita resolver problemas complejos que implican mucho análisis?',
    type: 'single',
    options: [
      { id: 1, label: 'Sí.' },
      { id: 2, label: 'No.' }
    ]
  },
  {
    id: 'q6',
    text: '¿Te ves trabajando para y por las personas?',
    type: 'single',
    options: [
      { id: 1, label: 'Sí.' },
      { id: 2, label: 'No.' }
    ]
  },
  {
    id: 'q7',
    text: '¿seleccion multiple?',
    type: 'multiple',
    options: [
      { id: 1, label: 'Sí.' },
      { id: 2, label: 'No.' },
      { id: 3, label: 'Talvez.' },
      { id: 4, label: 'No se' }
    ]
  }
]

const meta: Meta<typeof TestFormHandler> = {
  title: 'Template/Test Form Handler',
  component: TestFormHandler,
  args: {}
}
export default meta

type Story = StoryObj<typeof TestFormHandler>

export const Single: Story = {
  args: {
    onSubmit: () => console.log('finished'),
    children: questions.map((question, index) => (
      <GlobalQuestion key={question.id} question={question} idx={index + 1} errorText="Esta pregunta es obligatoria" />
    )),
    customButtonText: {
      previous: 'Atras',
      next: 'Siguiente',
      finish: 'Finalizar'
    }
  }
}
