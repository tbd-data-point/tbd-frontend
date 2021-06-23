import { Route, Switch } from 'react-router-dom'
import * as React from 'react'

import { Loading } from './views'

const LandingPage = React.lazy(
  () => import('./views/LandingPage'),
)

const Login = React.lazy(() => import('./views/Login'))

const Signup = React.lazy(() => import('./views/Signup'))

const Solutions = React.lazy(
  () => import('./views/Solutions'),
)

const Industries = React.lazy(
  () => import('./views/Industries'),
)

const Company = React.lazy(
  () => import("./views/Company"),
)

const Resources = React.lazy(
  () => import('./views/Resources'),
)

const Settings = React.lazy(
  () => import('./views/app/Settings'),
)

const TestPage = React.lazy(
  () => import('./views/TestPage'),
)

const OffersList = React.lazy(
  () => import('./views/OffersList'),
)

const UploadOffer = React.lazy(
  () => import('./views/UploadOffer'),
)

const Dashboard = React.lazy(
  () => import('./views/Dashboard'),
)

const ClientDashboard = React.lazy(
  () => import('./views/ClientDashboard'),
)

const Routes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/company" component={Company}/>
        <Route path="/industries" component={Industries} />
        <Route path="/resources" component={Resources} />
        <Route path="/app/settings" component={Settings} />
        {process.env.NODE_ENV ||
        process.env.NODE_ENV == 'development' ? (
          <Route path="/testing" component={TestPage} />
        ) : null}

        <Route path="/app/offers" component={OffersList} />
        <Route
          path="/app/addOffer"
          component={UploadOffer}
        />
        <Route
          path="/app/dashboard"
          component={Dashboard}
        />
        <Route
          path="/app/clientdashboard"
          component={ClientDashboard}
        />
        <Route
          path="/app/editOffer/:data"
          component={UploadOffer}
        />
      </Switch>
    </React.Suspense>
  )
}

export default Routes
