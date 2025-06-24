import { UserRoundedGray } from '@constants/icons.constants'
import { generateID } from '@utils/generateID/generateID.util'

export const SELECT2_PROPS = {
  className: 'className',
  onChange: (value: string) => console.log(value),
  placeholder: 'Probando',
  isMultiple: false,
  haveTags: true,
  limitSelections: 3,
  currentFields: [{ id: generateID(), name: 'Medellin' }],
  icon: UserRoundedGray,
  selectList: [
    { id: generateID(), name: 'México' },
    { id: generateID(), name: 'Bogota' },
    { id: generateID(), name: 'Cucuta' },
    { id: generateID(), name: 'Barú' },
    { id: generateID(), name: 'Pasto' },
    { id: generateID(), name: 'Cartagena' },
    { id: generateID(), name: 'Neiva' },
    { id: generateID(), name: 'Barranquilla' }
  ]
}
