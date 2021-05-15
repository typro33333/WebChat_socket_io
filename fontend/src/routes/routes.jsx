import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from '../screen/login';
import Chat from '../screen/chat';


export default class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Redirect path='/' to='/login' exact/>
                <Route path='/login' component={Login} />
                
                <Route exact path='/chat/:name/:key' component={Chat} />
            </Switch>
        )
    }
}