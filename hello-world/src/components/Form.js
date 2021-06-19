import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }

    handleUserNameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>UserName: </label>
                        <input className='form-control' type='text' value={this.state.username} onChange={this.handleUserNameChange} />
                    </div>
                    <div>
                        <label>Comments: </label>
                        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                    </div>
                    <div>
                        <label>Topic: </label>
                        <select value={this.state.topic} onChange={this.handleTopicChange} >
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
