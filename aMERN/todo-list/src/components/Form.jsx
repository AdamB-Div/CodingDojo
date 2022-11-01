import React from "react";
import { useState } from "react";

const Form = props => {
    const [content, setContent] = useState("");

    return (
        <div className="mb-4">
            <h1 className="text-xl mb-4 font-bold">Add To Do</h1>
            <form
                onSubmit={e => {
                    props.newToDo(e, content);
                    setContent("");
                }}
                className="flex flex-col gap-2"
            >
                <input
                    type="text"
                    className="bg-gray-200 rounded w-80"
                    onChange={e => {
                        setContent(e.target.value);
                    }}
                    value={content}
                />
                <button className="bg-blue-600 text-white rounded w-20 p-1">
                    Add
                </button>
            </form>
        </div>
    );
};

export default Form;
