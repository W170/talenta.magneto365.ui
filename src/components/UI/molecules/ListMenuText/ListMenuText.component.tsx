import React from 'react'
import { classMUI } from '@constants/stories.constants'
import style from './ListMenuText.module.scss'

const listMenuText = {
  title: 'Personas',
  list: [
    {
      text: 'Conoce Magneto',
      href: '#'
    },
    {
      text: 'Ver todos los empleos',
      href: '#'
    },
    {
      text: 'Crear cuenta',
      href: '#'
    },
    {
      text: 'Articulos de interes',
      href: '#'
    },
    {
      text: 'Preguntas frecuentes',
      href: '#'
    },
    {
      text: 'Empleos por ciudad',
      href: '#'
    },
    {
      text: 'Empleos por sector',
      href: '#'
    },
    {
      text: 'Empleos por empresas',
      href: '#'
    }
  ]
}
const ListMenuText = () => {
  return (
    <div className={`${style[`${classMUI}-list-menu`]}`}>
      <p className={`${style[`${classMUI}-list-menu__title`]}`}>{listMenuText.title}</p>
      {listMenuText.list.map(({ href, text }, i) => (
        <a className={`${style[`${classMUI}-list-menu__link`]}`} key={i} href={href}>
          {text}
        </a>
      ))}
    </div>
  )
}

export default ListMenuText
