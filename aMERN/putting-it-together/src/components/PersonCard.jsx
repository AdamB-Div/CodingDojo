import React, { Component } from "react";

export default class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        };
    }

    yearOlder = () => {
        this.setState({ age: this.state.age + 1 });
    };

    render() {
        const { firstName, lastName, hairColor } = this.props;
        const { age } = this.state;
        return (
            <>
                <h2>
                    {lastName}, {firstName}
                </h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => this.yearOlder()}>
                    Birthday Button for {firstName} {lastName}
                </button>
            </>
        );
    }
}
