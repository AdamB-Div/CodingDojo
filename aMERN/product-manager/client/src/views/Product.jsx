import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = props => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    });

    return (
        <div className="container m-auto p-4 flex flex-col items-center justify-center gap-4">
            <p className="text-3xl font-bold">{product.title}</p>
            <p className="text-lg">Price: ${product.price}</p>
            <p className="text-2xl">{product.description}</p>
        </div>
    );
};

export default Product;
