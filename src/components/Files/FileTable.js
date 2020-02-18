import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import File from './File';

class FileTable extends Component {

    drawFiles = () => {
        return this.props.files.map( (file) => 
            { 
                return (<File filename={file.filename} date={file.date} key={file.filename}/>);
            }
        );
    }

    render() {
        return (
            <Table hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Date Modified</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.drawFiles()}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = (state) => {
    return { files : state.files }
}

export default connect(mapStateToProps)(FileTable);