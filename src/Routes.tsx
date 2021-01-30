import { Route, Switch } from 'react-router-dom'

import { LandingPage, Login } from './views'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/login' component={Login} />
        </Switch>
    )
}

export default Routes;