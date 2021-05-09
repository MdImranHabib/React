import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this)  (binding in the class constructor best way to bind)
    }
    
    // clickHandler(){               
    //     this.setState({
    //         message: "Goodbye!"     
    //     })
    // }

    clickHandler = () => {          //class property as arrow function
        this.setState({
            message: "Goodbye!" 
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  (binding in render) */}
                {/* <button onClick={() => this.clickHandler()}>Click</button>     (arrow function in render) */}
                <button onClick={this.clickHandler}>Click</button>              {/*(class property as arrow function) */}
            </div>
        )
    }
}

export default EventBind
