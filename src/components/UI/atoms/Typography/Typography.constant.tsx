import { createElement } from 'react'
import { ITypographyBase } from './Typography.interface'
import { classNames } from '@shared/utils/common'
import styles from './Typography.module.scss'

const cx = classNames.bind(styles)

export const typographyStyles = ({ color, size, weight }: ITypographyBase) => {
  return cx('magneto-ui-typography', {
    [`magneto-ui-typography--color-${color}`]: color ? true : false,
    [`magneto-ui-typography--size-${size}`]: size ? true : false,
    [`magneto-ui-typography--weight-${weight}`]: weight ? true : false
  })
}

export const applyWrappers = (children: React.ReactNode, props: ITypographyBase) => {
  const wrappers = [
    props.code && { tag: 'code', className: 'magneto-ui-typography--code' },
    props.delete && { tag: 'del', className: 'magneto-ui-typography--delete' },
    props.italic && { tag: 'i', className: 'magneto-ui-typography--italic' },
    props.keyboard && { tag: 'kbd', className: 'magneto-ui-typography--keyboard' },
    props.mark && { tag: 'mark', className: 'magneto-ui-typography--mark' },
    props.strong && { tag: 'strong', className: 'magneto-ui-typography--strong' },
    props.underline && { tag: 'u', className: 'magneto-ui-typography--underline' }
  ].filter(Boolean) as { tag: keyof JSX.IntrinsicElements; className: string }[]

  if (wrappers.length === 1) {
    return createElement(wrappers[0].tag, { className: cx(wrappers[0].className) }, children)
  }

  return wrappers.reduce((acc, { tag, className }) => createElement(tag, { className: cx(className) }, acc), children)
}
