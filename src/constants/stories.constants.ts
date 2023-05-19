import {
  Add,
  ArchiveTick,
  BrifecaseTick,
  ClipboardClose,
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
import { ISearchbar } from '../components/UI/molecules/Searchbar'
import { ITab } from '../components/UI/molecules/Tab'
import { IMobileSearchbar } from '../components/UI/molecules/MobileSearchbar'
import { IListMenuItems, MenuItemInfo } from '../components/UI/molecules/ListMenuItems/ListMenuItems.interface'
import { IMenuItems } from '../components/UI/molecules/ListMenuIcons/ListMenuIcons.interface'
import { IHeaderDrawerTabs } from '../components/UI/molecules/HeaderDrawerTabs/HeaderDrawerTabs.interface'
import { IAvatar } from '../components/UI/atoms/Avatar'
import { IHeaderTabs } from '../components/UI/molecules/HeaderTabs/HeaderTabs.interface'
import { IHeaderTab } from '../components/UI/atoms/HeaderTab'

/**
 * UI Atoms properties/args
 */

//Avatar Atom
export const AvatarProps: IAvatar = {
  userImage:
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
}

//Hambuger Menu Icon Atom
export const HamburgerIcon: IconProps = {
  Icon: HambergerMenu,
  hover: false
}

//SignIn Link Atom
export const SignInLinkProps: ILinkProps = {
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
  isoSize: 38
}

//Sign up Atom
export const SignUpButtonProps: IMainButton = {
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

// Mobile Searchbar Button
export const MobileSearchbarButtonProps: IMainButton = {
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

// Menu Button Atom
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

//HeaderTab Atom
export const CurriculumTabProps: IHeaderTab = {
  tabType: 'tabOption',
  url: '#',
  tabText: 'Hoja de vida',
  isActive: false
}

/**
 * UI Molecules properties/args
 */

//Breadcrumbs Molecule
export const BreadcrumbsProps: IBreadcrumbs = {
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
      Icon: Add,
      hover: false,
      color: '#14141C',
      size: 18,
      variant: 'Linear'
    }
  }
}

//Mobile Searchbar Molecule
export const MobileSearchbarProps: IMobileSearchbar = {
  onClick: console.info,
  onSearch: () => {
    // Add your search logic here
  },
  focusSearchInput: false,
  showMobileSearchbar: false,
  searchProps: {
    buttonType: 'submit',
    buttonText: '',
    iconProps: {
      Icon: SearchNormal1,
      hover: false,
      color: '#A3A3B5',
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
      size: 25,
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
        text: 'Soy reclutador',
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

//HeaderTabs Molecule
export const JobsTabsProps: IHeaderTabs = {
  urlParam: 'sugeridos',
  headerTabList: [
    {
      tabType: 'tabTitle',
      url: '#',
      tabText: 'Empleos:'
    },
    {
      tabType: 'tabOption',
      url: '#',
      tabText: 'Sugeridos',
      slug: 'sugeridos'
    },
    {
      tabType: 'tabOption',
      url: '#',
      tabText: 'Guardados'
    }
  ]
}

export const ProcessTabsProps: IHeaderTabs = {
  urlParam: 'sugeridos',
  headerTabList: [
    {
      tabType: 'tabTitle',
      url: '#',
      tabText: 'Procesos:'
    },
    {
      tabType: 'tabOption',
      url: '#',
      tabText: 'Activos',
      slug: 'procesos-activos'
    },
    {
      tabType: 'tabOption',
      url: '#',
      tabText: 'Inactivos'
    }
  ]
}

/**
 * UI Organism properties/args
 */

/**
 * UI Templates properties/args
 */

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
  { text: 'Inicio', url: '#', slug: 'inicio' },
  { text: 'Todos los empleos', url: '#', slug: 'todos-los-empleos' },
  { text: 'Empleos por ciudad', url: '#', slug: 'empleos-por-ciudad' },
  { text: 'Empleos por empresa', url: '#', slug: 'empleos-por-empresa' },
  { text: 'Empleos por sector laboral', url: '#', slug: 'empleos-por-sector-laboral' },
  { text: 'Empleos por cargo profesional', url: '#', slug: 'empleos-por-cargo-profesional' },
  { text: 'Empleos mas buscandos', url: '#', slug: 'empleos-mas-buscandos' },
  { text: 'Preguntas Frecuentes', url: '#', slug: 'preguntas-frecuentes' },
  { text: 'Articulos de interes', url: '#', slug: 'articulos-de-interes' }
]

export const listMenuProps: IListMenuItems = {
  menuList: MenuList,
  urlParam: 'empleos-por-empresa'
}

export const logoProps: ILogoComponent = {
  alt: 'Logo Magneto',
  logoSize: 100,
  isoSize: 30,
  logo: LogoMagneto,
  isoType: IsoLogoMagneto
}

export const headerProps: IHeaderDrawerTabs = {
  logoProps: logoProps,
  tabProps: TabProps
}

export const createAccount: IMainButton = {
  buttonType: 'button',
  iconProps: {
    Icon: ProfileAdd,
    hover: true,
    color: '#090467 '
  },
  buttonText: 'Crear hoja de vida',
  buttonColor: '#70ECD4',
  textColor: '#090467',
  spacing: 10,
  onClick: () => ({})
}

export const login: IMainButton = {
  buttonType: 'button',
  iconProps: {
    Icon: LoginCurve,
    hover: true,
    color: '#090467 '
  },
  buttonText: 'Iniciar Sesión',
  buttonColor: 'white',
  textColor: '#090467',
  spacing: 10,
  onClick: () => ({})
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

export const listMenuUserProps = {
  urlParam: 'guardados',
  menuItems: MenuItems
}
