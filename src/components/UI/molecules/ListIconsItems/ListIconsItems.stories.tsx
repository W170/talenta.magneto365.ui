import { ListIconItem } from './ListIconsItems.component'
import { StoryObj, Meta } from '@storybook/react'
import { ListIconItem as ListIconItemProps } from '@constants/stories'
import {MessageQuestion} from "../../../../constants/icons.constants";

const meta: Meta<typeof ListIconItem> = {
    title: 'Molecules/List Icon Item',
    component: ListIconItem,
    args: {
        containerTitle: 'Mensajes de texto',
        containerIcon: MessageQuestion,
        listIcon: ListIconItemProps,
        direction: 'row',
        spacing: 10,
        size: 20
    }
}

export default meta

type Story = StoryObj<typeof ListIconItem>

export const Default: Story = {}
