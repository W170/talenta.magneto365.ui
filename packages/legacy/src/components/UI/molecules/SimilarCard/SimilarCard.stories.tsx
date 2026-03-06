import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SimilarCard } from '.'
import styles from './SimilarCard.module.scss'
import { customTextCardType, similarCardData } from '@constants/stories/similarCard.constants'

const { Icon, Logo, Text } = SimilarCard

const meta: Meta<typeof SimilarCard> = {
  title: 'Molecules/Similar Card',
  component: SimilarCard,
  args: {
    jobUrlSlug: similarCardData.jobUrlSlug,
    title: similarCardData.title,
    children: (
      <>
        <Logo
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU'}
        />
        <Text className={styles['similar-card__text']} customText={customTextCardType} />
        <Icon />
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof SimilarCard>

export const Default: Story = {}
