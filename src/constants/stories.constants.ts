import {
  Add,
  ArchiveTick,
  ArrowDown2,
  ArrowSwapVertical,
  BrifecaseTick,
  ClipboardClose,
  DocumentText,
  HambergerMenu,
  Home2,
  Instagram,
  Link,
  LoginCurve,
  MessageQuestion,
  ProfileAdd,
  Refresh,
  SearchNormal1,
  TaskSquare,
  Youtube,
  IsoLogoMagneto,
  LogoMagneto,
  Tiktok,
  Linkedin,
  Facebook
} from './icons.constants'

import { IAvatar, ILogoComponent, IMainButton, IconProps } from '../components/UI/atoms'
import {
  IHeaderTabs,
  IListIcon,
  IMenuItems,
  IListMenuItems,
  MenuItemInfo,
  IMobileSearchbar,
  ISearchbar
} from '../components/UI/molecules'
import { IlistMenuUserProps } from '../components/UI/organism/LoginHeader'
import { ILoading } from '../components/UI/atoms/Loading'
import { IMenuFilterItem } from '../components/UI/molecules/MenuFilter/MenuFilter.interface'
import { IlistMenuUserPropsNot1440 } from '../components/UI/organism'

/**
 *
 *
 *
 *
 *
 *
 *
 * UI Atoms properties/args
 *
 *
 *
 *
 *
 *
 *
 */

//Avatar Atom
export const AvatarProps: IAvatar = {
  userImage:
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
}

// Icon Atom
export const SignInIcon: IconProps = {
  Icon: LoginCurve,
  hover: false,
  color: '#14141C'
}
export const iconPropsBreadCrumb: IconProps = {
  Icon: Home2,
  hover: false,
  size: 13,
  color: '#a3a3b5'
}

//Link Atom
export const SignInStyles = {
  textColor: '#14141C',
  buttonColor: 'transparent',
  hoverColor: '#14141C'
}

// Loading Atom

export const LoadingProps: ILoading = {
  loadingIcon: {
    Icon: Refresh,
    hover: false
  }
}

//Logo Atom
export const LogoProps: ILogoComponent = {
  logo: LogoMagneto,
  isoType: IsoLogoMagneto,
  alt: 'Logo Magneto'
}

export const LogoCompany = 'https://www.magneto365.com/wp-content/uploads/2022/08/img-grupo-sura.png'
export const flag =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png'

//Button Atom
export const SignUpButtonStyle: IMainButton = {
  buttonType: 'button',
  buttonSize: 'medium',
  buttonStyles: {
    buttonColor: '#70ECD4',
    textColor: '#090467',
    spacing: '10px'
  },
  iconProps: {
    Icon: ProfileAdd,
    hover: true,
    color: '#090467 '
  }
}

export const MobileSearchbarButtonProps: IMainButton = {
  buttonType: 'button',
  buttonStyles: {
    buttonColor: 'transparent'
  },
  buttonText: '',
  iconProps: {
    Icon: SearchNormal1,
    hover: false,
    color: '#000096',
    size: 20
  }
}

export const MenuButtonProps: IMainButton = {
  buttonType: 'button',
  buttonStyles: {
    buttonColor: 'transparent'
  },
  iconProps: {
    Icon: HambergerMenu,
    hover: false,
    color: '#14141C',
    size: 20
  }
}

export const searchPropsButton: IMainButton = {
  buttonType: 'submit' as const,
  iconProps: {
    Icon: SearchNormal1,
    hover: false,
    color: '#000096',
    size: 18
  }
}

export const removePropsButton: IMainButton = {
  buttonType: 'reset' as const,
  buttonSize: 'medium',
  iconProps: {
    Icon: Add,
    hover: false,
    color: '#14141C',
    size: 18
  }
}

export const searchMobileProps: IMainButton = {
  buttonType: 'submit',
  buttonStyles: {
    buttonColor: 'transparent'
  },
  iconProps: {
    Icon: SearchNormal1,
    hover: false,
    color: '#A3A3B5',
    size: 16
  }
}

export const closeSearchMobileProps: IMainButton = {
  buttonType: 'button',
  buttonStyles: {
    buttonColor: 'transparent'
  },
  iconProps: {
    Icon: Add,
    hover: false,
    color: '#14141C',
    size: 25
  }
}

export const SignInProps = {
  type: 'button' as const,
  text: 'Iniciar Sesion',
  href: '#'
}

export const SignUpProps = {
  buttonType: 'button' as const,
  buttonText: 'Crear Cuenta',
  buttonSize: 'medium' as const
}

export const CreateAccountButton: IMainButton = {
  buttonType: 'button',
  buttonStyles: {
    buttonColor: '#70ECD4',
    textColor: '#090467',
    spacing: '10px'
  },
  iconProps: {
    Icon: ProfileAdd,
    hover: true,
    color: '#090467 '
  }
}

