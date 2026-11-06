import { PopoverElement } from './FieldList.interface'

const PLACED_STYLE = ['top', 'right', 'bottom', 'left', 'width']

export const supportsPopover = (node: HTMLDivElement): node is PopoverElement =>
  typeof (node as PopoverElement).showPopover === 'function'

export const clearListPlacement = (listNode: HTMLElement) => {
  PLACED_STYLE.forEach((property) => listNode.style.removeProperty(property))
}

const listAnchor = (listNode: HTMLElement) => {
  const field = listNode.closest('[data-slot="field"]')

  return field?.querySelector('[data-slot="field-input"]') ?? listNode.closest('[data-slot="field-list-wrapper"]')
}

export const placeListSide = (listNode: HTMLElement) => {
  const anchor = listAnchor(listNode)
  if (!anchor) return

  const anchorRect = anchor.getBoundingClientRect()
  listNode.style.width = `${anchorRect.width}px`

  const needed = listNode.getBoundingClientRect().height
  if (!needed) return

  const spaceBelow = window.innerHeight - anchorRect.bottom
  const openUp = spaceBelow < needed && anchorRect.top > spaceBelow

  listNode.style.top = `${openUp ? anchorRect.top - needed : anchorRect.bottom}px`
  listNode.style.left = `${anchorRect.left}px`
  listNode.dataset.side = openUp ? 'up' : 'down'
}

export const isCoveredByOverlay = (listNode: HTMLElement) => {
  const field = listNode.closest('[data-slot="field"]')
  const input = field?.querySelector('[data-slot="field-input"]')
  if (!field || !input) return false

  const { left, top, width, height } = input.getBoundingClientRect()
  const hit = document.elementFromPoint(left + width / 2, top + height / 2)

  return Boolean(hit && !field.contains(hit))
}

const anchorKey = (listNode: HTMLElement) => {
  const anchor = listAnchor(listNode)
  if (!anchor) return ''

  const { top, left, width, height } = anchor.getBoundingClientRect()

  return `${top}|${left}|${width}|${height}`
}

export const watchListLayout = (listNode: HTMLElement, onChange: () => void) => {
  onChange()

  const observer = new ResizeObserver(onChange)
  observer.observe(listNode)

  let ancestor = listNode.closest('[data-slot="field-list-wrapper"]')?.parentElement
  while (ancestor) {
    observer.observe(ancestor)
    ancestor = ancestor.parentElement
  }

  let frame = 0
  let lastAnchor = anchorKey(listNode)
  const trackAnchor = () => {
    const nextAnchor = anchorKey(listNode)
    if (nextAnchor !== lastAnchor) {
      lastAnchor = nextAnchor
      onChange()
    }
    frame = requestAnimationFrame(trackAnchor)
  }

  frame = requestAnimationFrame(trackAnchor)
  window.addEventListener('scroll', onChange, true)
  window.addEventListener('resize', onChange)

  return () => {
    cancelAnimationFrame(frame)
    observer.disconnect()
    window.removeEventListener('scroll', onChange, true)
    window.removeEventListener('resize', onChange)
  }
}
