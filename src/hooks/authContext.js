import { createContext, useEffect, useContext } from "react"
import useLocalStorage from "./useLocalStorage"
import { getCurrentUser, signupFn, loginFn, logoutFn } from "../services/auth"
import { message } from "antd"

const AuthContext = createContext()

export const AuthProvider = props => {
  // A state with the user in session (ideally reflected in LS (local storage))
  const [user, setUser] = useLocalStorage(null, "user")

  async function signup(newUser) {
    console.log('algo', newUser)
    try {
      const { data } = await signupFn(newUser)
      setUser(newUser)
      console.log(newUser)
    } catch (error) {
      message.error(error.response.data.message)
      console.log('Aqui esta el error', error.response)
  
    }
  }

// Methods to interact with the user (login, logout, check if there is a session on the server)
  async function login(user) {
    console.log('algo', user)
    try {
      const { data } = await loginFn(user)
      setUser(data)
      console.log(data)
    } catch (error) {
      message.error(error.response.data.message)
      console.log('Aqui esta el error', error.response)
  
    }
  }

  async function logout() {
    await logoutFn()
    setUser(null)
  }
 //SImilar to componentDidMount
  useEffect(() => {
// We ask the backend if there is a user in session, if so, we login to that user
    async function getSession() {
      const { data } = await getCurrentUser()
      if (data) {
        setUser(data)
      }
    }

    getSession()
  }, [setUser])

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, setUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthInfo = () => {
  const authCtxValue = useContext(AuthContext)
  return authCtxValue
}