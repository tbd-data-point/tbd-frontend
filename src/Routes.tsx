import { Route, Switch } from 'react-router-dom'

import { LandingPage, Login, Signup } from './views'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
        </Switch>
    )
}

export default Routes;