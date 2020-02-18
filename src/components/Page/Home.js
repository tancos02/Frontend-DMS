import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Searchbar from '../Searchbar';
import FileTable from '../Files/FileTable';
import AccountPic from '../AccountPic';

class Home extends Component {
    render() {
        return (
            <div className="home container">
                <Row className="search-account-row">
                    <Col xs={8}><Searchbar/></Col>
                    <Col md="auto"><AccountPic/></Col>
                </Row>
                <FileTable/>
            </div>
        );
    }
}

export default Home;
