import { StoryObj, Meta } from '@storybook/react'
import { ListMenuText } from './'
import { listMenuText } from '@constants/stories.constants'

const meta: Meta<typeof ListMenuText> = {
  title: 'Molecules/List Menu Text',
  component: ListMenuText,
  args: {
    title: listMenuText.legalMenu.title,
    links: listMenuText.legalMenu.links
  }
}

export default meta

type Story = StoryObj<typeof ListMenuText>

export const Default: Story = {}
