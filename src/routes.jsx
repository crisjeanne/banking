import { BrowserRouter,Route,Switch } from "react-router-dom"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
  )
}

export default Routes