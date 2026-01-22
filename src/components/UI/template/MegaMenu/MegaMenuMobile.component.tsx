import React, { useCallback, useState } from 'react'
import { MegaMenuProvider } from './MegaMenu.context'
import { IMegaMenuContext } from './MegaMenuContext.interface'
import { MegaMenuMainHeader } from '@components/UI/organism/MegaMenuMainHeader/MegaMenuMainHeader.component'
import styles from './MegaMenu.module.scss'
import { IMegaMenu } from './MegaMenu.interface'
import { MegaMenuDrawer } from '@components/UI/organism/MegaMenuDrawer'

const Component: React.FC<IMegaMenuContext & IMegaMenu> = ({ socialHeaderVariantProps, ...props }) => {
  const [showDrawer, setShowDrawer] = useState(false)

  const toogleDrawer = useCallback(() => {
    setShowDrawer(!showDrawer)
  }, [showDrawer])

  return (
    <MegaMenuProvider {...props}>
      <header className={styles['mega-menu']}>
        <div className={styles['mega-menu__main-header']}>
          <MegaMenuMainHeader toggleDrawerMenu={toogleDrawer} />
          <MegaMenuDrawer
            isOpen={showDrawer}
            onClose={toogleDrawer}
            socialHeaderVariantProps={socialHeaderVariantProps}
          />
        </div>
      </header>
    </MegaMenuProvider>
  )
}

export const MegaMenuMobile = Component
