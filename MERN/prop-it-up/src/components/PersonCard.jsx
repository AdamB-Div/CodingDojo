import React from "react";

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <>
                <h3>
                    {lastName}, {firstName}
                </h3>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <br />
            </>
        );
    };
}

export default PersonCard;
