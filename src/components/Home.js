import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import './styles.css';
import study from '../resources/study.svg';

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <h1 className='heading'>Launch  your<br />coding journey<br />with us.</h1>
                        <div className='space'></div>
                        <p>Gorithm helps you get started with your programming <br /> journey. A one stop platform for all you geeks.</p>
                        <div className='space'></div>
                        <button type="button" className="btn btn-outline-dark">Start Now</button><span>  </span>
                        <button type="button" className="btn btn-outline-dark"><i className="fas fa-info-circle"></i> Know More</button>
                    </Col>
                    <Col lg={6}>
                        <img className="home-img" src={study} alt="home-img" />
                    </Col>
                </Row>
                <div className='space-inbw'></div>
                <Row className='row-course'>
                    <Col md={2} sm={4}>
                        <h4 className="track">Choose<br /> your track</h4>
                        <p className="card-text">Start learning<br /> right away</p>
                    </Col>
                    <Col md={2} sm={4}>
                        <div className="card">
                            <div className="card-body">
                                <h2><i className="fab fa-python"></i></h2>
                                <h5 className="card-title">Python <br /> Basics</h5>
                                <button type="button learn-btn" className="btn btn-dark">Learn <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} sm={4}>
                        <div className="card">
                            <div className="card-body">
                                <h2><i className="fab fa-java"></i></h2>
                                <h5 className="card-title">Java <br /> Basics</h5>
                                <button type="button learn-btn" className="btn btn-dark">Learn <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} sm={4}>
                        <div className="card">
                            <div className="card-body">
                                <h2><i className="fas fa-database"></i></h2>
                                <h5 className="card-title">SQL <br /> Database</h5>
                                <button type="button learn-btn" className="btn btn-dark">Learn <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} sm={4}>
                        <div className="card">
                            <div className="card-body">
                                <h2><i className="fas fa-code-branch"></i></h2>
                                <h5 className="card-title">Git <br /> Basics</h5>
                                <button type="button learn-btn" className="btn btn-dark">Learn <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='space-inbw'></div>
                <h2><i className="fas fa-code"></i> Practice</h2><br />
                <Row className='row-lg'>
                    <Col lg={5}>
                        <h3>Python: <span className='program'>Hello Gorithm</span></h3>
                        <p>In this example, you will learn to print "Hello, World!" on the screen in Python programming. <br />To
            understand this example, you should have the knowledge of the following Python programming topics:
            <br />Python Input Output (I/O)</p>
                        <h5 className='output'>Output</h5>
                        <Alert variant='secondary'>Welcome to Gorithm!</Alert>
                    </Col>
                    <Col lg={7}>
                        <iframe src="https://trinket.io/embed/python3/e1f3516407?runOption=run" width="100%" height="356"
                            frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
                    </Col>
                </Row>
                <div className='space-inbw'></div>
            </Container>
        </div>
    );
};

export default Home;