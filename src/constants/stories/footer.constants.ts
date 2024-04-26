import { ISearchItem } from '@components/UI/atoms'
import { IMagnetoResolution } from '@components/UI/molecules/MagnetoResolution/MagnetoResolution.interface'
import { IRightsReservedText } from '@components/UI/molecules/RightsReservedText/RightsReservedText.interface'
import { IFooterMenuLinks } from '@components/UI/organism/FooterMenuLinks/FooterMenuLinks.interface'
import { AppGallery, AppStore, GooglePlay } from '@constants/icons.constants'

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

export const RightsReservedProps: IRightsReservedText = {
  magnetoRightsText: 'Magneto Global S.A.S, todos los derechos reservados'
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

export const searchList: ISearchItem[] = [
  { url: '#', tag: 'Bolsa de empleo México' },
  { url: '#', tag: 'Bolsa de empleo Argentina' },
  { url: '#', tag: 'Bolsa de empleo Nicaragua' },
  { url: '#', tag: 'Bolsa de empleo Costa Rica' },
  { url: '#', tag: 'Servicio de empleo Colombia' },
  { url: '#', tag: 'Bolsa de empleo Colombia' },
  { url: '#', tag: 'Empleo en Barranquilla' },
  { url: '#', tag: 'Empleo en Cartagena' },
  { url: '#', tag: 'Empleo en Medellín' },
  { url: '#', tag: 'Empleo en Bogotá' },
  { url: '#', tag: 'Empleo en Cali' },
  { url: '#', tag: 'Empleo en Pereira' },
  { url: '#', tag: 'Empleo como agente' },
  { url: '#', tag: 'Trabajos como ingeniero' },
  { url: '#', tag: 'Servicio de empleo' },
  { url: '#', tag: 'Empleos como abogado' },
  { url: '#', tag: 'Empleo como desarrollador' },
  { url: '#', tag: 'Empleos SENA' },
  { url: '#', tag: 'Empleos en bodega' },
  { url: '#', tag: 'Empleo como regente de farmacia' }
]
