import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Dashboard from './Dashboard/Dashboard'
import ChallengeViewer from './ChallengeViewer/ChallengeViewer'
import ChallengeCreator from './ChallengeCreator/ChallengeCreator'

// const AuthenticatedRoute = ({ component: Component, ...rest}) => {
//     return <Route
//         {...rest}
//         render={props => localStorage.getItem("token") ? <Component {...props}/> : <Redirect to={'/'}/>}
//     />
// };

export default () => (
    <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route exact path={'/home'} component={Dashboard} />
        <Route exact path={'/challenge'} component={ChallengeViewer} />
        <Route exact path={'/challenge/create'} component={ChallengeCreator} />
    </Switch>
)
