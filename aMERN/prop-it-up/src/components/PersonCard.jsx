import React, { Component } from "react";

export default class PersonCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <>
                <h2>
                    {lastName}, {firstName}
                </h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </>
        );
    }
}
