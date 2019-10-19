import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged : true
        }
    }
    
    render() {
        return (
            this.state.isLogged?
            <div>im here buddey</div>:
            <div>im not here anymore</div>
           
        )
    }
}

export default Conditional
