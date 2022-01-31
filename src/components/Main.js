import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/Login'
import Shop from './Shop/Shop'
import Home from './Home/Home';
import Registration from "./Registration/Registration";
import databaseInfo from "./EmployeeDetails/databaseInfo";
import UserProjects from "./Projects/UserProjects";
import Rank from './Rank/Rank'

import User from "./Home/User";
import Admin from "./Home/Admin";

import './Main.css'

const Main = () =>{

    return(
        <div className={"Main"}>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/home' component={User}/>
                <Route exact path='/admin' component={Admin}/>
                <Route exact path='/registration' component={Registration}/>
                {/*<Route exact path='/employd' component={databaseInfo}/>*/}
                <Route exact path='/projects' component={UserProjects}/>
                <Route path="/projects/rank/:id">
                    <Rank />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;