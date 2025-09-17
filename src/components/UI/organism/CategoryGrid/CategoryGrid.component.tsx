import React from 'react'
import { ICategoryGrid } from './CategoryGrid.interface'
import style from './CategoryGrid.module.scss'

const CategoryGrid = <T,>({ elements, render: Component, columnsNumber = 2, fullWidth }: ICategoryGrid<T>) => {
  const uiClass = 'magneto-ui-category-grid-wrapper'
  const isFullWidth = fullWidth ? style[`${uiClass}--disabled-padding`] : style[`${uiClass}--padding`]
  const gridStyle = {
    gridTemplateColumns: `repeat(${columnsNumber}, minmax(300px, 1fr))`
  }

  return (
    <div className={`${style[uiClass]} ${isFullWidth}`} style={gridStyle}>
      {elements.map((props, key) => (
        <Component key={key} {...props} />
      ))}
    </div>
  )
}

export default CategoryGrid
