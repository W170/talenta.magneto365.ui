import React from 'react'
import { ICategoryGrid } from './CategoryGrid.interface'
import style from './CategoryGrid.module.scss'

const CategoryGrid = <T,>({ elements, render: Component, columnsNumber = 2 }: ICategoryGrid<T>) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columnsNumber}, minmax(300px, 1fr))`
  }

  return (
    <div className={style['magneto-ui-category-grid-wrapper']} style={gridStyle}>
      {elements.map((props, key) => (
        <Component key={key} {...props} />
      ))}
    </div>
  )
}

export default CategoryGrid
