import { useState } from "react"

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  // Object with the 2 controllers an input needs
  const bind = {
    value,
    onChange: e => setValue(e.target.value)
  }
  return [value, bind]
}