import { useState, useEffect } from "react"
// Creamos un custom hook para reutilizar cuantas veces queramos la logica de almacenar una propiedad del estado de nuestros componentes en local storage, asi persisten aun que se recargue la pagina
function useLocalStorage(initialValue, key) {
  // We check that there is a property with that name that has content
  const stored = localStorage.getItem(key)
  // if there is content we parse it or if we don't define initial to the value provided by the params
  const initial = stored ? JSON.parse(stored) : initialValue
  //  Our custom hook keeps the record of its own property and with the change in it, we save the new value in local storage (thanks to useEffect)
  const [value, setValue] = useState(initial)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])
  // If the value changes thanks to the setValue, our useEffect fires, thus synchronizing the state with our local storage.

  return [value, setValue]
}

export default useLocalStorage