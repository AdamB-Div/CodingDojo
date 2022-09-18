import React, { useState } from "react";

const ToDoDisplay = props => {
    return (
        <div>
            <h1>Current To Do</h1>
            <pre>{props.toDo}</pre>
        </div>
    );
};

export default ToDoDisplay;
