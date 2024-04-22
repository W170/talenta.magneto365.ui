import React, { useState, useMemo } from 'react'
import { ArrowLeft2, BuildingWhite } from '@constants/icons.constants'
import { Divider, MainButton } from '@components/UI/atoms'
import { IUserMenuAnalystCompanyProps } from './UserMenuAnalystCompany.interface'
import { MenuDropdown, Link } from '@components/UI/atoms'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalystCompany.module.scss'

const UserMenuAnalystCompany: React.FC<IUserMenuAnalystCompanyProps> = ({ company, shareButtonProps }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const iconProps = useMemo(
    () => (shareButtonProps.iconProps ? shareButtonProps : { icon: BuildingWhite }),
    [shareButtonProps]
  )

  const subCompanies = useMediaQuery(
    company.subCompanies?.map((subcompany) => (
      <Link key={`${subcompany.name}-${subcompany.href}`} text={subcompany.name} href={subcompany.href} />
    ))
  )

  const shareButton = useMediaQuery(
    <div className={CNM.get({ styles, cls: ['user-menu-analyst-company__invite-btn-container'] })}>
      <MainButton iconProps={{ ...iconProps }} buttonText={shareButtonProps.buttonText} />
    </div>
  )

  return (
    <div className={CNM.get({ styles, cls: ['user-menu-analyst-company'] })}>
      <Divider />
      <MenuDropdown
        title={company.name}
        opened={isOpen}
        onClick={toggleMenu}
        suffixIcon={{ icon: ArrowLeft2, className: CNM.get({ styles, cls: ['user-menu-analyst-company__arrow'] }) }}
        className={CNM.get({ styles, cls: ['user-menu-analyst-company__dropdown'] })}
        listClassName={CNM.get({ styles, cls: ['user-menu-analyst-company__list'] })}
      >
        {subCompanies}
      </MenuDropdown>
      {isOpen && shareButton}
    </div>
  )
}

export default UserMenuAnalystCompany
