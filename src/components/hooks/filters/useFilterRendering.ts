import React, { useCallback, useMemo } from 'react'
import { IFilterValue, ISetIsApplied } from '@components/UI/template'
import { FilterMenuItem } from '@components/UI/molecules/FilterMenuItem'

type UseFilterRenderingProps = {
  /**
   * array of filter values to be rendered
   */
  options: IFilterValue[]
  /**
   * currently applied option
   */
  appliedOption: IFilterValue | undefined
  /**
   * flag indicating if there are no options
   */
  hasntOptions: boolean
  /**
   * flag indicating if there are any options
   */
  hasTotal: boolean
  /**
   *  flag indicating if the options should be rendered horizontally
   */
  horizontal?: boolean
  /**
   * function to handle option selection
   */
  handleOptionSelected: (optionData: ISetIsApplied) => void
  /**
   * additional properties for the filter rendering
   */
  props: {
    field: string
    multiple: boolean
    loading: boolean
    type?: string
    [key: string]: unknown
  }
}

export const useFilterRendering = ({
  options,
  appliedOption,
  hasntOptions,
  hasTotal,
  handleOptionSelected,
  props
}: UseFilterRenderingProps) => {
  const renderItem = useCallback(
    (opt: IFilterValue, key = 0) => {
      return React.createElement(FilterMenuItem, {
        key: `${key}-${opt.label}`,
        ...opt,
        field: props.field,
        multiple: props.multiple,
        loading: props.loading,
        type: props.type,
        hasTotal,
        setIsApplied: (filter: ISetIsApplied) => handleOptionSelected(filter)
      })
    },
    [hasTotal, handleOptionSelected, props]
  )

  const optionsToRender = useMemo(() => {
    if (appliedOption) return [renderItem(appliedOption)]
    if (hasntOptions) return []
    return options.map(renderItem)
  }, [options, appliedOption, renderItem, hasntOptions])

  const horizontalOptionsToRender = useMemo(() => {
    return options.map((opt, key) =>
      React.createElement(FilterMenuItem, {
        key: `${key}-${opt.label}`,
        ...opt,
        field: props.field,
        multiple: props.multiple,
        loading: props.loading,
        type: props.type,
        hasTotal,
        setIsApplied: (filter: ISetIsApplied) => handleOptionSelected(filter)
      })
    )
  }, [options, props, hasTotal, handleOptionSelected])

  return {
    optionsToRender,
    horizontalOptionsToRender
  }
}
