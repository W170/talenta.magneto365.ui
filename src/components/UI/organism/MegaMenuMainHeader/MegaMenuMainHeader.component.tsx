import React from 'react'
import { Link, LogoComponent, MainButton, MegaMenuPopover } from '@components/UI/atoms'
import { MegaMenuJobsTabs, Searchbar } from '@components/UI/molecules'
import styles from './MegaMenuMainHeader.modules.scss'
import { SignInIcon, SignInStyles, SignUpButtonStyle, searchPropsButton, removePropsButton } from '@constants/stories'

const Component: React.FC = () => {
  return (
    <div className={styles['mega-menu-main-header']}>
      <LogoComponent logo={'static/media/src/assets/logo-magneto.svg'} />
      <div className={styles['mega-menu-main-header__search']}>
        <Searchbar
          onSearch={(value) => {
            console.log(value)
          }}
          searchButtonProps={searchPropsButton}
          removeButtonProps={removePropsButton}
          termValue={null}
          placeholder={'Busqueda por hubicacion'}
        />
        <MegaMenuPopover>
          <MegaMenuJobsTabs />
        </MegaMenuPopover>
      </div>
      <div className={styles['mega-menu-main-header__login']}>
        <Link
          type={'button'}
          href={'https://login.magneto365.com/candidates?'}
          text={'Iniciar Sesion'}
          iconProps={{ ...SignInIcon, size: 15 }}
          linkStyles={SignInStyles}
        />

        <MainButton
          {...SignUpButtonStyle}
          buttonText={'Crear cuenta'}
          onClick={() => {
            console.log('')
          }}
          buttonSize={'medium'}
          iconProps={{ ...SignUpButtonStyle.iconProps, size: 15 }}
        />
      </div>
    </div>
  )
}

export const MegaMenuMainHeader = Component
