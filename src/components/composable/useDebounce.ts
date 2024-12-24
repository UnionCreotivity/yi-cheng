export const useDebounce = (fn: (...args: any[]) => void, delay: number = 500) => {
  let timer: any
  return (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
