import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

const AllProducts = props => {
    // State Variable
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    // useEffect
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-3xl font-bold my-3">All Products:</p>
            {products.map(p => {
                return (
                    <p
                        key={p._id}
                        className="text-xl underline cursor-pointer"
                        onClick={() => {
                            navigate(`/${p._id}`);
                        }}
                    >
                        {p.title}
                    </p>
                );
            })}
        </div>
    );
};

export default AllProducts;
