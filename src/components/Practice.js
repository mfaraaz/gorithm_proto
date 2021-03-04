import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';

import { selectQuestion } from "../actions";
import Question from './Question';
import './styles.css';

const Practice = ({ questions, selectQuestion }) => {
    const [qn, setQn] = useState({ id: 0 });
    const renderQns = () => questions.map((q) => {
        const question = q.question.substring(0, 50);
        return (
            <div key={q.id}>
                <div className="question-body">
                    <Link to={'/question'}>
                        <button onClick={() => { setQn(q); selectQuestion(q); }} type="button" className="question-button btn btn-outline-dark btn-block">{question}</button>
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <Container fluid>
            <div className='space-inbw-less'></div>
            <h2 className='text-heading'><i className="fas fa-code"></i> Practice</h2>
            <br /><div id="container">
                {qn.id === 0 ? renderQns() :
                    <Route exact path={'/question'}>
                        <Question />
                    </Route>}

            </div>


        </Container>
    );
};

const mapStateToProps = (state) => {
    return { questions: state.questions, selectedQuestion: state.selectedQuestion }
}

export default connect(mapStateToProps, { selectQuestion })(Practice);