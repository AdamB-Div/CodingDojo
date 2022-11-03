import React from "react";
import { useParams } from "react-router";

const Element = props => {
    const { attribute, endpoint } = useParams();
    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        climate,
        population,
        terrain,
        gravity,
    } = props.lukeAPI;

    return (
        <div className="flex flex-col gap-1">
            {props.thisOrThat ? (
                <>
                    <p className="font-bold text-2xl my-5">{name}</p>
                    <p className="text-lg">
                        <span className="font-bold">Height: </span>
                        {height} cm
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Mass: </span>
                        {mass} kg
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Hair Color: </span>
                        {hair_color}
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Skin Color: </span>
                        {skin_color}
                    </p>
                </>
            ) : (
                <>
                    <p className="font-bold text-2xl my-5">{name}</p>
                    <p className="text-lg">
                        <span className="font-bold">Climate: </span>
                        {climate}
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Terrain: </span>
                        {terrain}
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Gravity: </span>
                        {gravity}
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Population: </span>
                        {population}
                    </p>
                </>
            )}
        </div>
    );
};

export default Element;
