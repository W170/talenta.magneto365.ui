import { StoryObj, Meta } from '@storybook/react'
import VacantPositions from './VacantPositions.component'
import CategoryGrid from '../../organism/CategoryGrid/CategoryGrid.component'
import { categoriesData } from '@constants/stories'
import { CategoryMenuCard } from '../../molecules/CategoryMenuCard'

const meta: Meta<typeof VacantPositions> = {
  title: 'Template/VacantPositions',
  component: VacantPositions,
  args: {
    title: 'Selecciona la categoría en la que quieres buscar un cargo',
    subtitle: 'Te llevaremos a la sección donde podrás acceder a la información de salarios y funciones de esos cargos',
    showBackButton: true,
    viewMoreProps: {
      buttonText: 'Conoce todas las vacantes disponibles para Ingenieros',
      href: '/',
      onClick: () => {
        console.log()
      }
    },
    filterProps: {
      allActionText: 'Todas',
      onClickAction: () => {
        console.log('')
      },
      title: 'Filtrar por letra inicial:'
    }
  }
}

export default meta

type Story = StoryObj<typeof VacantPositions>

export const Default: Story = {}

export const CustomTemplate: Story = {
  name: 'Template with grid',
  args: {
    title: 'Selecciona la categoría en la que quieres buscar un cargo',
    subtitle: 'Te llevaremos a la sección donde podrás acceder a la información de salarios y funciones de esos cargos',
    showBackButton: true,
    viewMoreProps: {
      buttonText: 'Conoce todas las vacantes disponibles para Ingenieros',
      href: '/',
      onClick: () => {
        console.log()
      }
    },
    filterProps: {
      allActionText: 'Todas',
      onClickAction: () => {
        console.log('')
      },
      title: 'Filtrar por letra inicial:'
    },
    children: CategoryGrid({
      elements: categoriesData,
      render: CategoryMenuCard
    })
  }
}
