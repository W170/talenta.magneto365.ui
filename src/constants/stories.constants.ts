import {
  Add,
  ArchiveTick,
  BrifecaseTick,
  ClipboardClose,
  CloseCircle,
  DocumentText,
  Facebook,
  HambergerMenu,
  Home2,
  Instagram,
  Link21,
  LoginCurve,
  MessageQuestion,
  ProfileAdd,
  SearchNormal1,
  Setting2,
  TaskSquare
} from 'iconsax-react'
import { IconProps } from '../components/UI/atoms/Icon'
import { ILinkProps } from '../components/UI/atoms/Link'
import { ILogoComponent } from '../components/UI/atoms/Logo/Logo.interface'
import { IMainButton } from '../components/UI/atoms/MainButton'
import { IBreadcrumbs } from '../components/UI/molecules/Breadcrumbs'
import { IListIcon } from '../components/UI/molecules/ListIconLink'
import { IMenuItems } from '../components/UI/molecules/ListMenuIcons'
import { MenuItemInfo } from '../components/UI/molecules/ListMenuItems'
import { ISearchbar } from '../components/UI/molecules/Searchbar'
import { ITab } from '../components/UI/molecules/Tab'
import { IResponsiveSearchbar } from '../components/UI/organism/ResponsiveSearchbar'
import { IMobileSearchbar } from '../components/UI/molecules/MobileSearchbar'

/**
 * UI Atoms properties/args
 */

//Breadcrumb Atom

//Divider Atom

//Icon Atom
export const iconProps: IconProps = {
  Icon: HambergerMenu,
  hover: false
}

//Link Atom
export const LinkProps: ILinkProps = {
  type: 'button',
  text: 'Iniciar Sesion',
  href: '#',
  iconProps: { Icon: LoginCurve, hover: true },
  textColor: '#14141C',
  hoverColor: '#14141C'
}

//Logo Atom
export const LogoProps: ILogoComponent = {
  logo: 'https://www.magneto365.com/wp-content/uploads/2022/09/Logo-magneto-v3.png',
  isoType:
    'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fstatic.magneto365.com%2Fco%2F_next%2Fstatic%2Fmedia%2Ffavicon-magneto.b463e35d.png&w=32&q=75',
  alt: 'Logo Magneto',
  logoSize: 120,
  isoSize: 40
}

//Main Button Atom
export const MainButtonProps: IMainButton = {
  buttonType: 'button',
  buttonText: 'Crear hoja de vida',
  textColor: '#090467',
  buttonColor: '#70ECD4',
  iconProps: {
    Icon: ProfileAdd,
    hover: true,
    color: '#090467 '
  }
}

// Open Button
export const OpenButtonProps: IMainButton = {
  buttonText: '',
  buttonType: 'button',
  iconProps: {
    Icon: SearchNormal1,
    hover: false,
    color: '#000096',
    size: 20
  },
  buttonColor: 'transparent'
}

export const MenuButtonProps: IMainButton = {
  buttonText: '',
  buttonType: 'button',
  iconProps: {
    Icon: HambergerMenu,
    hover: false,
    color: '#14141C',
    size: 20
  },
  buttonColor: 'transparent'
}

/**
 * UI Molecules properties/args
 */

//Breadcrumbs Molecule
export const BreadcrumbProps: IBreadcrumbs = {
  urlParam: 'todos-los-empleos',
  iconProps: {
    Icon: Home2,
    hover: true,
    size: 16,
    color: '#a3a3b5'
  },
  breadcrumbsList: [{ breadcrumbText: 'Todos los empleos', url: '#', slug: 'todos-los-empleos' }]
}

//Searchbar Molecule
export const SearchbarProps: ISearchbar = {
  placeholder: 'Busca empleos por cargo o profesion',
  onSearch: () => {
    // Add your search logic here
  },
  searchProps: {
    buttonType: 'submit',
    buttonText: '',
    iconProps: {
      Icon: SearchNormal1,
      hover: false,
      color: '#000096',
      size: 18
    }
  },
  removeProps: {
    buttonType: 'reset',
    buttonText: '',
    iconProps: {
      Icon: CloseCircle,
      hover: false,
      color: '#14141C',
      size: 18,
      variant: 'Linear'
    }
  }
}

