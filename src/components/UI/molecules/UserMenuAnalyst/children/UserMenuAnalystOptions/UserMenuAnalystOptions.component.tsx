import React, { useMemo } from 'react'
import { Divider } from '@components/UI/atoms'
import { IUserMenuAnalystOptionsProps } from './UserMenuAnalystOptions.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './UserMenuAnalystOptions.module.scss'
import { Option } from './children'

const Component: React.FC<IUserMenuAnalystOptionsProps> = ({ className, optionClassNames, options, queryString }) => {
  const isLastSection = useMemo(() => options?.length === 1, [options])

  return (
    <div className={CNM.get({ styles, cls: ['user-menu-analyst-options', className] })}>
      {options?.map((option, i) => (
        <React.Fragment key={`user-menu-analyst-section-${i}`}>
          {option.children?.map((item, j) => (
            <Option
              key={`user-menu-analyst-option-${j}`}
              option={item}
              classNames={optionClassNames}
              queryString={queryString}
            />
          ))}

          {!isLastSection && i < options.length - 1 && (
            <div className={CNM.get({ styles, cls: ['user-menu-analyst-options__divider'] })}>
              <Divider />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

/**
 * Molecule UI child component of user menu analyst
 */
export const UserMenuAnalystOptions = Component
