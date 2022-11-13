import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Table from "../components/Table";

const Authors = props => {
    const authors = props.authors;

    return (
        <div className="container m-auto p-4 flex flex-col gap-4">
            <Header />
            <Link to={"/new"} className="text-blue-700 underline">
                Add an Author
            </Link>
            <Table authors={authors} setAuthors={props.setAuthors} />
        </div>
    );
};

export default Authors;
