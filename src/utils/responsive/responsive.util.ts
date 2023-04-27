import { screenSize } from '../../constants/responsive.constants'
import { Dimension, DimType, EventDispatcher } from '../eventDispatcher'

export class ResponsiveManagement {
  private dim: Dimension
  // callback to execute the update with a specific event dispatcher
  private callback?: () => void
  constructor() {
    const type = this.getType(window.innerWidth)
    this.dim = {
      size: screenSize[type],
      type
    }
  }

  public run(eventDispatcher: EventDispatcher) {
    if (this.callback) {
      removeEventListener('resize', this.callback)
    }
    this.callback = () => this.update(eventDispatcher)
    eventDispatcher.dipatch('UPDATE_DIMENSION', { dim: this.dim })
    addEventListener('resize', this.callback)
  }

  private update(eventDispatcher: EventDispatcher): void {
    const newType = this.getType(window.innerWidth)
    if (newType === this.dim.type) return
    this.dim = {
      size: screenSize[newType],
      type: newType
    }
    eventDispatcher.dipatch('UPDATE_DIMENSION', { dim: this.dim })
  }

  private getType(width: number): DimType {
    if (screenSize.xxl <= width) return 'xxl'
    if (screenSize.hd <= width) return 'hd'
    if (screenSize.xl <= width) return 'xl'
    if (screenSize.lg <= width) return 'lg'
    if (screenSize.md <= width) return 'md'
    if (screenSize.sm <= width) return 'sm'
    return 'xs'
  }

  public getDim() {
    return this.dim
  }
}
