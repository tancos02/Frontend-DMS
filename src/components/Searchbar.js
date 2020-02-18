import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <div className="input-group input-group-lg">
            <InputGroup size="lg">
                <InputGroup.Prepend>
                    <Button style={{backgroundColor: "transparent", border: "1px solid #ced4da", color: "#495057"}}>
                        <i className="search icon"/>
                    </Button>
                </InputGroup.Prepend>
                <FormControl placeholder="Search" aria-label="Search" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </div>
    );
}

export default SearchBar;