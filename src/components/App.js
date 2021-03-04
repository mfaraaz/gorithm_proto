import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Practice from './Practice'
import CP from './CP'
import Question from './Question'
import './styles.css';

const App = () => {
    return (
        <div className='navbar-container'>
            <Header />
            <BrowserRouter>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/practice'>
                    <Practice />
                </Route>
                <Route exact path='/cp'>
                    <CP />
                </Route>
                <Route exact path={'/question'}>
                    <Question />
                </Route>
            </BrowserRouter>

        </div>
    );
};

export default App;