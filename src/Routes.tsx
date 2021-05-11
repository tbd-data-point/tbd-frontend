import { Route, Switch } from 'react-router-dom'

import { LandingPage, Login, Signup, Solutions, Industries, Resources, WorkerSettings, TestPage, Company } from './views'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/solutions' component={Solutions} />
            <Route path='/industries' component={Industries} />
            <Route path='/resources' component={Resources} />
            <Route path='/app/settings' component={WorkerSettings} />
            <Route path='/company' component={Company} />
            <Route path='/testing' component={TestPage} />
        </Switch>
    )
}

export default Routes;