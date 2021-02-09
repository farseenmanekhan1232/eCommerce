import React from 'react';
import { Route , BrowserRouter as Router,  Switch } from 'react-router-dom';
import Directory from '../../components/directory.component/directory.component';
import './homepage.styles.scss';

const HomePage = ()=>{
    return(
        <Router className='homepage'>
        <Switch>
            <Route exact path='/' component={Directory}></Route>
        </Switch>
            </Router>
    );
}
export default HomePage;