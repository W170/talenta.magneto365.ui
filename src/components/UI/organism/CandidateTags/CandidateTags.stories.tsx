import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { CandidateTags } from './CandidateTags.component'
import { ICandidateTags } from './CandidateTags.interface'
import { candidateTagsProps } from '@constants/stories/candidateProfile.constants'

const ControlledComponent: React.FC<ICandidateTags> = ({ value = [], ...args }) => {
  const [tags, setTags] = React.useState<string[]>(value)

  const handleOnAdd = React.useCallback(
    (localTag: string) => {
      setTags([...tags, localTag])
    },
    [tags]
  )

  const handleOnRemove = React.useCallback(
    (localTag: string) => {
      setTags(tags.filter((tag) => tag !== localTag))
    },
    [tags]
  )

  return <CandidateTags {...args} value={tags} onAdd={handleOnAdd} onRemove={handleOnRemove} />
}

const meta: Meta<typeof CandidateTags> = {
  title: 'Organism/Candidate Tags',
  component: CandidateTags,
  args: { ...candidateTagsProps },
  render: (args) => <ControlledComponent {...args} />
}

export default meta

type Story = StoryObj<typeof CandidateTags>

export const Default: Story = {}
