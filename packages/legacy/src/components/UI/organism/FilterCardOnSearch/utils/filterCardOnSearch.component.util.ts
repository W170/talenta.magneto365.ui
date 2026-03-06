import { ISearchRenderTypeOption } from '@components/UI/template'

export const refreshChildren = (
  params: number[] | string[] | undefined,
  setAppliedOptions: (value: React.SetStateAction<ISearchRenderTypeOption[]>) => void
) => {
  if (!params) return
  const parents: string[] = []
  for (const parent of params) {
    if (typeof parent !== 'string') return
    const [parentId] = parent.split('@')
    parents.push(parentId)
  }
  setAppliedOptions((current) => {
    return current.filter((option) => {
      return parents.find((parent) => String(parent) === String(option.parentId))
    })
  })
}

export const refreshParents = (
  filtersApplied: (string | number)[] | undefined,
  setAppliedOptions: (value: React.SetStateAction<ISearchRenderTypeOption[]>) => void
) => {
  setAppliedOptions((current) =>
    current.filter((opt) => filtersApplied?.find((optApplied) => String(optApplied) === String(opt.id)))
  )
}

export const cleanSearch = (
  refInput: React.RefObject<HTMLInputElement> | null,
  setOptions: React.Dispatch<React.SetStateAction<ISearchRenderTypeOption[]>>,
  time?: number
) => {
  setTimeout(() => {
    setOptions([])
    if (refInput?.current) {
      refInput.current.value = ''
    }
  }, time || 0)
}

export const getValues = (filtersApplied: (string | number)[] | undefined) => {
  return filtersApplied?.map((item) => {
    if (typeof item === 'string' || typeof item === 'number') return item
    return ''
  })
}
