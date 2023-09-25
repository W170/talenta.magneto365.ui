import { IAvatar, ILoading, ILogoComponent, IMainButton, IconProps } from '@components/UI/atoms'
import { IsoLogoMagneto, LoginCurve, LogoMagneto, ProfileAdd, Refresh } from '@constants/icons.constants'

export const classMUI = 'magneto-ui'

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

export const CompanyLogo =
  'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fmedia.magneto365.com%2Fimage_assets%2Ffiles%2F14510%2Foriginal-LOGO-EXITO-.png%3FExpires%3D1690588799%26Key-Pair-Id%3DK3F66W3VXZUW7N%26Signature%3Di1pLbYQfi4VSnjTcCQmqHH8DMzSPsqYAJ76Zev~MLRWrfkO~1ySQnbduk0fJNTIotUFG1-e9gLvZHzNmrczyf4eYx8NDnKdHgaU2PzcMG1E7Ca3WXxhGQufiqQd0vSGd6h2cN~DiZ~QQMp53G6o-ybE9FInCNAl1MZIbg5pPIJUEwimVBoi7e~cRxa9MUV7gxvTvk2lwmLtHWwitmbPlcNGl6trxhlN0yLpJER8QODej1UzMJN3cFMAboX98A-Z~~sQLbDq1yNVKjCBqZsn85xcCfcGMLpeyPWvsTAEy9E82WvIM1jhlyQ6Bb3GMLySmNEbgSNgyxTrpGMhyUTwXrg__&w=128&q=75'

export const LogoCompany = 'https://www.magneto365.com/wp-content/uploads/2022/08/img-grupo-sura.png'

export const flag =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png'

export const LoadingProps: ILoading = {
  loadingIcon: {
    icon: Refresh,
    hover: false
  }
}

export const AvatarProps: IAvatar = {
  userImage:
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
}

export const SignInIcon: IconProps = {
  icon: LoginCurve,
  hover: false,
  color: '#14141C'
}

//Link Atom
export const SignInStyles = {
  textColor: '#14141C',
  buttonColor: 'transparent',
  hoverColor: '#14141C'
}

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
