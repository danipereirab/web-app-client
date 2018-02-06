import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../home/home'
import SignInContainer from '../../containers/accounts/signin-container'
import SignUpContainer from '../../containers/accounts/signup-container'
import ProfileContainer from '../../containers/accounts/profile-container'
import Error401 from '../errors/error401'
import Error404 from '../errors/error404'


const _Main = (props) => {
    const { isAuthenticated } = props
    return(
        <div className="row">
            <main id="main" className="main col-lg-12 col-md-12 col-xs-12">
                <section id="section">
                <Switch>
                    <Route exact path='/'   component={Home}/>
                    <Route path='/signin'    component={SignInContainer}/>
                    <Route path='/signup' component={SignUpContainer}/>
                   
                    <Route path='/profile' componet={ProfileContainer} render={() => (isAuthenticated ? (<ProfileContainer />) : (<Error401/>))}/>
                    
                    <Route component={Error404} />
                </Switch>
                </section>
            </main>
        </div>
    )
}

export default _Main







