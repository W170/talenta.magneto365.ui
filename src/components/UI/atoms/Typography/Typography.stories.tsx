import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography.component'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Atom UI component of Typography. It includes titles, paragraphs, texts and links.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default text element with all optional props.'
      }
    }
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Typography.Paragraph weight={400} size={16} color="black" className="className">
        Text
      </Typography.Paragraph>
      <Typography.Paragraph code>Code</Typography.Paragraph>
      <Typography.Paragraph delete>Delete</Typography.Paragraph>
      <Typography.Paragraph italic>Italic</Typography.Paragraph>
      <Typography.Paragraph keyboard>Keyboard</Typography.Paragraph>
      <Typography.Paragraph mark>Mark</Typography.Paragraph>
      <Typography.Paragraph strong>Strong</Typography.Paragraph>
      <Typography.Paragraph underline>Underline</Typography.Paragraph>
    </div>
  )
}

export const Title: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Title element. It`s rendered as a h tag depending on the level. The default level is 2.'
      }
    }
  },
  render: () => (
    <React.Fragment>
      <Typography.Title
        level={1}
        strong
        size="xl-2"
        className="className"
        style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
      >
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
  parameters: {
    docs: {
      description: {
        story: 'Paragraph element. It`s rendered as a p tag.'
      }
    }
  },
  render: () => (
    <React.Fragment>
      <Typography.Paragraph style={{ marginBottom: '5px' }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero dolores quos, quod perspiciatis magnam
        corrupti vel maiores esse fugit quaerat aperiam libero molestias, deserunt delectus, fugiat hic. Obcaecati,
        provident?
      </Typography.Paragraph>
      <div style={{ maxWidth: '300px' }}>
        <Typography.Paragraph ellipsis style={{ marginBottom: '5px' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero dolores quos, quod perspiciatis magnam
          corrupti vel maiores esse fugit quaerat aperiam libero molestias, deserunt delectus, fugiat hic. Obcaecati,
          provident?
        </Typography.Paragraph>
        <Typography.Paragraph ellipsis={{ rows: 2 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero dolores quos, quod perspiciatis magnam
          corrupti vel maiores esse fugit quaerat aperiam libero molestias, deserunt delectus, fugiat hic. Obcaecati,
          provident?
        </Typography.Paragraph>
      </div>
    </React.Fragment>
  )
}

export const Text: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Inline text element. It´s rendered as a span tag.'
      }
    }
  },
  render: () => (
    <React.Fragment>
      <Typography.Text size="md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography.Text>
      <Typography.Text keyboard>Example</Typography.Text>
      <Typography.Text weight="bold">Quisquam, quae.</Typography.Text>
    </React.Fragment>
  )
}

export const Link: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Inline link text element. It`s rendered as an anchor tag.'
      }
    }
  },
  render: () => (
    <React.Fragment>
      <Typography.Link underline href="#" target="_blank" rel="noopener noreferrer">
        Link
      </Typography.Link>
    </React.Fragment>
  )
}
