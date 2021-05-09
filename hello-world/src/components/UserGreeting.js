import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

// we have 4 approach for conditional rendering
// 1. if/else
// 2. Element variables
// 3. Ternary conditional operator 
// 4. Short circuit operator 
// No. 3 & 4 are recommended

    render() {       
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Imran</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Imran</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Imran</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // return(
        //     this.state.isLoggedIn ? <div>Welcome Imran</div> : <div>Welcome Guest</div>
        // )

        return this.state.isLoggedIn && <div>Welcome Imran</div>
    }
}

export default UserGreeting
