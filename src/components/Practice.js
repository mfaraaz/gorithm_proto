import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import './styles.css';
import Container from 'react-bootstrap/Container';
import questions from './questions';
import Question from './Question';


const Practice = ({ setQuestion }) => {
    const [qn,setQn]=useState({id:0});
    const renderQns = () => questions.map((q) => {
        const question = q.question.substring(0, 50);
        // qn=question;
        return (
            <div key={q.id}>
                <div className="question-body">
                    <Link to={'/practice/' + q.id}>
                        <button onClick={()=>{setQn(q); setQuestion(q);}} type="button" className="question-button btn btn-outline-dark btn-block">{question}</button>
                    </Link>

                    {/* <p className='question-text'>Q{q.id}    <span className='question-title'>  {question}</span> </p> */}
                </div>
            </div>
        );
    });

    return (
        <Container fluid>
            <div className='space-inbw-less'></div>
            <h2 className='text-heading'><i className="fas fa-code"></i> Practice</h2>
            <br/><div id="container">
                {qn.id===0?renderQns():
                <Route exact path={'/practice/'+qn.id}>
                    <Question question={qn}/>
                </Route>}
                    
            </div>


        </Container>
    );
};

export default Practice;