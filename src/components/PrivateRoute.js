import { Route, Redirect } from "react-router-dom"
import { useAuthInfo } from "../hooks/authContext"

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuthInfo()
  return (
    <Route
      {...rest}
      render={props =>
        user ? <Component {...props} /> : <Redirect to='/auth' />
      }
    />
  )
}

export default PrivateRoute