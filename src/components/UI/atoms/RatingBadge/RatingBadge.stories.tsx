import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RatingBadge } from "./RatingBadge.component";
import { ratingBadge } from '@constants/stories'
const meta: Meta<typeof RatingBadge> = {
    title: 'Atoms/RatingBadge',
    component: RatingBadge,
    args: {
        ...ratingBadge
    },
    render: (args) => {
        return <div style={{backgroundColor: '#001B38', padding: '10px'}}> <RatingBadge {...args} /></div>
    }
}

export default meta

type Story = StoryObj<typeof RatingBadge>

export const Default: Story = {}