import React from "react";
import { useState } from "react";

const Form = props => {
    // State Variables
    const [color, setColor] = useState("");

    // Create Box
    const createBox = e => {
        e.preventDefault();
        const newBox = {
            color,
        };
        props.addToState(newBox);
        setColor("");
    };

    // Return
    return (
        <div className="my-9">
            <form
                onSubmit={createBox}
                className="flex gap-4 justify-center items-center"
            >
                <label>Color</label>
                <input
                    type="text"
                    onChange={e => setColor(e.target.value)}
                    className="bg-gray-200 rounded"
                    value={color}
                />
                <button className="border border-gray-400 rounded py-1 px-4">
                    Add
                </button>
            </form>
        </div>
    );
};

export default Form;
