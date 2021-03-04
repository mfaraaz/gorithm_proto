import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import './styles.css';

const Question = ({ q }) => {
    return (
        <Container fluid>
            {q!==null?<div>
                <div className='space-inbw-less'></div>
                <h2><i className="fas fa-code"></i> Practice</h2>
                <br />
                <Row className='row-lg'>
                    <Col lg={5} className='fixed-box'>
                        <h3><span className='program'>{q.question}</span></h3>
                        <p>{q.description}</p>
                        <h5 className='output'>Input</h5>
                        <Alert variant='secondary'>{q.input}</Alert>
                        <h5 className='output'>Output</h5>
                        <Alert variant='secondary'>{q.output}</Alert>
                        <h5 className='output'>Explaination</h5>
                        <p>{q.explaination}</p>

                    </Col>
                    <Col lg={7}>
                        <iframe title='code' src="https://trinket.io/embed/python3/e1f3516407?runOption=run" width="100%" height="356"
                            frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
                    </Col>
                </Row>
                <div className='space-inbw'></div>
            </div>:'Reload'}
        </Container>
    );
}

const mapStateToProps = state => {
    return { q: state.selectedQuestion };
};

export default connect(mapStateToProps)(Question);
// export default Question;