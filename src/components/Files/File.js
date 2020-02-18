import React, { Component } from 'react';
import FileOptions from './FileOptions';

class File extends Component{

    render () {
        return (
            <tr>
                <td>
                    <i className="large file icon" style={{color: "grey"}}/>
                    { this.props.filename }
                </td>
                <td>{ this.props.date }</td>
                <td>
                    <FileOptions file={this.props.filename}/>
                </td>
            </tr>
        );   
    }
}

export default File;