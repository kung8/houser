import React, {Component} from 'react';
import { Switch , Route} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

export default class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/wizard" component={Wizard}/>
            </Switch>
        )}

}
   
  

