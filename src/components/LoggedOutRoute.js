  import { Route, Redirect } from "react-router-dom"
import { useAuthInfo } from "../hooks/authContext"

function LoggedOutRoute({ component: Component, ...rest }) {
  const { user } = useAuthInfo()
  return (
    <Route
      {...rest}
      render={props =>
        !user ? <Component {...props} /> : <Redirect to='/explore' />
      }
    />
  )
}

export default LoggedOutRoute