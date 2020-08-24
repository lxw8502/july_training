import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:''
        }
    }
    handler = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <label>User Name :{this.state.username}</label>
                    <input type="text" 
                    onChange={this.handler} 
                    value={this.state.username}/>
                </div>
                <label>Topic :</label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
