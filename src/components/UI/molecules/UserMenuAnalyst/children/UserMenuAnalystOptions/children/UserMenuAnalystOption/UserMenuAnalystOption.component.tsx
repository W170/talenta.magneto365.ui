import React, { useMemo, useState } from 'react'
import { ArrowLeft2 } from '@constants/icons.constants'
import { IUserMenuAnalystOption, IUserMenuAnalystOptionProps } from './UserMenuAnalystOption.interface'
import { MenuDropdown } from '@components/UI/atoms'
import { MenuIcon } from '@components/UI/molecules'
import { userMenuAnalystIcons } from '../../../../UserMenuAnalyst.constants'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalystOption.module.scss'

const Component: React.FC<IUserMenuAnalystOptionProps> = ({ classNames, option, queryString = {} }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false)
  const { useQueryString = false, isLinkHighlighted = false, rel = 'noreferrer', target = '_self' } = option

  const url = useMemo(() => {
    if (option.data && !Array.isArray(option.data) && typeof option.data === 'string') {
      const hasParams = option.data?.includes('?')
      const delimiter = useQueryString && queryString && hasParams ? '&' : ''

      const queryStringParams = Object.entries(queryString)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
        .join('&')

      return useQueryString && queryStringParams
        ? `${option.data}${hasParams ? delimiter : '?'}${queryStringParams}`
        : option.data
    }
  }, [option.data, queryString, useQueryString])

  if (!Array.isArray(option.data)) {
    return (
      <MenuIcon
        className={CNM.get({
          styles,
          cls: [
            'user-menu-analyst-option__link',
            isLinkHighlighted && 'user-menu-analyst-option__link--highlighted',
            classNames?.link
          ]
        })}
        text={option.title || ''}
        icon={option.icon && userMenuAnalystIcons[option.icon] ? userMenuAnalystIcons[option.icon] : option.icon}
        iconSize={18}
        url={url}
        type={typeof option.data === 'function' ? 'button' : 'link'}
        onClick={
          typeof option.data === 'function'
            ? () => (option.data as (option: IUserMenuAnalystOption) => void)(option)
            : undefined
        }
        target={target}
        rel={rel}
      />
    )
  }

  return (
    <MenuDropdown
      title={option.title || ''}
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
          {item?.children?.map((child, j) => (
            <Component
              key={`option-${child.title}-${j}`}
              classNames={{
                link: classNames?.link || '',
                dropdown: classNames?.dropdown || ''
              }}
              option={child}
              queryString={queryString}
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
