import React from "react";
import { useState } from "react";

const Form = props => {
    const [searchCat, setSearchCat] = useState("");
    const [searchID, setSearchID] = useState("");

    return (
        <div>
            <form
                className="flex justify-center gap-6"
                onSubmit={e => {
                    props.setParams(e, searchCat, searchID);
                }}
            >
                <div className="flex gap-3">
                    <label>Search for:</label>
                    <select
                        className="bg-gray-200 rounded w-40"
                        onChange={e => setSearchCat(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div className="flex gap-3">
                    <label>ID:</label>
                    <input
                        type="number"
                        className="bg-gray-200 rounded w-16"
                        onChange={e => setSearchID(e.target.value)}
                    />
                </div>
                <button className="bg-blue-700 rounded text-white w-20">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Form;
