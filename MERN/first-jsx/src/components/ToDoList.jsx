import React from "react";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <>
                <h3>Things I need to do:</h3>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Everest</li>
                    <li>Run a Marathon</li>
                    <li>Feed the dogs</li>
                </ul>
            </>
        );
    };
}

export default ToDoList;
