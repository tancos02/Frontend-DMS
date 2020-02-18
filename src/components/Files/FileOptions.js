import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

const dropdownConfig = {
    1: "Share",
    2: "Download",
    3: "Rename",
    4: "Tag",
    5: "Delete"
}

class FileOptions extends Component {

    onDropdownSelect = (key, e) => {
        switch (dropdownConfig[key]){
            case "Share":
                console.log("Share", this.props.file); break;
            case "Download":
                console.log("Download", this.props.file); break;
            case "Rename":
                console.log("Rename", this.props.file); break;
            case "Tag":
                console.log("Tag", this.props.file); break;
            case "Delete":
                console.log("Delete", this.props.file); break;
            default: break;
        }
    }

    render() {
        return (
            <Dropdown onSelect={this.onDropdownSelect}>
                <Dropdown.Toggle variant="secondary" style={{color:"gray", backgroundColor:"Transparent" , border:"None"}}>
                    <span style={{fontWeight:"bold"}}>...</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey={1}>Share</Dropdown.Item>
                    <Dropdown.Item eventKey={2}>Download</Dropdown.Item>
                    <Dropdown.Item eventKey={3}>Rename</Dropdown.Item>
                    <Dropdown.Item eventKey={4}>Edit Tag</Dropdown.Item>
                    <Dropdown.Item eventKey={5} style={{color:"darkred"}}>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default FileOptions;