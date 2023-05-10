import { ProfileAdd, LoginCurve, Home2, SearchNormal1, CloseCircle, HambergerMenu } from 'iconsax-react'
import { LogoutHeader } from './LogoutHeader.component'
import { Meta, StoryObj } from '@storybook/react'
import { IBreadcrumbs } from '../../molecules/Breadcrumbs/Breadcrumbs.interface'
import { ILinkProps } from '../../atoms/Link'
import { IMainButton } from '../../atoms/MainButton'
import { ISearchbar } from '../../molecules/Searchbar'
import { ITab } from '../../molecules/Tab'
import { ILogoComponent } from '../../atoms/Logo/Logo.interface'
import { IconProps } from '../../atoms/Icon'

// Breadcrums Props
const BreadcrumbProps: IBreadcrumbs = {
  urlParam: 'todos-los-empleos',
  IconProps: {
    Icon: Home2,
    hover: true,
    size: 16,
    color: '#a3a3b5'
  },
  breadcrumbItems: [{ label: 'Todos los empleos', url: '#', slug: 'todos-los-empleos' }]
}

//Link Props
const LinkProps: ILinkProps = {
  type: 'button',
  label: 'Iniciar Sesion',
  href: '#',
  Icon: LoginCurve,
  colorHover: '#14141C',
  color: '#14141C'
}

//Main button props
const MainButtonProps: IMainButton = {
  buttonText: 'Crear hoja de vida',
  textColor: '#090467',
  btnColor: '#70ECD4',
  childrenProps: {
    Icon: ProfileAdd,
    hover: true,
    color: '#090467 '
  }
}

//Searchbar props
const SearchbarProps: ISearchbar = {
  placeholder: 'Busca empleos por cargo o profesion',
  onSearch: () => {
    // Add your search logic here
  },
  searchProps: {
    buttonText: '',
    childrenProps: {
      Icon: SearchNormal1,
      hover: false,
      color: '#000096',
      size: 18
    }
  },
  removeProps: {
    buttonText: '',
    childrenProps: {
      Icon: CloseCircle,
      hover: false,
      color: '#14141C',
      size: 18,
      variant: 'Linear'
    }
  }
}

//Logo Props
const LogoProps: ILogoComponent = {
  logo: 'https://www.magneto365.com/wp-content/uploads/2022/09/Logo-magneto-v3.png',
  isoType:
    'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fstatic.magneto365.com%2Fco%2F_next%2Fstatic%2Fmedia%2Ffavicon-magneto.b463e35d.png&w=32&q=75',
  alt: 'Logo Magneto',
  logoSize: 95
}

//Icon Props
const iconProps: IconProps = {
  Icon: HambergerMenu,
  hover: false
}

//Tab Props
const TabProps: ITab = {
  listButton: [
    {
      link: '#',
      text: 'Busco empleo',
      size: '11px',
      color: '#FFF',
      textColor: '#000',
      textWeight: '900',
      boxShadow: true
    },
    { link: '#', text: 'Soy empresa', size: '11px', color: '#F4F4FA', textColor: '#A3A3B5' }
  ]
}

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/LogoutHeader',
  component: LogoutHeader,
  args: {
    tabProps: TabProps,
    iconProps: iconProps,
    logoProps: LogoProps,
    searchbarProps: SearchbarProps,
    mainButtonProps: MainButtonProps,
    linkProps: LinkProps,
    breadcrumbsProps: BreadcrumbProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
