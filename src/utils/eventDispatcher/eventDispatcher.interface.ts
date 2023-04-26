export enum EventType {
  UPDATE_DIMENSION = 'UPDATE_DIMENSION'
}

export interface IEventBase {
  type: EventType
}

type DimType = 'xs' | 'sm' | 'md' | 'hd' | 'lg' | 'xl' | 'xxl'

export interface Dimension {
  type: DimType
  size: number
}

export interface UpdateDimensionEvent extends IEventBase {
  dim: Dimension
}

export interface Events {
  [EventType.UPDATE_DIMENSION]: UpdateDimensionEvent
}
