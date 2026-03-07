export function combineRefs<T>(node: T, ...refs: (React.Ref<T> | undefined)[]) {
  for (const ref of refs) {
    if (!ref) continue

    if (typeof ref === 'function') {
      ref(node)
      continue
    }

    const mutableRef = ref as React.MutableRefObject<T | null>
    mutableRef.current = node
  }
}
