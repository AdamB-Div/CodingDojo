import React from "react";
import { useNavigate } from "react-router-dom";

const EditButton = props => {
    const name = props.name;
    const navigate = useNavigate();

    const toEdit = () => {
        navigate(`/edit/${props.id}`, { state: { name: name } });
    };

    return (
        <div>
            <button onClick={toEdit} className="bg-green-300 px-4 py-1 rounded">
                Edit
            </button>
        </div>
    );
};

export default EditButton;
