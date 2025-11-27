import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../Typography'
import { Field } from './Field.component'
import { IconItem } from '../Icon'
import { Add, ArrowLeft2, SearchIcon, Trash } from '../../../../constants/icons.constants'

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

type UserType = {
  id: string | number
  name: string | undefined
}

const USER_LIST: UserType[] = [
  { id: 1, name: 'Juan' },
  { id: 2, name: 'Pedro' },
  { id: 3, name: 'Maria' },
  { id: 4, name: 'Jose' },
  { id: 5, name: 'Luis' },
  { id: 6, name: 'Ana' },
  { id: 7, name: 'Francisco' },
  { id: 8, name: 'John' },
  { id: 9, name: 'Melissa ' }
]

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
      <Field.Input id="name" placeholder="Name placeholder" autoComplete="off" />
    </Field>
  )
}

type PrefixAndSuffix = StoryObj<typeof Field.Input>

export const PrefixAndSuffix: PrefixAndSuffix = {
  name: 'Prefix and suffix',
  render: () => (
    <Field>
      <Field.Label htmlFor="name-icon">
        <Typography.Text weight="normal" size="md-2" color="grey-800">
          Name
        </Typography.Text>
      </Field.Label>
      <Field.Input
        id="name-icon"
        type="text"
        autoComplete="off"
        placeholder="Write something"
        prefix={<IconItem icon={Add} />}
        suffix={<button onClick={() => console.log('search')}>Search</button>}
      />
    </Field>
  )
}

type ListWithSingleSelection = StoryObj<typeof Field.List>

const ListSingleComponent = () => {
  const [value, setValue] = useState<UserType>()

  return (
    <Field>
      <Field.Label htmlFor="name-list-single">
        <Typography.Text weight="normal" size="md-2" color="grey-800">
          Name
        </Typography.Text>
      </Field.Label>
      <Field.List.Wrapper>
        <Field.Input
          type="button"
          id="name-list-single"
          placeholder="Select an user"
          value={value?.name}
          suffix={({ opened }) => (
            <div style={{ transition: 'all 0.2s ease-in-out', transform: opened ? 'rotate(90deg)' : 'rotate(-90deg)' }}>
              <IconItem size={16} icon={ArrowLeft2} />
            </div>
          )}
        />
        <Field.List value={value} onChange={setValue}>
          <Field.List.Body>
            {USER_LIST.map((user) => (
              <Field.List.Item key={user.id} value={user}>
                <Typography.Text weight="normal" size="lg">
                  {user.name}
                </Typography.Text>
              </Field.List.Item>
            ))}
          </Field.List.Body>
        </Field.List>
      </Field.List.Wrapper>
    </Field>
  )
}

export const ListSingle: ListWithSingleSelection = {
  name: 'List with single selection',
  render: () => <ListSingleComponent />
}

type ListWithMultipleSelectionStory = StoryObj<typeof Field.List>

const ListMultipleComponent = () => {
  const [value, setValue] = useState<UserType[] | undefined>([])

  return (
    <Field>
      <Field.Label htmlFor="name-list-single">
        <Typography.Text weight="normal" size="md-2" color="grey-800">
          Name
        </Typography.Text>
      </Field.Label>
      <Field.List.Wrapper>
        <Field.Input
          type="button"
          id="name-list-single"
          placeholder="Select an user"
          value={value?.map((item) => item.name).join(', ')}
          suffix={({ opened }) => (
            <div style={{ transition: 'all 0.2s ease-in-out', transform: opened ? 'rotate(90deg)' : 'rotate(-90deg)' }}>
              <IconItem size={16} icon={ArrowLeft2} />
            </div>
          )}
        />
        <Field.List multiple value={value} onChange={setValue}>
          <Field.List.Body>
            {USER_LIST.map((user) => (
              <Field.List.Item key={user.id} value={user}>
                <Typography.Text weight="normal" size="lg">
                  {user.name}
                </Typography.Text>
              </Field.List.Item>
            ))}
          </Field.List.Body>
        </Field.List>
      </Field.List.Wrapper>
    </Field>
  )
}

export const ListMultiple: ListWithMultipleSelectionStory = {
  name: 'List with multiple selection',
  render: () => <ListMultipleComponent />
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
      <Field.Area id="name-area" placeholder="Write something" autoComplete="off" />
    </Field>
  )
}

type SearchStory = StoryObj<typeof Field.Input>

const SearchComponent = () => {
  const [filteredUsers, setFilteredUsers] = useState<UserType[] | undefined>(USER_LIST)
  const [selectedUsers, setSelectedUsers] = useState<UserType[] | undefined>()
  const [value, setValue] = useState('')

  const handleOnSearchUsers = (term: string) => {
    setValue(term)

    if (!term) {
      setFilteredUsers(USER_LIST)
      return
    }

    const filtered = USER_LIST.filter((user) => user.name?.toLowerCase().includes(term.toLowerCase()))
    setFilteredUsers(filtered)
  }

  return (
    <Field>
      <Typography.Paragraph size="md-2" color="grey-800" weight="bold" style={{ marginBottom: '10px' }}>
        {`Selected users: `}
        {selectedUsers?.map((user, index) => (
          <Typography.Text key={user.id} weight="normal" size="md-2">
            {`${user.name} ${selectedUsers.length > 1 && index !== selectedUsers.length - 1 ? '- ' : ''}`}
          </Typography.Text>
        ))}
      </Typography.Paragraph>
      <Field.Label htmlFor="name-trigger">
        <Typography.Text weight="normal" size="md-2" color="grey-800">
          Name
        </Typography.Text>
      </Field.Label>
      <Field.List.Wrapper>
        <Field.Input
          id="name-trigger"
          placeholder="Write something"
          value={value}
          onChange={(e) => handleOnSearchUsers(e.target.value)}
          onFocus={(e) => e.target.select()}
          autoComplete="off"
          suffix={({ inputRef }) => (
            <React.Fragment>
              {value && (
                <button
                  onClick={() => handleOnSearchUsers('')}
                  style={{
                    border: 'none',
                    background: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <IconItem size={16} icon={Trash} />
                </button>
              )}
              <button
                onClick={() => inputRef?.current?.focus()}
                style={{
                  border: 'none',
                  background: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <IconItem size={16} icon={SearchIcon} />
              </button>
            </React.Fragment>
          )}
        />
        <Field.List multiple value={selectedUsers} onChange={setSelectedUsers}>
          {({ isMobile }) => (
            <React.Fragment>
              {isMobile && (
                <Field.Input
                  id="name-trigger"
                  placeholder="Write something"
                  value={value}
                  onChange={(e) => handleOnSearchUsers(e.target.value)}
                  onFocus={(e) => e.target.select()}
                  autoComplete="off"
                  autoFocus
                  suffix={
                    value && (
                      <button
                        onClick={() => handleOnSearchUsers('')}
                        style={{
                          border: 'none',
                          background: 'none',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <IconItem size={16} icon={Trash} />
                      </button>
                    )
                  }
                />
              )}
              <Field.List.Body>
                {filteredUsers?.map((user) => (
                  <Field.List.Item key={user.id} value={user}>
                    <Typography.Text weight="normal" size="lg">
                      {user.name}
                    </Typography.Text>
                  </Field.List.Item>
                ))}
              </Field.List.Body>
            </React.Fragment>
          )}
        </Field.List>
      </Field.List.Wrapper>
    </Field>
  )
}

export const Search: SearchStory = {
  render: () => <SearchComponent />
}
