import { Meta, StoryObj } from '@storybook/react'
import { Location } from '../../../../constants/icons.constants'
import CategoryMenuCard from './CategoryMenuCard.component'
import { generateID } from '../../../../utils/generateID/generateID.util'

const meta: Meta<typeof CategoryMenuCard> = {
  title: 'Molecules/Category Menu Card',
  component: CategoryMenuCard,
  args: {
    name: 'Categoria 1',
    icon: Location,
    list: [
      { id: generateID(), name: 'Cargo 1' },
      { id: generateID(), name: 'Cargo 2' },
      { id: generateID(), name: 'Cargo 3' }
      // { id: generateID(), name: 'Cargo 4' },
      // { id: generateID(), name: 'Cargo 5' },
    ]
  }
}

export default meta

type Story = StoryObj<typeof CategoryMenuCard>

export const Default: Story = {}
