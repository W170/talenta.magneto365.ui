import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { AlertJobStatus } from './AlertJobStatus.component'
import { SearchItem } from '@components/UI/atoms'
import { ArrowRightWhite } from '@constants/icons.constants'
import { customText, simpleCustomText } from '@constants/stories/alertJob.constants'
import styles from './AlertJobStatus.module.scss'

const { Container, Text, Icon } = AlertJobStatus

const meta: Meta<typeof AlertJobStatus> = {
  title: 'Molecules/Alert Job Status',
  component: AlertJobStatus,
  args: {
    children: (
      <>
        <Container>
          <Icon />
          <Text customText={customText} />
        </Container>
        <SearchItem
          icon={ArrowRightWhite}
          url={'#'}
          tag={'Crear alerta'}
          className={styles['alert-job__search-item']}
        />
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof AlertJobStatus>

export const Default: Story = {}

export const WithoutAnchorText: Story = {
  args: {
    children: (
      <>
        <Container>
          <Icon />
          <Text customText={simpleCustomText} />
        </Container>
      </>
    )
  }
}
