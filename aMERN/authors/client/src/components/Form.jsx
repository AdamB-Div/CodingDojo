import React from "react";
import { Link } from "react-router-dom";

const Form = props => {
    return (
        <form
            className="border border-gray-300 w-2/3 rounded py-6 px-5 flex flex-col gap-4"
            onSubmit={props.action}
        >
            <div className="flex flex-col">
                <label className="my-2">Name:</label>
                {props.errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <input
                    type="text"
                    className="w-2/3 rounded"
                    onChange={e => props.setVal1(e.target.value)}
                    value={props.val1}
                />
            </div>
            <div className="flex gap-4 mb-3">
                <Link
                    to={"/"}
                    className="bg-blue-300 text-white text-xl font-bold w-36 py-2 rounded text-center"
                >
                    Cancel
                </Link>
                <button
                    type="sumbit"
                    className="bg-blue-300 text-white text-xl font-bold w-36 py-2 rounded"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Form;
