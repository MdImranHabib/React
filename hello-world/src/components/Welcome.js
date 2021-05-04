import React from "react";

class Welcome extends React.Component{
    render(){
        const {firstName, lastName} = this.props
       // const {state1, state2} = this.state
        return(
            <div>
                <h1>Welcome {firstName} {lastName}</h1>
            </div>
        );
    }
}

export default Welcome;