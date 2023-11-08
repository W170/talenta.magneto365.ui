import React, { useState } from 'react'
import { IconItem } from '@components/UI/atoms'
import { ArrowDown2, Close, SearchIcon } from '@constants/icons.constants'

const listOptionsDemo = [
  'Administracion y oficina',
  'Comunicacion y periodosmi',
  'Deporte y recreacion',
  'Barrismo',
  'Tiktokers',
  'Barra brava',
  'Hincha del DIMinuto',
  'hola'
]

const InputSelect = () => {
  const numberOfSelectable = 3
  const [inputValue, setInputValue] = useState('')
  const [openOptions, setOpenOptions] = useState(false)
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [listOptions, setListOptions] = useState<string[]>(listOptionsDemo)

  const addValueToArray = (value: string) => {
    const valueExists = selectedValues.some((currentValues) => currentValues === value)
    if (valueExists) return
    if (selectedValues.length === numberOfSelectable) return
    setSelectedValues((prevValues) => [...prevValues, value])
  }

  const removeValueToArray = (value: string) => {
    const filterOptions = selectedValues.filter((options) => options !== value)
    setSelectedValues(filterOptions)
  }

  const filterIntoToArray = () => {
    const formatValue = inputValue.toLowerCase().replace(' ', '-')
    const filterOptions = listOptions
      .map((items) => items.toLowerCase().replace(' ', '-'))
      .filter((options) => options === formatValue)

    const filterOptionsFormat = filterOptions.map((items) => items.replace('-', ' '))
    setListOptions(filterOptionsFormat)
  }

  return (
    <div style={{ width: '100%' }}>
      {openOptions ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: '100%' }}>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Busca un sector laboral"
              style={{ flex: 1 }}
              type="text"
              name="select"
            />
            <button onClick={filterIntoToArray} type="submit">
              <IconItem icon={SearchIcon} alt="search-icon" />
            </button>
            <button type="button" onClick={() => setOpenOptions(false)}>
              <IconItem icon={Close} alt="close-icon" />
            </button>
          </div>
          <div>
            {selectedValues.map((itemSelected) => (
              <button
                style={{ display: 'flex', justifyContent: 'space-between' }}
                onClick={() => removeValueToArray(itemSelected)}
                key={itemSelected}
              >
                {itemSelected}
                <IconItem icon={Close} alt="close icon" />
              </button>
            ))}
          </div>
          {listOptions.map((option) => (
            <button style={{ textTransform: 'capitalize' }} onClick={() => addValueToArray(option)} key={option + 1}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpenOptions(true)}
          style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
        >
          Selecciona hasta 3 sectores laborales
          <IconItem icon={ArrowDown2} alt="arrow-icon" />
        </button>
      )}
    </div>
  )
}

export default InputSelect
