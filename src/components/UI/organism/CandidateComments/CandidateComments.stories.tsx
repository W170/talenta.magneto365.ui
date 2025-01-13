import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { IComment } from '@components/UI/molecules'
import { CandidateComments } from './CandidateComments.component'
import { candidateCommentsProps } from '@constants/stories/candidateProfile.constants'
import { ICandidateComments, ICandidateCommentsSection } from './CandidateComments.interface'

const ControlledComponent: React.FC<ICandidateComments> = ({ value = [], ...args }) => {
  const [comments, setComments] = React.useState<ICandidateCommentsSection[]>(value)

  const handleOnAdd = React.useCallback((comment: string) => {
    const newComment: IComment = {
      name: 'Sebastián',
      date: new Date().toLocaleString('es-ES', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      }),
      description: comment
    }

    setComments((prevComments) =>
      prevComments.map((group) => {
        if (group.title === 'Comentarios generales') {
          return {
            ...group,
            children: group.children?.map((child, index) => {
              if (index === 0) {
                return {
                  ...child,
                  children: [newComment, ...(child.children || [])]
                }
              }
              return child
            })
          }
        }
        return group
      })
    )
  }, [])

  return <CandidateComments {...args} value={comments} onAdd={handleOnAdd} />
}

const meta: Meta<typeof CandidateComments> = {
  title: 'Organism/Candidate Comments',
  component: CandidateComments,
  args: { ...candidateCommentsProps },
  render: (args) => <ControlledComponent {...args} />
}

export default meta

type Story = StoryObj<typeof CandidateComments>

export const Default: Story = {}
