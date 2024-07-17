import React from 'react'
import { Close } from '@constants/icons.constants'
import { ISelect2TagsProps } from './Select2Tags.interface'
import { Tag } from '@components/UI/atoms'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './Select2Tags.module.scss'

const Component = <T,>({ onRemove, tags, visible }: ISelect2TagsProps<T>): JSX.Element | null => {
  if (!visible || tags.length === 0) return null

  return (
    <div className={CNM.get({ styles, cls: ['select2-tags'] })}>
      {tags.map(({ id, name }) => (
        <Tag onClick={() => onRemove(id)} icon={Close} key={id} text={name} />
      ))}
    </div>
  )
}

/**
 * Molecule UI child component of select 2
 */
export const Select2Tags = Component
