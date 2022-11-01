import React from "react";
import { useState } from "react";

const ToDos = props => {
    return (
        <div>
            <ul>
                {props.toDos.map((toDo, idx) => {
                    return (
                        <div key={idx} className="flex gap-4 my-2">
                            {toDo.checked ? (
                                <li className="line-through">{toDo.content}</li>
                            ) : (
                                <li>{toDo.content}</li>
                            )}
                            <input
                                type="checkbox"
                                onChange={() => {
                                    return props.handleCheck(idx);
                                }}
                                checked={toDo.checked}
                            />
                            <button
                                className="bg-black text-white rounded px-3"
                                onClick={() => props.removeToDo(idx)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default ToDos;
