import { createElement } from 'react'
import { ITypographyBase } from './Typography.interface'
import { classNames } from '@shared/utils/common'
import styles from './Typography.module.scss'

const cx = classNames.bind(styles)

export const typographyStyles = ({ className, color, ellipsis, size, style, weight }: ITypographyBase) => {
  const customizedClassName = {
    [`magneto-ui-typography--color-${color}`]: color ? true : false,
    [`magneto-ui-typography--size-${size}`]: size && typeof size === 'string' ? true : false,
    [`magneto-ui-typography--weight-${weight}`]: weight && typeof weight === 'string' ? true : false,
    ['magneto-ui-typography--ellipsis']: ellipsis === true,
    ['magneto-ui-typography--ellipsis-multiline']: typeof ellipsis === 'object' && typeof ellipsis.rows === 'number'
  }

  const finalClassName = cx('magneto-ui-typography', customizedClassName, className)

  const finalStyle = {
    ...(typeof size === 'number' && { '--size': `${size}px` }),
    ...(typeof weight === 'number' && { '--weight': weight }),
    ...(typeof ellipsis === 'object' && ellipsis.rows && { '--ellipsis-lines': ellipsis.rows })
  } as React.CSSProperties

  return {
    className: finalClassName,
    style: { ...(Object.keys(finalStyle).length ? finalStyle : undefined), ...style }
  }
}

export const applyWrappers = (children: React.ReactNode, props: ITypographyBase) => {
  const wrappers = [
    props.code ? { tag: 'code', className: 'magneto-ui-typography--code' } : null,
    props.delete ? { tag: 'del', className: 'magneto-ui-typography--delete' } : null,
    props.italic ? { tag: 'i', className: 'magneto-ui-typography--italic' } : null,
    props.keyboard ? { tag: 'kbd', className: 'magneto-ui-typography--keyboard' } : null,
    props.mark ? { tag: 'mark', className: 'magneto-ui-typography--mark' } : null,
    props.strong ? { tag: 'strong', className: 'magneto-ui-typography--strong' } : null,
    props.underline ? { tag: 'u', className: 'magneto-ui-typography--underline' } : null
  ].filter(Boolean) as { tag: keyof JSX.IntrinsicElements; className: string }[]

  if (wrappers.length === 1) {
    return createElement(wrappers[0].tag, { className: cx(wrappers[0].className) }, children)
  }

  return wrappers.reduce((acc, { tag, className }) => createElement(tag, { className: cx(className) }, acc), children)
}

export const OMITTED_PROPS: (keyof ITypographyBase)[] = [
  'className',
  'style',
  'color',
  'ellipsis',
  'size',
  'weight',
  'code',
  'delete',
  'italic',
  'keyboard',
  'mark',
  'strong',
  'underline'
]

export const omitTypographyProps = <T extends object>(props: T): Omit<T, keyof ITypographyBase> => {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) => !OMITTED_PROPS.includes(key as keyof ITypographyBase))
  ) as Omit<T, keyof ITypographyBase>
}
