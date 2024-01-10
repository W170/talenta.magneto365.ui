import { IMainButton, MainButton } from '@components/UI/atoms'
import { IToogleSearch, ToggleSearch } from '@components/UI/molecules'
import { IHeaderChilds } from '@components/UI/page/OvedrivePage/children/headerSection/HeaderSection.interface'
import { ArchiveBook, SearchStatus } from '@constants/icons.constants'
import { removePropsButton, searchPropsButton } from './headers.constants'

const notOpenPropsButton: IMainButton = {
  buttonType: 'button' as const,
  buttonSize: 'medium',
  buttonText: 'Buscar libros',
  iconProps: {
    icon: SearchStatus,
    hover: false,
    color: '#14141C',
    size: 18
  }
}

export const toggleSearchProps: IToogleSearch = {
  placeholder: 'Buscar libros',
  searchButtonProps: searchPropsButton,
  removeButtonProps: removePropsButton,
  onSearch: () => console.log('hola'),
  notOpenPropsButton,
  termValue: ''
}

export const headerChilds: IHeaderChilds = {
  firstSection: [
    {
      component: ToggleSearch,
      props: {
        ...toggleSearchProps
      }
    }
  ],
  secondSection: [
    {
      component: MainButton,
      props: {
        buttonType: 'button' as const,
        buttonSize: 'medium',
        buttonText: 'Prestamos',
        iconProps: {
          icon: ArchiveBook,
          hover: false,
          color: '#14141C',
          size: 18
        },
        className: 'borrow-component',
        onClick: () => console.log('hopla')
      }
    }
  ]
}
