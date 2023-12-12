export const sliceArrays = <T>(originalArray: T[], slices: number) => {
  if (!originalArray?.length) return []
  const newArray = []
  for (let i = 0; i < originalArray.length; i += slices) {
    const oneSlice = originalArray.slice(i, i + slices)
    newArray.push(oneSlice)
  }
  return newArray
}
