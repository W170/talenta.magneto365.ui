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
  Buildings2,
  GooglePlay,
  AppGallery,
  AppStore
} from './icons.constants'

import { IAvatar, IBreadcrumb, ILogoComponent, IMainButton, IconProps } from '../components/UI/atoms'
import {
  IHeaderTabs,
  IListIcon,
  IMenuItems,
  IListMenuItems,
  MenuItemInfo,
  IMobileSearchbar,
  ISearchbar
} from '../components/UI/molecules'
import { ILoading } from '../components/UI/atoms/Loading'
import { ISortMenuItem } from '../components/UI/molecules/SortMenu/SortMenu.interface'
import { IFilterValue } from '@components/UI/template/SideFilter'
import { IBrands } from '../components/UI/molecules/BrandsContainer/BrandsContainer.interface'
import { IListMenuIcons } from '../components/UI/molecules/ListMenuIcons/ListMenuIcons.interface'
import { IRightsReservedText } from '@components/UI/molecules/RightsReservedText/RightsReservedText.interface'
import { IMagnetoResolution } from '@components/UI/molecules/MagnetoResolution/MagnetoResolution.interface'
import { IFooterMenuLinks } from '@components/UI/organism/FooterMenuLinks/FooterMenuLinks.interface'
import { IVacants } from '@components/UI/page/JobsPage/JobsPage.interface'

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

// Search Item
export const searchList = [
  { tag: 'Bolsa de empleo México' },
  { tag: 'Bolsa de empleo Argentina' },
  { tag: 'Bolsa de empleo Nicaragua' },
  { tag: 'Bolsa de empleo Costa Rica' },
  { tag: 'Servicio de empleo Colombia' },
  { tag: 'Bolsa de empleo Colombia' },
  { tag: 'Empleo en Barranquilla' },
  { tag: 'Empleo en Cartagena' },
  { tag: 'Empleo en Medellín' },
  { tag: 'Empleo en Bogotá' },
  { tag: 'Empleo en Cali' },
  { tag: 'Empleo en Pereira' },
  { tag: 'Empleo como agente' },
  { tag: 'Trabajos como ingeniero' },
  { tag: 'Servicio de empleo' },
  { tag: 'Empleos como abogado' },
  { tag: 'Empleo como desarrollador' },
  { tag: 'Empleos SENA' },
  { tag: 'Empleos en bodega' },
  { tag: 'Empleo como regente de farmacia' }
]

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

export const appliedOptionsBySearchRenderType = [
  {
    id: '776@47',
    label: 'Antioquia, Colombia',
    parentId: 47,
    isApplied: true
  },
  {
    id: '789@47',
    label: 'Cundinamarca, Colombia',
    parentId: 47,
    isApplied: true
  }
]

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

export const listMenuUserProps: IListMenuIcons = {
  urlParam: 'guardados',
  menuItems: MenuItems,
  menuItems1440,
  logout: Logout,
  settings: Settings
}

//SortBar props

export const menuSortButton = {
  icon: ArrowDown2,
  hover: false,
  size: 17
}

export const iconFilterOrder = {
  icon: ArrowSwapVertical,
  hover: false,
  size: 20
}

