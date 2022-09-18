import React, { useState } from "react";

const ToDoForm = props => {
    const [toDo, setToDo] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.getToDo(toDo);
    };

    return (
        <div>
            <h1>To Do List</h1>
            <h1>Add To Do:</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={toDo}
                    onChange={e => setToDo(e.target.value)}
                    className="border"
                />
                <input type="submit" className="bg-blue-600 text-white w-20" />
            </form>
        </div>
    );
};

export default ToDoForm;
