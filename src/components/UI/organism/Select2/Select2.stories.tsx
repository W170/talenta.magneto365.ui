import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Select2 } from './Select2.component'
import { UserRoundedGray } from '../../../../constants/icons.constants'
import { generateID } from '../../../../utils/generateID/generateID.util'

const meta: Meta<typeof Select2> = {
  title: 'Organism/Select2',
  component: Select2,
  args: {
    className: 'className',
    onChange: (value) => console.log(value),
    placeholder: 'Probando',
    isMultiple: false,
    haveTags: true,
    limitSelections: 3,
    currentFields: [{ id: generateID(), name: 'Medellin' }],
    icon: UserRoundedGray,
    selectList: [
      { id: generateID(), name: 'Medellin' },
      { id: generateID(), name: 'Bogota' },
      { id: generateID(), name: 'Cucuta' },
      { id: generateID(), name: 'Cali' },
      { id: generateID(), name: 'Pasto' },
      { id: generateID(), name: 'Cartagena' },
      { id: generateID(), name: 'Neiva' },
      { id: generateID(), name: 'Barranquilla' }
    ]
  }
}
export default meta

type Story = StoryObj<typeof Select2>

export const Default: Story = {}

export const Mobile: Story = {
  args: {
    isMobile: true
  }
}

export const CustomComponentList: Story = {
  name: 'Custom component list',
  args: {
    render: (data, index) => <span>{`${index}. ${JSON.stringify(data)}`}</span>
  }
}
