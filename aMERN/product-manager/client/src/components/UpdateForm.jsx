import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateForm = props => {
    // State Variables
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [id]);

    const submitHandler = e => {
        e.preventDefault();

        const UpdatedProduct = {
            title,
            price,
            description,
        };

        axios
            .put(`http://localhost:8000/api/products/${id}`, UpdatedProduct)
            .then(res => console.log(res))
            .catch(err => console.log("BAD PUT REQUEST", err));

        navigate(`/`);
    };

    return (
        <div className="container m-auto p-4 flex flex-col items-center justify-center gap-4">
            <form
                className="w-1/2 flex flex-col gap-4"
                onSubmit={submitHandler}
            >
                <p className="text-4xl font-bold self-center my-3">
                    Update Product
                </p>
                <div className="flex gap-4 bg-gray-100 border-2 border-gray-200 p-3 rounded">
                    <label className="basis-1/4 text-gray-500">Title</label>
                    <input
                        type="text"
                        className="basis-3/4 border-2 border-gray-300 rounded"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="flex gap-4 bg-gray-100 border-2 border-gray-200 p-3 rounded">
                    <label className="basis-1/4 text-gray-500">Price</label>
                    <input
                        type="number"
                        className="basis-3/4 border-2 border-gray-300 rounded"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className="flex gap-4 bg-gray-100 border-2 border-gray-200 p-3 rounded">
                    <label className="basis-1/4 text-gray-500">
                        Description
                    </label>
                    <input
                        type="text"
                        className="basis-3/4 border-2 border-gray-300 rounded"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button className="w-1/3 bg-gray-200 rounded self-center border-2 border-gray-300">
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateForm;
