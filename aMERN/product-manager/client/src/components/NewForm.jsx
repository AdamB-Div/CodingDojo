import React from "react";
import axios from "axios";
import { useState } from "react";

const Form = props => {
    // State Variables
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description,
        };
        axios
            .post("http://localhost:8000/api/products", newProduct)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        setTitle("");
        setPrice(0);
        setDescription("");
    };

    return (
        <form className="w-1/2 flex flex-col gap-4" onSubmit={submitHandler}>
            <p className="text-4xl font-bold self-center my-3">
                Product Manager
            </p>
            <div className="flex gap-4 bg-gray-100 border-2 border-gray-200 p-3 rounded">
                <label className="basis-1/4 text-gray-500">Title</label>
                <input
                    type="text"
                    className="basis-3/4 border-2 border-gray-300 rounded"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div className="flex gap-4 bg-gray-100 border-2 border-gray-200 p-3 rounded">
                <label className="basis-1/4 text-gray-500">Price</label>
                <input
                    type="number"
                    className="basis-3/4 border-2 border-gray-300 rounded"
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                />
            </div>
            <div className="flex gap-4 bg-gray-100 border-2 border-gray-200 p-3 rounded">
                <label className="basis-1/4 text-gray-500">Description</label>
                <input
                    type="text"
                    className="basis-3/4 border-2 border-gray-300 rounded"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />
            </div>
            <button className="w-1/3 bg-gray-200 rounded self-center border-2 border-gray-300">
                Create
            </button>
        </form>
    );
};

export default Form;
