import { Route, Switch } from 'react-router-dom'

import {
  LandingPage,
  Login,
  Signup,
  Solutions,
  Industries,
  Resources,
  WorkerSettings,
  TestPage,
  OffersList,
  UploadOffer,
  Dashboard,
  ClientDashboard,
  Company
} from './views'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/industries" component={Industries} />
      <Route path="/resources" component={Resources} />
      <Route path="/company" component={Company}/>
      <Route
        path="/app/settings"
        component={WorkerSettings}
      />
      <Route path="/testing" component={TestPage} />
      <Route path="/app/offers" component={OffersList} />
      <Route path="/app/addOffer" component={UploadOffer} />
      <Route path="/app/dashboard" component={Dashboard} />
      <Route
        path="/app/clientdashboard"
        component={ClientDashboard}
      />
      <Route
        path="/app/editOffer/:data"
        component={UploadOffer}
      />
    </Switch>
  )
}

export default Routes
