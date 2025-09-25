import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../Typography'
import { Field } from './Field.component'
import { IconItem } from '../Icon'
import { Add } from '../../../../constants/icons.constants'

const meta: Meta<typeof Field> = {
  title: 'Atoms/Field',
  component: Field,
  render: () => (
    <Field>
      <Field.Input placeholder="Write something" />
    </Field>
  )
}

export default meta

type Story = StoryObj<typeof Field>

export const Default: Story = {}

type LabelStory = StoryObj<typeof Field.Label>

export const Label: LabelStory = {
  render: () => (
    <Field>
      <Field.Label htmlFor="name">
        <Typography.Text weight="normal" size="md-2" color="grey-800">
          Name
        </Typography.Text>
      </Field.Label>
      <Field.Input id="name" placeholder="Name placeholder" />
    </Field>
  )
}

type PrefixAndSuffix = StoryObj<typeof Field.Input>

export const Icon: PrefixAndSuffix = {
  storyName: 'Prefix and suffix',
  render: () => (
    <Field>
      <Field.Wrapper>
        <Field.Label htmlFor="name-icon">
          <Typography.Text weight="normal" size="md-2" color="grey-800">
            Name
          </Typography.Text>
        </Field.Label>
        <Field.Input
          id="name-icon"
          placeholder="Write something"
          prefix={<IconItem icon={Add} />}
          suffix={<button>Search</button>}
        />
      </Field.Wrapper>
    </Field>
  )
}

type HintStory = StoryObj<typeof Field.Hint>

export const Hint: HintStory = {
  render: () => (
    <Field>
      <Field.Label htmlFor="name-hint">
        <Typography.Text weight="normal" size="md-2" color="grey-800">
          Name
        </Typography.Text>
      </Field.Label>
      <Field.Input error placeholder="Write something" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Field.Hint type="error">
          <Typography.Text weight="normal" size="md-2">
            You must write something
          </Typography.Text>
        </Field.Hint>
        <Field.Hint type="hint">
          <Typography.Text weight="normal" size="md">
            10 / 20
          </Typography.Text>
        </Field.Hint>
      </div>
    </Field>
  )
}

type ListWithSingleSelection = StoryObj<typeof Field.List>

export const ListSingle: ListWithSingleSelection = {
  storyName: 'List with single selection',
  render: () => (
    <Field>
      <Field.Label htmlFor="name-list-single">
        <Typography.Text weight="normal" size="md-2" color="grey-800">
          Name
        </Typography.Text>
      </Field.Label>
      <Field.Wrapper>
        <Field.Input id="name-list-single" placeholder="Write something" />
        <Field.List defaultValue={{ id: 2, name: 'Pedro' }} onChange={(value) => console.log(value)}>
          {({ isMobile }) => (
            <React.Fragment>
              {isMobile && <Field.Input autoFocus id="name-list-single-mobile" placeholder="Write something" />}
              <Field.List.Item value={{ id: 1, name: 'Juan' }}>
                <Typography.Text weight="normal" size="lg">
                  You must write something
                </Typography.Text>
              </Field.List.Item>
              <Field.List.Item value={{ id: 2, name: 'Pedro' }}>
                <Typography.Text weight="normal" size="lg">
                  You must write something
                </Typography.Text>
              </Field.List.Item>
              <Field.List.Item value={{ id: 3, name: 'Maria' }}>
                <Typography.Text weight="normal" size="lg">
                  You must write something
                </Typography.Text>
              </Field.List.Item>
            </React.Fragment>
          )}
        </Field.List>
      </Field.Wrapper>
    </Field>
  )
}

type ListWithMultipleSelectionStory = StoryObj<typeof Field.List>

export const ListMultiple: ListWithMultipleSelectionStory = {
  storyName: 'List with multiple selection',
  render: () => (
    <Field>
      <Field.Label htmlFor="name-list-multiple">
        <Typography.Text weight="normal" size="md-2" color="grey-800">
          Name
        </Typography.Text>
      </Field.Label>
      <Field.Wrapper>
        <Field.Input id="name-list-multiple" placeholder="Write something" />
        <Field.List defaultValue={[{ id: 2, name: 'Pedro' }]} multiple onChange={(values) => console.log(values)}>
          {({ isMobile }) => (
            <React.Fragment>
              {isMobile && <Field.Input autoFocus id="name-list-multiple-mobile" placeholder="Write something" />}
              <Field.List.Item value={{ id: 1, name: 'Juan' }}>
                <Typography.Text weight="normal" size="lg">
                  You must write something
                </Typography.Text>
              </Field.List.Item>
              <Field.List.Item value={{ id: 2, name: 'Pedro' }}>
                <Typography.Text weight="normal" size="lg">
                  You must write something
                </Typography.Text>
              </Field.List.Item>
              <Field.List.Item value={{ id: 3, name: 'Maria' }}>
                <Typography.Text weight="normal" size="lg">
                  You must write something
                </Typography.Text>
              </Field.List.Item>
            </React.Fragment>
          )}
        </Field.List>
      </Field.Wrapper>
    </Field>
  )
}

