type DebounceFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): DebounceFunction<T> => {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export default debounce
