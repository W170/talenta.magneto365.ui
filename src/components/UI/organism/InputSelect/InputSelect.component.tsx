import React, { useState, ChangeEvent, useEffect } from 'react'
import { IconItem } from '@components/UI/atoms'
import { ArrowDown2, Close, SearchIcon } from '@constants/icons.constants'
//TODO: PENDONG FOR WORKING
interface IListOption {
  id: number
  name: string
}

const listOptionsDemo: IListOption[] = [
  { id: 1, name: 'Administración y oficina' },
  { id: 16, name: 'Bodega, logística y transporte' },
  { id: 26, name: 'Call center, telemercadeo, BPO y afines' },
  { id: 27, name: 'Compras y comercio exterior' },
  { id: 31, name: 'Comunicación y Periodismo' },
  { id: 21, name: 'Construcción e infraestructura' },
  { id: 4, name: 'Contabilidad, finanzas, impuestos y afines' },
  { id: 5, name: 'Deporte y recreación' },
  { id: 6, name: 'Derecho, Asesoría y afines' },
  { id: 28, name: 'Dirección y Gerencia' },
  { id: 7, name: 'Diseño, arquitectura, artes gráficas y afines' },
  { id: 22, name: 'Docencia, educación, licenciaturas y afines' },
  { id: 8, name: 'Economía, estadística, matemáticas y afines' },
  { id: 9, name: 'Gastronomía, bebidas/alimentos y restaurantes' },
  { id: 10, name: 'Hotelería y turismo' },
  { id: 11, name: 'Idiomas y traducción' },
  { id: 12, name: 'Industria de la aviación y afines' },
  { id: 14, name: 'Ingenierías' },
  { id: 15, name: 'Inversiones y mercado bursátil' },
  { id: 29, name: 'Investigación y Calidad' },
  { id: 30, name: 'Mantenimiento y Reparaciones' },
  { id: 17, name: 'Mecánica y sector automotriz' },
  { id: 18, name: 'Medicina, sector de la salud y Ciencias' },
  { id: 3, name: 'Mercadeo y Publicidad' },
  { id: 19, name: 'Otras' },
  { id: 20, name: 'Política, ONG, sector Gobierno y fundaciones' },
  { id: 13, name: 'Producción, Operarios y Manufactura' },
  { id: 2, name: 'Recursos Humanos' },
  { id: 24, name: 'Servicio al cliente y afines' },
  { id: 32, name: 'Servicios generales, Aseo y Seguridad' },
  { id: 23, name: 'Software, informática y telecomunicaciones' },
  { id: 34, name: 'Transportador de Energía' },
  { id: 25, name: 'Ventas' },
  { id: 33, name: 'Zoología, Veterinario y sector Agroindustrial' }
]

const InputSelect = () => {
  const numberOfSelectable = 3
  const [inputValue, setInputValue] = useState('')
  const [openOptions, setOpenOptions] = useState(false)
  const [selectedValues, setSelectedValues] = useState<IListOption[]>([])
  const [listOptions, setListOptions] = useState<IListOption[]>(listOptionsDemo)

  useEffect(() => {
    if (selectedValues.length === numberOfSelectable) {
      setOpenOptions(false)
    }
  }, [selectedValues.length])

  const addValueToArray = (value: IListOption) => {
    const valueExists = selectedValues.some((currentValues) => currentValues.id === value.id)
    if (valueExists) return
    if (selectedValues.length === numberOfSelectable) return
    setSelectedValues((prevValues) => [...prevValues, value])
  }

  const removeValueToArray = (value: IListOption) => {
    const filterOptions = selectedValues.filter((options) => options.id !== value.id)
    setSelectedValues(filterOptions)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
    const filtered = listOptionsDemo.filter((option) =>
      option.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
    setListOptions(filtered)
  }

  const clearFilter = () => {
    setListOptions(listOptionsDemo)
    setInputValue('')
  }

  return (
    <div style={{ width: '100%' }}>
      {openOptions ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: '100%' }}>
            <input
              placeholder="Busca un sector laboral"
              style={{ flex: 1 }}
              value={inputValue}
              onChange={handleInputChange}
            />
            <IconItem icon={SearchIcon} alt="search-icon" />
            <button onClick={clearFilter}>
              <IconItem icon={Close} alt="search-icon" />
            </button>
          </div>

          <div style={{ display: 'flex' }}>
            {selectedValues.map((itemSelected) => (
              <button
                style={{ display: 'flex', justifyContent: 'space-between' }}
                onClick={() => removeValueToArray(itemSelected)}
                key={itemSelected.id}
              >
                {itemSelected.name}
                <IconItem icon={Close} alt="close icon" />
              </button>
            ))}
          </div>
          {listOptions.map((value) => (
            <button
              title={value.name}
              style={{ textTransform: 'capitalize' }}
              onClick={() => addValueToArray(value)}
              key={value.id}
            >
              {value.name}
            </button>
          ))}
        </div>
      ) : (
        <>
          {selectedValues.length < numberOfSelectable && (
            <button
              type="button"
              onClick={() => setOpenOptions(true)}
              style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
            >
              Selecciona hasta 3 sectores laborales
              <IconItem icon={ArrowDown2} alt="arrow-icon" />
            </button>
          )}

          <div>
            {selectedValues.map((itemSelected) => (
              <button
                style={{ display: 'flex', justifyContent: 'space-between' }}
                onClick={() => removeValueToArray(itemSelected)}
                key={itemSelected.id}
              >
                {itemSelected.name}
                <IconItem icon={Close} alt="close icon" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default InputSelect
