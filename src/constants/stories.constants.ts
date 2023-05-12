import {
  ArchiveTick,
  BrifecaseTick,
  ClipboardClose,
  DocumentText,
  Facebook,
  Instagram,
  Link21,
  LoginCurve,
  MessageQuestion,
  ProfileAdd,
  Setting2,
  TaskSquare
} from 'iconsax-react'
import { ITabButton } from '../components/UI/molecules/TabButton'
import { IListIcon } from '../components/UI/molecules/ListIconLink'
import { MenuItemInfo } from '../components/UI/molecules/ListMenuItems/ListMenuItems.interface'
import { IMainButton } from '../components/UI/atoms/MainButton'
import { IMenuItems } from '../components/UI/molecules/ListMenuIcons/ListMenuIcons.interface'

export const LogoMagneto = 'https://www.magneto365.com/wp-content/uploads/2022/09/Logo-magneto-v3.png'
export const IsoLogoMagneto =
  'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fstatic.magneto365.com%2Fco%2F_next%2Fstatic%2Fmedia%2Ffavicon-magneto.b463e35d.png&w=32&q=75'
export const LogoCompany = 'https://www.magneto365.com/wp-content/uploads/2022/08/img-grupo-sura.png'
export const flag =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png'

export const ListButton: ITabButton[] = [
  { link: '#', text: 'Busco empleo', size: '11px', color: '#FFF', textColor: '#000' },
  { link: '#', text: 'Soy empresa', size: '11px', color: '#F4F4FA', textColor: '#A3A3B5' }
]

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
  buttonText: 'Crear hoja de vida',
  textColor: '#090467',
  btnColor: '#70ECD4',
  childrenProps: {
    Icon: ProfileAdd,
    hover: true,
    color: '#090467 '
  }
}
export const ButtonsProps2: IMainButton = {
  buttonText: 'Iniciar Sesión',
  textColor: '#090467',
  btnColor: 'white',
  childrenProps: {
    Icon: LoginCurve,
    hover: true,
    color: '#090467 '
  }
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