type AreaStory = StoryObj<typeof Field.Area>

export const Area: AreaStory = {
  render: () => (
    <Field>
      <Field.Label htmlFor="name-area">
        <Typography.Text weight="normal" size="md-2" color="grey-800">
          Name
        </Typography.Text>
      </Field.Label>
      <Field.Area id="name-area" placeholder="Write something" />
    </Field>
  )
}

type ButtonStory = StoryObj<typeof Field.Input>

type UserType = {
  id: number | undefined
  name: string | undefined
}

const ButtonComponent = () => {
  const [data, setData] = useState<UserType>({ id: undefined, name: undefined })

  return (
    <Field>
      <Field.Label htmlFor="name-trigger">
        <Typography.Text weight="normal" size="md-2" color="grey-800">
          Name
        </Typography.Text>
      </Field.Label>
      <Field.Wrapper>
        <Field.Input id="name-trigger" placeholder="Write something" value={data.name} type="button" />
        <Field.List onChange={setData}>
          <Field.List.Item value={{ id: 1, name: 'Juan' }}>
            <Typography.Text weight="normal" size="lg">
              You must write something
            </Typography.Text>
          </Field.List.Item>
          <Field.List.Item value={{ id: 2, name: 'Pedro' }}>
            <Typography.Text weight="normal" size="lg">
              You must write something
            </Typography.Text>
          </Field.List.Item>
          <Field.List.Item value={{ id: 3, name: 'Maria' }}>
            <Typography.Text weight="normal" size="lg">
              You must write something
            </Typography.Text>
          </Field.List.Item>
        </Field.List>
      </Field.Wrapper>
    </Field>
  )
}

export const Trigger: ButtonStory = {
  render: () => <ButtonComponent />
}

type GroupStory = StoryObj<typeof Field.Group>

export const Group: GroupStory = {
  render: () => (
    <Field.Group>
      <Field>
        <Field.Label htmlFor="country-code">
          <Typography.Text weight="normal" size="md-2" color="grey-800">
            Country code
          </Typography.Text>
        </Field.Label>
        <Field.Wrapper>
          <Field.Input error type="button" value="palabra texto" id="country-code" placeholder="Write something" />
          <Field.List>
            <Field.List.Item value={{ id: 1, name: 'Juan' }}>
              <Typography.Text weight="normal" size="lg">
                Colombia
              </Typography.Text>
            </Field.List.Item>
            <Field.List.Item value={{ id: 2, name: 'Pedro' }}>
              <Typography.Text weight="normal" size="lg">
                Mexico
              </Typography.Text>
            </Field.List.Item>
            <Field.List.Item value={{ id: 3, name: 'Maria' }}>
              <Typography.Text weight="normal" size="lg">
                Panamá
              </Typography.Text>
            </Field.List.Item>
          </Field.List>
        </Field.Wrapper>
      </Field>

      <Field>
        <Field.Label htmlFor="prefix-phone-number">
          <Typography.Text weight="normal" size="md-2" color="grey-800">
            Prefix
          </Typography.Text>
        </Field.Label>
        <Field.Wrapper nonRelative>
          <Field.Input id="prefix-phone-number" placeholder="Write your prefix phone number" type="text" />
          <Field.List defaultValue={[{ id: 2, name: 'Pedro' }]} multiple onChange={(values) => console.log(values)}>
            {({ isMobile }) => (
              <React.Fragment>
                {isMobile && <Field.Input id="name-list-mobile" placeholder="Write something" />}
                <Field.List.Item value={{ id: 1, name: 'Juan' }}>
                  <Typography.Text weight="normal" size="lg">
                    You must write something
                  </Typography.Text>
                </Field.List.Item>
                <Field.List.Item value={{ id: 2, name: 'Pedro' }}>
                  <Typography.Text weight="normal" size="lg">
                    You must write something
                  </Typography.Text>
                </Field.List.Item>
                <Field.List.Item value={{ id: 3, name: 'Maria' }}>
                  <Typography.Text weight="normal" size="lg">
                    You must write something
                  </Typography.Text>
                </Field.List.Item>
              </React.Fragment>
            )}
          </Field.List>
        </Field.Wrapper>
      </Field>

      <Field>
        <Field.Label htmlFor="phone-number">
          <Typography.Text weight="normal" size="md-2" color="grey-800">
            Phone number
          </Typography.Text>
        </Field.Label>
        <Field.Wrapper>
          <Field.Input id="phone-number" placeholder="Write your phone number" type="number" />
        </Field.Wrapper>
      </Field>
    </Field.Group>
  )
}
