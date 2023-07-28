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
  Facebook,
  Calendar1,
  People,
  Briefcase,
  DollarCircle,
  Location,
  ArchiveAdd,
  Share,
  Export3,
  Buildings2
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
import { IJobCard } from '../components/UI/molecules/JobCard/JobCard.interface'
import { TOptionFilterSearch } from '@components/UI/molecules/FilterSearchItem'

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

export const classMUI = 'magneto-ui'

//Avatar Atom
export const AvatarProps: IAvatar = {
  userImage:
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
}

// icon Atom
export const SignInIcon: IconProps = {
  icon: LoginCurve,
  hover: false,
  color: '#14141C'
}
export const iconPropsBreadCrumb: IconProps = {
  icon: Home2,
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
    icon: Refresh,
    hover: false
  }
}

//Logo Atom
export const LogoProps: ILogoComponent = {
  logo: LogoMagneto,
  isoType: IsoLogoMagneto,
  alt: 'Logo Magneto'
}

export const CompanyLogo =
  'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fmedia.magneto365.com%2Fimage_assets%2Ffiles%2F14510%2Foriginal-LOGO-EXITO-.png%3FExpires%3D1690588799%26Key-Pair-Id%3DK3F66W3VXZUW7N%26Signature%3Di1pLbYQfi4VSnjTcCQmqHH8DMzSPsqYAJ76Zev~MLRWrfkO~1ySQnbduk0fJNTIotUFG1-e9gLvZHzNmrczyf4eYx8NDnKdHgaU2PzcMG1E7Ca3WXxhGQufiqQd0vSGd6h2cN~DiZ~QQMp53G6o-ybE9FInCNAl1MZIbg5pPIJUEwimVBoi7e~cRxa9MUV7gxvTvk2lwmLtHWwitmbPlcNGl6trxhlN0yLpJER8QODej1UzMJN3cFMAboX98A-Z~~sQLbDq1yNVKjCBqZsn85xcCfcGMLpeyPWvsTAEy9E82WvIM1jhlyQ6Bb3GMLySmNEbgSNgyxTrpGMhyUTwXrg__&w=128&q=75'
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
    icon: ProfileAdd,
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
    icon: SearchNormal1,
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
    icon: HambergerMenu,
    hover: false,
    color: '#14141C',
    size: 20
  }
}

export const searchPropsButton: IMainButton = {
  buttonType: 'submit' as const,
  iconProps: {
    icon: SearchNormal1,
    hover: false,
    color: '#000096',
    size: 18
  }
}

export const removePropsButton: IMainButton = {
  buttonType: 'reset' as const,
  buttonSize: 'medium',
  iconProps: {
    icon: Add,
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
    icon: SearchNormal1,
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
    icon: Add,
    hover: false,
    color: '#14141C',
    size: 25
  }
}

export const CreateAccountButton: IMainButton = {
  buttonType: 'button',
  buttonStyles: {
    buttonColor: '#70ECD4',
    textColor: '#090467',
    spacing: '10px'
  },
  iconProps: {
    icon: ProfileAdd,
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
    icon: LoginCurve,
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

//Jobs Details Molecule
export const iconDetailList = [Calendar1, People, Briefcase, DollarCircle, Location]

//Jobs Actions Molecule
export const buttonIconsList = [ArchiveAdd, Share]

export const anchorIconList = [Export3, Buildings2]

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
        icon: MessageQuestion,
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
        icon: BrifecaseTick,
        text: 'Sugeridos',
        slug: 'sugeridos',
        url: '/sugeridos'
      },
      {
        icon: ArchiveTick,
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
        icon: TaskSquare,
        text: 'Activos',
        slug: '',
        url: ''
      },
      {
        icon: ClipboardClose,
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
        icon: DocumentText,
        text: 'Hoja de vida',
        slug: '',
        url: ''
      },
      {
        icon: MessageQuestion,
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

//FilterBottomHeader props

export const menuFilterButton = {
  icon: ArrowDown2,
  hover: false,
  size: 17
}

export const iconFilterOrder = {
  icon: ArrowSwapVertical,
  hover: false,
  size: 20
}

export const optionsFilterOrderBy: IMenuFilterItem[] = [
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

//Vacants

export const vacants: IJobCard[] = [
  {
    title: 'Desarrollador Web',
    cities: ['Medellin', 'Barranquila', 'Bogota', 'Cali', 'Pasto', 'Cartagena'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
    companyName: 'Adidas',
    companySlug: 'adidas',
    educationLevel: 'Profesional',
    experience: '6 meses de experiencia',
    minSalary: '1.200.000',
    maxSalary: '2.000.000',
    publishDate: 'hace 10 dias',
    others: 'otras',
    contractType: 'Termino fijo'
  },
  {
    title: 'Analista',
    cities: ['Medellin', 'Barranquila', 'Bogota'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KMoo9RUN_NnD4aWgDuHUeEGTUfJXpimlWA&usqp=CAU',
    companyName: 'Coca-cola',
    companySlug: 'coca-cola',
    educationLevel: 'Arquitecto',
    experience: '12 meses de experiencia',
    minSalary: '3.200.000',
    maxSalary: '6.000.000',
    publishDate: 'hace 20 dias',
    others: 'otras',
    contractType: 'Prestacion de servicios'
  },
  {
    title: 'UX | UI designer',
    cities: ['Medellin', 'Barranquila', 'Cali', 'Pasto'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
    companyName: 'Lego',
    companySlug: 'legos',
    educationLevel: 'Tecnologo',
    experience: '6 meses de experiencia',
    minSalary: '3.000.000',
    maxSalary: '5.000.000',
    publishDate: 'hace 2 meses',
    others: 'otras',
    contractType: 'Termino indefinido'
  },
  {
    title: 'Desarrollador Web',
    cities: ['Medellin', 'Barranquila', 'Bogota', 'Cali', 'Pasto', 'Cartagena'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
    companyName: 'Adidas',
    companySlug: 'adidas',
    educationLevel: 'Profesional',
    experience: '6 meses de experiencia',
    minSalary: '1.200.000',
    maxSalary: '2.000.000',
    publishDate: 'hace 10 dias',
    others: 'otras',
    contractType: 'Termino fijo'
  },
  {
    title: 'UX | UI designer',
    cities: ['Medellin', 'Barranquila', 'Cali', 'Pasto'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
    companyName: 'Lego',
    companySlug: 'legos',
    educationLevel: 'Tecnologo',
    experience: '6 meses de experiencia',
    minSalary: '3.000.000',
    maxSalary: '5.000.000',
    publishDate: 'hace 2 meses',
    others: 'otras',
    contractType: 'Termino indefinido'
  }
]

//TODO: temporal side menu filter
export const optionsFilterMenu: TOptionFilterSearch[] = [
  {
    id: 1,
    operator: 1,
    label: 'Administración y oficina',
    amount: 200
  },
  {
    id: 14,
    operator: 1,
    label: 'Ingenierías',
    amount: 200
  },
  {
    id: 18,
    operator: 1,
    label: 'Medicina, sector de la salud y Ciencias',
    amount: 200
  },
  {
    id: 2,
    operator: 1,
    label: 'Recursos Humanos',
    amount: 200
  },
  {
    id: 25,
    operator: 1,
    label: 'Ventas',
    amount: 200
  }
]
