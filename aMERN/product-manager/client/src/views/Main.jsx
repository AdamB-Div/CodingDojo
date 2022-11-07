import React from "react";
import Form from "../components/Form";
import AllProducts from "../components/AllProducts";

const Main = () => {
    return (
        <div>
            <div className="container m-auto p-4 flex flex-col items-center justify-center gap-4">
                <Form />
                <hr className="w-full my-8" />
                <AllProducts />
            </div>
        </div>
    );
};

export default Main;