export const LoginButton: IMainButton = {
  buttonType: 'button',
  buttonStyles: {
    buttonColor: 'white',
    textColor: '#14141C',
    spacing: '10px'
  },
  iconProps: {
    Icon: LoginCurve,
    hover: true
  }
}

/**
 *
 *
 *
 *
 *
 *
 *
 * UI Molecules properties/args
 *
 *
 *
 *
 *
 *
 *
 */

//Breadcrumbs Molecule
export const breadcrumbText = '/perfil/empleos/sugeridos'

//Searchbar Molecule
export const SearchbarProps: ISearchbar = {
  placeholder: 'Busca empleos por cargo o profesion',
  termValue: 'Mi Busqueda',
  onSearch: () => {
    // Add your search logic here
  }
}

//Mobile Searchbar Molecule
export const MobileSearchbarProps: IMobileSearchbar = {
  onSearch: () => {
    // Add your search logic here
  }
}

//TabButton Molecule
export const LeftLinkStyles = {
  textColor: '#14141C',
  buttonColor: '#FFF',
  hoverColor: '#04004d',
  visitedColor: '#000'
}

export const LeftTabStyles = {
  tabButtonColor: '#FFF',
  tabButtonTextSize: '11px',
  tabButtonTextWeight: '700',
  boxShadow: true
}

export const RightLinkStyles = {
  textColor: '#A3A3B5',
  buttonColor: 'transparent',
  hoverColor: '#04004d',
  visitedColor: '#A3A3B5'
}
export const RightTabStyles = {
  tabButtonColor: '#F4F4FA',
  tabButtonTextSize: '11px',
  tabButtonTextWeight: '400',
  boxShadow: false
}

export const DrawerLeftTabStyles = {
  tabButtonLinkStyles: {
    textColor: '#14141C',
    buttonColor: '#FFF',
    hoverColor: '#04004d',
    visitedColor: '#000'
  },
  tabButtonStyles: {
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '700',
    boxShadow: true
  }
}

export const DrawerRightTabStyles = {
  tabButtonLinkStyles: {
    textColor: '#A3A3B5',
    buttonColor: 'transparent',
    hoverColor: '#04004d',
    visitedColor: '#A3A3B5'
  },
  tabButtonStyles: {
    tabButtonColor: '#F4F4FA',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '400',
    boxShadow: false
  }
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
  ],
  addDivider: true
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
  ],
  addDivider: true
}

export const CurriculumTabProps: IHeaderTabs = {
  urlParam: 'hoja-de-vida',
  headerTabList: [
    {
      tabType: 'tabOption',
      url: '#',
      tabText: 'Hoja de vida'
    }
  ],
  addDivider: true
}

//Menu Item Molecule

export const MenuList: MenuItemInfo[] = [
  { text: 'Inicio', url: '#', slug: 'inicio' },
  { text: 'Todos los empleos', url: '/co/empleos', slug: 'empleos' },
  { text: 'Empleos por ciudad', url: '/co/trabajos/empleos-por-ciudades', slug: 'empleos-por-ciudades' },
  { text: 'Empleos por empresa', url: '/home/empleos-por-empresas/', slug: 'empleos-por-empresas' },
  {
    text: 'Empleos por sector laboral',
    url: '/co/trabajos/empleos-por-sector-laboral',
    slug: 'empleos-por-sector-laboral'
  },
  {
    text: 'Empleos por cargo profesional',
    url: '/co/trabajos/empleos-por-cargo-profesional',
    slug: 'empleos-por-cargo-profesional'
  },
  { text: 'Empleos mas buscandos', url: '/co/trabajos/empleos-mas-buscados', slug: 'empleos-mas-buscandos' },
  { text: 'Preguntas frecuentes', url: '/home/preguntas-frecuentes/', slug: 'preguntas-frecuentes' },
  { text: 'Soluciones empresariales', url: '/home/soy-empresa/', slug: 'preguntas-frecuentes' },
  { text: 'Articulos de interes', url: '/home/blog/', slug: 'blog' }
]

/**
 *
 *
 *
 *
 *
 *
 *
 * UI Organism properties/args
 *
 *
 *
 *
 *
 *
 *
 */

export const ListIcon: IListIcon[] = [
  { icon: Facebook, url: 'https://www.facebook.com/MagnetoEmpleos?_rdc=4&_rdr' },
  { icon: Instagram, url: 'https://www.instagram.com/magnetoempleos/' },
  { icon: Linkedin, url: 'https://www.linkedin.com/company/magnetoempleos/' },
  { icon: Youtube, url: 'https://www.youtube.com/c/Magnetoempleos' },
  { icon: Tiktok, url: 'https://www.tiktok.com/@magnetoempleos' },
  { icon: Link, url: 'https://www.magneto365.com/home/#comparte-magneto' }
]