export const optionsFilterOrderBy: ISortMenuItem[] = [
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

export const vacants: IVacants[] = [
  {
    id: 1,
    title: 'Desarrollador Web',
    cities: ['Medellin', 'Barranquila', 'Bogota', 'Cali', 'Pasto', 'Cartagena'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
    companyName: 'Adidas',
    companySlug: 'adidas',
    educationLevel: 'Profesional',
    experience: '6 meses de experiencia',
    salary: '1.200.000 a 4.000.000',
    publishDate: 'hace 10 dias',
    others: 'otras',
    contractType: 'Termino fijo',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    offerSkills: {
      jobSkillCardHeader: 'Habilidades',
      jobSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    } //Pendiente refactoring de atomo,
  },
  {
    id: 2,
    title: 'Analista',
    cities: ['Medellin', 'Barranquila', 'Bogota'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KMoo9RUN_NnD4aWgDuHUeEGTUfJXpimlWA&usqp=CAU',
    companyName: 'Coca-cola',
    companySlug: 'coca-cola',
    educationLevel: 'Arquitecto',
    experience: '12 meses de experiencia',
    salary: '3.200.000',
    publishDate: 'hace 20 dias',
    others: 'otras',
    contractType: 'Prestacion de servicios',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    offerSkills: {
      jobSkillCardHeader: 'Habilidades',
      jobSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  },
  {
    id: 3,
    title: 'UX | UI designer',
    cities: ['Medellin', 'Barranquila', 'Cali', 'Pasto'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
    companyName: 'Lego',
    companySlug: 'legos',
    educationLevel: 'Tecnologo',
    experience: '6 meses de experiencia',
    salary: '3.000.000',
    publishDate: 'hace 2 meses',
    others: 'otras',
    contractType: 'Termino indefinido',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    offerSkills: {
      jobSkillCardHeader: 'Habilidades',
      jobSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  }
]

//TODO: temporal side menu filter
export const optionsFilterMenu: IFilterValue[] = [
  {
    id: 1,
    operator: 1,
    label: 'Administración y oficina',
    total: 200,
    isApplied: false
  },
  {
    id: 14,
    operator: 1,
    label: 'Ingenierías',
    total: 9999,
    isApplied: false
  },
  {
    id: 18,
    operator: 1,
    label: 'Medicina, sector de la salud y Ciencias',
    total: 200,
    isApplied: true
  },
  {
    id: 2,
    operator: 1,
    label: 'Recursos Humanos',
    total: 0,
    isApplied: false
  },
  {
    id: 25,
    operator: 1,
    label: 'Ventas',
    total: 10,
    isApplied: false
  }
]

export const ourBrandsText = 'Nuestras Marcas'

export const brands: IBrands[] = [
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
  }
]

export const breadcrumbProps: IBreadcrumb = {
  breadcrumbText: '/empleos/busqueda/sugeridos',
  baseUrl: 'http://localhost:8080',
  breadcrumbCustomText: '/profile/search/suggested',
  queryParams: '?utm=google&utm_source=facebook&utm_medium=cueros',
  haveRedirect: true
}

export const RightsReservedProps: IRightsReservedText = {
  magnetoRightsText: 'Magneto Global S.A.S, todos los derechos reservados',
  mapSiteHref: '#',
  mapSiteText: 'Mapa del sitio'
}

export const MagnetoResolutionProps: IMagnetoResolution = {
  resolutionText:
    ' Vinculado a la red de prestadores del Servicio Público de Empleo. Autorizado por la Unidad Administrativa Especial del Servicio Público de Empleo según resolución',
  resolutionHref: '#',
  resolutionHrefText: 'No. 0333/2022'
}

export const SocialMediaProps = [
  {
    href: 'https://play.google.com/store/apps/details?id=com.magneto365.app',
    img: GooglePlay,
    alt: 'google-play-image'
  },
  {
    href: 'https://appgallery.huawei.com/app/C108120693',
    img: AppGallery,
    alt: 'app-gallery-image'
  },
  {
    href: 'https://apps.apple.com/co/app/magneto-empleo-para-todos/id6444812096',
    img: AppStore,
    alt: 'app-store-image'
  }
]

const authenticated = false

const createAccount = () => console.log('widget open')

export const listMenuText: IFooterMenuLinks = {
  personsMenu: {
    heightContent: authenticated ? 280 : 330,
    title: 'Personas',
    createAccount: createAccount,
    isLoading: false,
    links: [
      {
        tag: 'Conoce Magneto',
        href: ''
      },
      {
        tag: 'Ver todo los empleos',
        href: ''
      },
      {
        tag: authenticated ? null : 'Ingresa a tu cuenta',
        href: ''
      },
      {
        tag: authenticated ? null : 'Crear Cuenta',
        href: '',
        isCreateAccount: true
      },
      {
        tag: 'Articulos de interes',
        href: ''
      },
      {
        tag: 'Preguntas Frecuentes',
        href: ''
      },
      {
        tag: 'Empleos por ciudad',
        href: ''
      },
      {
        tag: 'Empleos por sector',
        href: ''
      },
      {
        tag: 'Empleos por empresa',
        href: ''
      },
      {
        tag: 'Empleos mas buscados',
        href: ''
      }
    ]
  },

  magnetoMenu: {
    heightContent: 140,
    title: 'Magneto',
    links: [
      {
        tag: 'Selección digital',
        href: ''
      },
      {
        tag: 'Evaluación integral del talento',
        href: ''
      },
      {
        tag: 'Recibe una asesoria',
        href: ''
      }
    ]
  },
  magnetoLiteMenu: {
    heightContent: 115,
    title: 'Magneto Lite',
    links: [
      {
        tag: 'Publicar ofertas de empleo',
        href: ''
      },
      {
        tag: 'Planes para PYMES',
        href: ''
      }
    ]
  },
  otherSolutionsMenu: {
    heightContent: 115,
    title: 'Otras soluciones',
    links: [
      {
        tag: 'Marble Headhunter',
        href: ''
      },
      {
        tag: 'Bibliotecas Digitales',
        href: ''
      }
    ]
  },
  legalMenu: {
    heightContent: 335,
    title: 'Legal',
    links: [
      {
        tag: 'Politica tratamiento de Datos Personales Psyconometrics',
        href: ''
      },
      {
        tag: 'Politica tratamiento de Datos Magneto Global',
        href: ''
      },
      {
        tag: 'Aviso de privacidad Psyconometrics',
        href: ''
      },
      {
        tag: 'Aviso de privacidad Magneto Global',
        href: ''
      },
      {
        tag: 'Termino y condiciones',
        href: ''
      },
      {
        tag: 'Reglamento Autorizacion SPE',
        href: ''
      },
      {
        tag: 'Consentimiento de referidos',
        href: ''
      },
      {
        tag: 'Ver Reglamento de autorizacion',
        href: ''
      },
      {
        tag: 'Politica de Cookies Psyconometrics',
        href: ''
      },
      {
        tag: 'Politica de Cookies Magneto Global',
        href: ''
      }
    ]
  }
}
