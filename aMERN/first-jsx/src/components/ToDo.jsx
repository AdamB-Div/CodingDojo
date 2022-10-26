import React, { Component } from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <>
                <h3>Things I need to do:</h3>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt Everest</li>
                    <li>Run a Marathon</li>
                    <li>Feed the Dogs</li>
                </ul>
            </>
        );
    };
}

export default ToDo;
