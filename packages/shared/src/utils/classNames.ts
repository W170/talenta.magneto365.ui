export const classNames = {
  bind: (stylesObj: Record<string, string | undefined>) => {
    return (...params: Array<string | null | undefined | Record<string, boolean | undefined | null>>) =>
      params
        // avoid nullish
        .filter((param) => param != null)
        .map((cls) => {
          if (typeof cls === 'string') return stylesObj[cls] ?? cls
          // cls is an object with boolean values
          return Object.entries(cls as Record<string, boolean | undefined | null>)
            .filter(([, value]) => value)
            .map(([key]) => stylesObj[key] ?? key)
            .join(' ')
        })
        .join(' ')
  }
}
