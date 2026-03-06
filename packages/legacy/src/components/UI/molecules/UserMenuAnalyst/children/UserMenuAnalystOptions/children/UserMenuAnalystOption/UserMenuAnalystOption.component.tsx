import React, { useCallback, useState, useEffect } from 'react'
import { getOptionType } from './UserMenuAnalystOption.constants'
import { Actions } from './children'
import { ArrowLeft2 } from '@constants/icons.constants'
import { IUserMenuAnalystOption, IUserMenuAnalystOptionProps } from './UserMenuAnalystOption.interface'
import { MenuDropdown } from '@components/UI/atoms'
import { userMenuAnalystIcons } from '../../../../UserMenuAnalyst.constants'
import { UserMenuAnalystTitle as Title } from '../UserMenuAnalystTitle'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalystOption.module.scss'

const Component: React.FC<IUserMenuAnalystOptionProps> = ({
  classNames,
  option,
  handleModal,
  handleMenuOpen,
  isOpen,
  queryString = {}
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false)

  useEffect(() => {
    setIsOpenDropdown(false)
  }, [isOpen])

  const url = useCallback(
    (option: IUserMenuAnalystOption) => {
      if (option.data && !Array.isArray(option.data) && typeof option.data === 'string') {
        const hasParams = option.data.includes('?')
        const delimiter =
          option.useQueryString !== false && (queryString || option?.selfQueryString) && hasParams ? '&' : ''

        const queryStringParams = Object.entries({ ...queryString, ...option?.selfQueryString })
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
          .join('&')

        return option.useQueryString !== false && queryStringParams
          ? `${option.data}${hasParams ? delimiter : '?'}${queryStringParams}`
          : option.data
      }
    },
    [queryString]
  )

  if (!Array.isArray(option.data)) {
    const OptionType = getOptionType(option.type)

    if (!OptionType) return null

    return (
      <div className={CNM.get({ styles, cls: ['user-menu-analyst-option__object'] })}>
        <OptionType
          className={CNM.get({ styles, cls: [classNames?.link] })}
          option={option}
          url={url(option)}
          handleModal={handleModal}
          handleMenuOpen={handleMenuOpen}
          prefix={
            <Actions
              actions={option.prefix || []}
              getUrl={url}
              handleModal={handleModal}
              handleMenuOpen={handleMenuOpen}
              option={option}
            />
          }
          suffix={
            <Actions
              actions={option.suffix || []}
              getUrl={url}
              handleModal={handleModal}
              handleMenuOpen={handleMenuOpen}
              option={option}
            />
          }
        />
      </div>
    )
  }

  return (
    <MenuDropdown
      title={<Title title={option.title || ''} subTitle={option.subTitle} />}
      opened={isOpenDropdown}
      onClick={() => setIsOpenDropdown(!isOpenDropdown)}
      listClassName={CNM.get({ styles, cls: ['user-menu-analyst-option__dropdown-list'] })}
      suffixIcon={{ icon: ArrowLeft2, className: CNM.get({ styles, cls: ['user-menu-analyst-option__arrow'] }) }}
      prefixIcon={{
        icon: option.icon && userMenuAnalystIcons[option.icon] ? userMenuAnalystIcons[option.icon] : option.icon
      }}
      className={CNM.get({
        styles,
        cls: [
          'user-menu-analyst-option__dropdown',
          isOpenDropdown && 'user-menu-analyst-option__dropdown--open',
          classNames?.dropdown
        ]
      })}
    >
      {option.data?.map((item, i) => (
        <React.Fragment key={`option-${item.title}-${i}`}>
          {item.title && (
            <span className={CNM.get({ styles, cls: ['user-menu-analyst-option__dropdown-title'] })}>{item.title}</span>
          )}
          {item?.children?.map((child, j) => (
            <Component
              key={`option-${child.title}-${j}`}
              classNames={{
                link: classNames?.link || '',
                dropdown: classNames?.dropdown || ''
              }}
              option={child}
              queryString={queryString}
              handleModal={handleModal}
              handleMenuOpen={handleMenuOpen}
            />
          ))}
        </React.Fragment>
      ))}
    </MenuDropdown>
  )
}

/**
 * Molecule UI grand child component of menu dropdown
 */
export const UserMenuAnalystOption = Component
