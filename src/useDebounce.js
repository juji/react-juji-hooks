import { useRef } from 'react'

export default function useDebounce( t = 500 ){

  const r = useRef()
  const debounce = (fn) => {
    if(r.current) clearTimeout(r.current)
    r.current = setTimeout(() => fn(),t)
  }

  return debounce;

}
