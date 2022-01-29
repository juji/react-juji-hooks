import { useRef } from 'react'


export default function useInterval(){


  const t = useRef()

  function clear(){
    if(t.current) clearTimeout(t.current)
    t.current = null
  }

  function interval(fn, n){
    clear()
    t.current = setTimeout(async () => {
      await fn()
      interval(fn, n)
    },n)
  }


  return [
    interval, clear
  ]

}
