import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { AlertJobStatus } from './AlertJobStatus.component'
import { IconItem, SearchItem } from '@components/UI/atoms'
import { Warning3D } from '@constants/icons.constants'
import { ArrowRightWhite } from '@constants/icons.constants'
import { customText } from '@constants/stories/alertJob.constants'
import styles from './AlertJobStatus.module.scss'

const { Container, Text } = AlertJobStatus

const meta: Meta<typeof AlertJobStatus> = {
  title: 'Molecules/Alert Job Status',
  component: AlertJobStatus,
  args: {
    children: (
      <>
        <Container>
          <IconItem icon={Warning3D} size={34} />
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
          <IconItem icon={Warning3D} size={34} />
          <Text text="Esta vacante no recibe más aplicaciones." />
        </Container>
      </>
    )
  }
}
