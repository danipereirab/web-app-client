import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home'
import Login from '../accounts/login'
import RegisterContainer from '../../containers/accounts/register-container'
import Error404 from '../errors/error404'

const Main = () => (
    <div className="row">
        <main id="main" className="main col-lg-12 col-md-12 col-xs-12">
            <section id="section">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={RegisterContainer}/>
                <Route component={Error404} />
            </Switch>
            </section>
        </main>
    </div>
)

export default Main




