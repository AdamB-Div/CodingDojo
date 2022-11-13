import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const Table = props => {
    const authors = props.authors;

    return (
        <div>
            <p className="text-purple-600 font-bold text-md mb-3">
                We Have Quotes By:
            </p>
            <table className="border border-collapse border-gray-500 table-fixed w-2/3">
                <thead>
                    <tr>
                        <th className="p-2 bg-gray-400 text-white w-2/5">
                            Author
                        </th>
                        <th className="p-2 bg-gray-400 text-white w-3/5">
                            Actions Available
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(m => {
                        return (
                            <tr
                                key={m._id}
                                className="border border-gray-500 odd:bg-white even:bg-gray-200"
                            >
                                <td className="p-4 text-purple-600">
                                    {m.name}
                                </td>
                                <td className="p-4 flex gap-4 border-l border-gray-500">
                                    <EditButton id={m._id} name={m.name} />
                                    <DeleteButton
                                        id={m._id}
                                        setAuthors={props.setAuthors}
                                        authors={props.authors}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
