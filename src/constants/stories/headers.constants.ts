import { IBreadcrumb, IMainButton, IconProps } from '@components/UI/atoms'
import { IHeaderTabs, IListMenuIcons, IMenuItems, IMobileSearchbar, ISearchbar } from '@components/UI/molecules'
import { IBrands } from '@components/UI/molecules/BrandsContainer/BrandsContainer.interface'
import {
  Add,
  AllJobs,
  ArchiveTick,
  ClipboardClose,
  DocumentText,
  HambergerMenu,
  Home2,
  MessageQuestion,
  ProfileAdd,
  SearchNormal1,
  SuggestedJobs,
  TaskSquare
} from '@constants/icons.constants'

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
        icon: AllJobs,
        text: 'Ver todos',
        slug: 'ver-todos',
        url: '/ver-todos'
      },
      {
        icon: SuggestedJobs,
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
      tabText: 'Ver todos',
      slug: 'ver-todos'
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

export const SearchbarProps: ISearchbar = {
  placeholder: 'Busca empleos por cargo o profesion',
  termValue: 'Mi Busqueda',
  onSearch: () => {
    // Add your search logic here
  }
}

export const MobileSearchbarProps: IMobileSearchbar = {
  onSearch: () => {
    // Add your search logic here
  }
}

export const iconPropsBreadCrumb: IconProps = {
  icon: Home2,
  hover: false,
  size: 13,
  color: '#a3a3b5'
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
