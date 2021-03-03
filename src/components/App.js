import React, { Component, useState } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Practice from './Practice'
import CP from './CP'
import Question from './Question'
import './styles.css';

const App = () => {
    const [question,setQuestion]=useState({id:0});
    console.log(question);
    return (
        <div className='navbar-container'>
            <Header />
            <BrowserRouter>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/practice'>
                    <Practice setQuestion={setQuestion}/>
                </Route>
                <Route exact path='/cp'>
                    <CP />
                </Route>
                <Route exact path={'/practice/'+question.id}>
                    <Question question={question} />
                </Route>
            </BrowserRouter>

        </div>
    );
};

export default App;