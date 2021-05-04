import React from "react";
const Greet = (props) => {
    const {firstName, lastName} = props
    return (
        <div>
            <h1>Hello {firstName} {lastName}</h1>
        </div>
    );
}

export default Greet;