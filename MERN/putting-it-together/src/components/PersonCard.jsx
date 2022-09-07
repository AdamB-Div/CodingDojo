import React from "react";

class PersonCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: this.props.age,
        };
    }

    handleClick = () => {
        this.setState({ age: this.state.age + 1 });
    };

    render = () => {
        const { firstName, lastName, hairColor } = this.props;
        const { age } = this.state;
        return (
            <>
                <h3>
                    {lastName}, {firstName}
                </h3>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.handleClick}>
                    Birthday Button for {firstName} {lastName}
                </button>
                <br />
            </>
        );
    };
}

export default PersonCard;
