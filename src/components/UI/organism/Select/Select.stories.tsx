import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select.component'
import { SelectListCheck } from './children/SelectListCheck/SelectListCheck.component'
import SelectDrawer from './children/SelectDrawer/SelectDrawer'
import { ISelect, IValueSelect } from './Select.interface'
import { SelectClickout } from './children/SelectClickout/index'
import { disabiltiesOptions } from '../../../../constants/stories/Select2Multiple.constants'

const CustomSelect = (props: Omit<ISelect<string>, 'value' | 'options'>) => {
  const [value, setValue] = useState<IValueSelect<string>[]>([])

  return <Select value={value} onChange={setValue} options={disabiltiesOptions} {...props} />
}

const meta: Meta<React.FC<ISelect<string>>> = {
  title: 'Organism/Select',
  component: Select,
  args: {
    options: [],
    value: []
  }
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder de prueba'
  }
}

export const CheckList: Story = {
  render: () => {
    return (
      <CustomSelect placeholder="Placeholder de prueba">
        <SelectClickout>
          <SelectListCheck className="test" />
        </SelectClickout>
      </CustomSelect>
    )
  }
}

export const Mobile: Story = {
  render: () => {
    return (
      <CustomSelect inputReadonly placeholder="Selecciona un opción">
        <SelectDrawer>
          <SelectListCheck className="test" />
        </SelectDrawer>
      </CustomSelect>
    )
  }
}
