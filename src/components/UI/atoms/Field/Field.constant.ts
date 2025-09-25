export function combineRefs<T>(node: T, ...refs: (React.Ref<T> | undefined)[]) {
  for (const ref of refs) {
    if (!ref) continue

    if (typeof ref === 'function') {
      ref(node)
    } else {
      (ref as React.MutableRefObject<T | null>).current = node
    }
  }
}
