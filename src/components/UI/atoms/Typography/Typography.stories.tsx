import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography.component'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Typography.Text>Text</Typography.Text>
      <Typography.Text code>Code</Typography.Text>
      <Typography.Text delete>Delete</Typography.Text>
      <Typography.Text italic>Italic</Typography.Text>
      <Typography.Text keyboard>Keyboard</Typography.Text>
      <Typography.Text mark>Mark</Typography.Text>
      <Typography.Text strong>Strong</Typography.Text>
      <Typography.Text underline>Underline</Typography.Text>
    </div>
  )
}

export const Title: Story = {
  render: () => (
    <React.Fragment>
      <Typography.Title level={1} size="xxl">
        Title
      </Typography.Title>
      <Typography.Title level={2} size="xl">
        Title
      </Typography.Title>
      <Typography.Title level={3} size="lg">
        Title
      </Typography.Title>
      <Typography.Title level={4} size="md">
        Title
      </Typography.Title>
      <Typography.Title level={5} size="sm">
        Title
      </Typography.Title>
      <Typography.Title level={6} size="xs">
        Title
      </Typography.Title>
    </React.Fragment>
  )
}

export const Paragraph: Story = {
  render: () => (
    <React.Fragment>
      <Typography.Paragraph size="md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero dolores quos, quod perspiciatis magnam
        corrupti vel maiores esse fugit quaerat aperiam libero molestias, deserunt delectus, fugiat hic. Obcaecati,
        provident?
      </Typography.Paragraph>
    </React.Fragment>
  )
}
