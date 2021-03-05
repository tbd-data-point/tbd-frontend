import { Route, Switch } from 'react-router-dom'

import { LandingPage, Login, Signup, Solutions, Industries, Resources } from './views'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/solutions' component={Solutions} />
            <Route path='/industries' component={Industries} />
            <Route path='/resources' component={Resources} />
        </Switch>
    )
}

export default Routes;