export const listMenuProps: IListMenuItems = {
  menuList: MenuList,
  urlParam: 'empleos-por-empresas'
}

/**
 *
 *
 *
 *
 *
 *
 *
 * UI Templates properties/args
 *
 *
 *
 *
 *
 *
 *
 */

export const logoProps: ILogoComponent = {
  alt: 'Logo Magneto',
  logo: LogoMagneto,
  isoType: IsoLogoMagneto
}

export const logoPropsLogin: ILogoComponent = {
  alt: 'Logo Magneto',
  logo: LogoMagneto,
  isoType: IsoLogoMagneto
}

export const menuItems1440: IMenuItems[] = [
  {
    items: [
      {
        Icon: MessageQuestion,
        text: 'Ayuda',
        slug: '',
        url: ''
      }
    ]
  }
]

export const Logout = {
  logoutText: 'Cerrar Sesión',
  onClick: () => ({})
}

export const Settings = {
  settingsText: 'Configuración',
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
        Icon: MessageQuestion,
        text: 'Ayuda',
        slug: '',
        url: ''
      }
    ]
  }
]

export const listMenuUserProps: IlistMenuUserProps = {
  urlParam: 'guardados',
  menuItems: MenuItems,
  menuItems1440,
  logout: Logout,
  settings: Settings
}

export const listMenuUserPropsNot1440: IlistMenuUserPropsNot1440 = {
  urlParam: 'guardados',
  menuItems: MenuItems,
  logout: Logout,
  settings: Settings
}

//FilterBottomHeader props

export const menuFilterButton = {
  Icon: ArrowDown2,
  hover: false,
  size: 17
}

export const iconFilterOrder = {
  Icon: ArrowSwapVertical,
  hover: false,
  size: 20
}

export const optionsMenuFilter: IMenuFilterItem[] = [
  {
    field: 'salary_show',
    label: 'Salario'
  },
  {
    field: 'publish_date',
    label: 'Fecha de publicación'
  },
  {
    field: 'experience_months_number',
    label: 'Experiencia requerida'
  },
  {
    field: 'education_level_id',
    label: 'Nivel de estudios'
  }
]

export const ourBrandsText = 'Nuestras Marcas'

export const brands = [
  {
    brandImg: 'https://tiendasaka.co/img/m/25.jpg',
    brandAlt: 'tannino',
    brandTitle: 'Tannino',
    brandUrl: '#'
  },
  {
    brandImg: 'https://tiendasaka.co/img/m/24.jpg',
    brandAlt: 'Nappa',
    brandTitle: 'Nappa',
    brandUrl: '#'
  },
  {
    brandImg:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/LOGO_MARCA_V%C3%89LEZ.png/1200px-LOGO_MARCA_V%C3%89LEZ.png',
    brandAlt: 'Cueros Velez',
    brandTitle: 'Cueros Velez',
    brandUrl: '#'
  },
  {
    brandImg: 'https://tiendasaka.co/img/m/25.jpg',
    brandAlt: 'tannino',
    brandTitle: 'Tannino',
    brandUrl: '#'
  },
  {
    brandImg: 'https://tiendasaka.co/img/m/24.jpg',
    brandAlt: 'Nappa',
    brandTitle: 'Nappa',
    brandUrl: '#'
  },
  {
    brandImg:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/LOGO_MARCA_V%C3%89LEZ.png/1200px-LOGO_MARCA_V%C3%89LEZ.png',
    brandAlt: 'Cueros Velez',
    brandTitle: 'Cueros Velez',
    brandUrl: '#'
  },
  {
    brandImg: 'https://tiendasaka.co/img/m/25.jpg',
    brandAlt: 'tannino',
    brandTitle: 'Tannino',
    brandUrl: '#'
  },
  {
    brandImg: 'https://tiendasaka.co/img/m/24.jpg',
    brandAlt: 'Nappa',
    brandTitle: 'Nappa',
    brandUrl: '#'
  },
  {
    brandImg:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/LOGO_MARCA_V%C3%89LEZ.png/1200px-LOGO_MARCA_V%C3%89LEZ.png',
    brandAlt: 'Cueros Velez',
    brandTitle: 'Cueros Velez',
    brandUrl: '#'
  },
  {
    brandImg: 'https://tiendasaka.co/img/m/25.jpg',
    brandAlt: 'tannino',
    brandTitle: 'Tannino',
    brandUrl: '#'
  },
  {
    brandImg: 'https://tiendasaka.co/img/m/24.jpg',
    brandAlt: 'Nappa',
    brandTitle: 'Nappa',
    brandUrl: '#'
  },
  {
    brandImg:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/LOGO_MARCA_V%C3%89LEZ.png/1200px-LOGO_MARCA_V%C3%89LEZ.png',
    brandAlt: 'Cueros Velez',
    brandTitle: 'Cueros Velez',
    brandUrl: '#'
  }
]