//Mobile Searchbar Molecule
export const MobileSearchbarProps: IMobileSearchbar = {
  openProps: {
    buttonText: '',
    buttonType: 'button',
    iconProps: {
      Icon: SearchNormal1,
      hover: false,
      color: '#000096',
      size: 16
    },
    buttonColor: 'transparent'
  },
  infoProps: {
    buttonType: 'submit',
    buttonText: '',
    iconProps: {
      Icon: SearchNormal1,
      hover: false,
      color: '#000096',
      size: 16
    },
    buttonColor: 'transparent'
  },
  closeProps: {
    buttonText: '',
    buttonType: 'button',
    iconProps: {
      Icon: Add,
      hover: false,
      color: '#14141C',
      size: 16,
      variant: 'Linear'
    },
    buttonColor: 'transparent'
  }
}

//Tab Molecule
export const TabProps: ITab = {
  tabButtonList: [
    {
      linkProps: {
        href: '#',
        text: 'Busco Empleo',
        type: 'link',
        textColor: '#000'
      },
      tabButtonColor: '#FFF',
      tabButtonTextSize: '11px',
      tabButtonTextWeight: '700',
      boxShadow: true
    },
    {
      linkProps: {
        href: '#',
        text: 'Soy empresa',
        type: 'link',
        textColor: '#A3A3B5'
      },
      tabButtonColor: '#F4F4FA',
      tabButtonTextSize: '11px',
      tabButtonTextWeight: '400',
      boxShadow: false
    }
  ]
}

/**
 * UI Organism properties/args
 */

//ResponsiveSearchbar Organism

export const ResponsiveSearchbarProps: IResponsiveSearchbar = {
  searchbarProps: SearchbarProps,
  mobileSearchbarProps: MobileSearchbarProps
}

export const LogoMagneto = 'https://www.magneto365.com/wp-content/uploads/2022/09/Logo-magneto-v3.png'
export const IsoLogoMagneto =
  'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fstatic.magneto365.com%2Fco%2F_next%2Fstatic%2Fmedia%2Ffavicon-magneto.b463e35d.png&w=32&q=75'
export const LogoCompany = 'https://www.magneto365.com/wp-content/uploads/2022/08/img-grupo-sura.png'
export const flag =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png'

export const ListIcon: IListIcon[] = [
  { Icon: Facebook, url: '' },
  { Icon: Instagram, url: '' },
  { Icon: Link21, url: '' }
]

export const MenuList: MenuItemInfo[] = [
  { text: 'Todos los empleos', url: '#', slug: 'todos-los-empleos' },
  { text: 'Empleos por ciudad', url: '#', slug: 'empleos-por-ciudad' },
  { text: 'Empleos por empresa', url: '#', slug: 'empleos-por-empresa' },
  { text: 'Empleos por sector laboral', url: '#', slug: 'empleos-por-sector-laboral' },
  { text: 'Empleos por cargo profesional', url: '#', slug: 'empleos-por-cargo-profesional' },
  { text: 'Empleos mas buscandos', url: '#', slug: 'empleos-mas-buscandos' },
  { text: 'Preguntas Frecuentes', url: '#', slug: 'preguntas-frecuentes' },
  { text: 'Articulos de interes', url: '#', slug: 'articulos-de-interes' }
]

export const ButtonsProps: IMainButton = {
  buttonType: 'button',
  iconProps: {
    Icon: ProfileAdd,
    hover: true,
    color: '#090467 '
  },
  buttonText: 'Crear hoja de vida',
  buttonColor: '#70ECD4',
  textColor: '#090467'
}

export const ButtonsProps2: IMainButton = {
  buttonType: 'button',
  iconProps: {
    Icon: LoginCurve,
    hover: true,
    color: '#090467 '
  },
  buttonText: 'Iniciar Sesión',
  buttonColor: 'white',
  textColor: '#090467'
}

export const MenuItems: IMenuItems[] = [
  {
    title: 'Empleos',
    items: [
      {
        Icon: BrifecaseTick,
        text: 'Sugeridos',
        slug: 'sugeridos',
        url: '/sugeridos'
      },
      {
        Icon: ArchiveTick,
        text: 'Guardados',
        slug: 'guardados',
        url: ''
      }
    ]
  },
  {
    title: 'Procesos',
    items: [
      {
        Icon: TaskSquare,
        text: 'Activos',
        slug: '',
        url: ''
      },
      {
        Icon: ClipboardClose,
        text: 'Inactivos',
        slug: '',
        url: ''
      }
    ]
  },
  {
    title: 'Mi cuenta',
    items: [
      {
        Icon: DocumentText,
        text: 'Hoja de vida',
        slug: '',
        url: ''
      },
      {
        Icon: Setting2,
        text: 'Configuración',
        slug: '',
        url: ''
      },
      {
        Icon: MessageQuestion,
        text: 'Ayuda',
        slug: '',
        url: ''
      }
    ]
  }
]
