import { screenSize } from '../../constants/responsive.constants'
import { Dimension, DimType, EventDispatcher } from '../eventDispatcher'

export class ResponsiveManagement {
  private dim: Dimension

  constructor() {
    const type = this.getType(window.innerWidth)
    this.dim = {
      size: screenSize[type],
      type
    }
  }

  public run(eventDispatcher: EventDispatcher) {
    eventDispatcher.dipatch('UPDATE_DIMENSION', { dim: this.dim })
    window.addEventListener('resize', () => this.update(eventDispatcher))
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
