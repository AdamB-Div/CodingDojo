import React from "react";
import axios from "axios";

const DeleteButton = props => {
    const deleteThing = () => {
        axios
            .delete(`http://localhost:8000/api/authors/${props.id}`)
            .then(res => {
                console.log(res);

                props.setAuthors(props.authors.filter(a => a._id !== props.id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <button
                onClick={deleteThing}
                className="bg-red-300 px-4 py-1 rounded"
            >
                Delete
            </button>
        </div>
    );
};

export default DeleteButton;
