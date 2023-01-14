import {useState} from 'react'
import {useEffect} from 'react'

const useLocalStorageState = (initialValue, key) => {
  const [value, setValue] = useState(
    () => window.localStorage.getItem(key) ?? initialValue,
  )

  useEffect(() => {
    window.localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}

export {useLocalStorageState}
