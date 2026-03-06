import React from 'react'

export const getChildrenByType = (children: React.ReactNode, type: React.ElementType) =>
  React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === type)

export const getAllItems = (children: React.ReactNode, type: React.ElementType) => {
  const items: React.ReactNode[] = []
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === type)
      React.Children.forEach(child.props.children, (item) => items.push(item))
  })
  return items
}
