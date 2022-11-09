import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Product = props => {
    // State Variables
    const [product, setProduct] = useState({});

    // Destructure Route
    const { id } = useParams();

    // Navigate
    const navigate = useNavigate();

    // useEffect on first load
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="container m-auto p-4 flex flex-col items-center justify-center gap-4">
            <p className="text-3xl font-bold">{product.title}</p>
            <p className="text-lg">Price: ${product.price}</p>
            <p className="text-2xl">{product.description}</p>
            <div className="flex gap-4">
                <button
                    className="bg-blue-300 rounded py-1 px-5 mt-4"
                    onClick={() => {
                        navigate(`/${id}/edit`);
                    }}
                >
                    Update
                </button>
                <button className="bg-red-400 rounded py-1 px-5 mt-4">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Product;
