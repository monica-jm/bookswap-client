import { useState } from "react"

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  // Ligar valor con función on change, toma el evento y ejecuta set value al target, para controlar el input
  const bind = {
    value,
    onChange: e => setValue(e.target.value)
  }
  return [value, bind]
}