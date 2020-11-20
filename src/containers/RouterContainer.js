import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {
  Home,
  Dashboard,
  Products,
  About,
  /* Login,
  Register, */
  Debug,
} from '../pages'

const RouterContainer = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        {/* <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route> */}
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/debug'>
          <Debug />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterContainer
