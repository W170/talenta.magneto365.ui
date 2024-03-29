import { screenSize } from '../../constants/responsive.constants'
import { Dimension, DimType, EventDispatcher } from '../eventDispatcher'

export class ResponsiveManagement {
  private dim: Dimension
  // callback to execute the update with a specific event dispatcher
  private callback?: () => void
  constructor() {
    this.dim = { size: screenSize.hd, type: 'hd' }
  }

  public run(eventDispatcher: EventDispatcher) {
    const type = this.getType(window.innerWidth)
    this.dim = { size: screenSize[type], type }

    if (this.callback) {
      removeEventListener('resize', this.callback)
    }
    this.callback = () => this.update(eventDispatcher)
    eventDispatcher.dispatch('UPDATE_DIMENSION', { dim: this.dim })
    addEventListener('resize', this.callback)
  }

  private update(eventDispatcher: EventDispatcher): void {
    const newType = this.getType(window.innerWidth)
    if (newType === this.dim.type) return
    this.dim = {
      size: screenSize[newType],
      type: newType
    }
    eventDispatcher.dispatch('UPDATE_DIMENSION', { dim: this.dim })
  }

  private getType(width: number): DimType {
    if (width < screenSize.sm) return 'xs'
    if (width < screenSize.md) return 'sm'
    if (width < screenSize.lg) return 'md'
    if (width < screenSize.xl) return 'lg'
    if (width < screenSize.hd) return 'xl'
    if (width < screenSize.xxl) return 'hd'
    return 'xxl'
  }

  public getDim() {
    return this.dim
  }
}
