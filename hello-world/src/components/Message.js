import React,{Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state ={ meassage:'heyyy sachii'}
    }

    changeData(){
        this.setState({meassage:'noet sachin'})
    }
    render(){
        return(
            <div>
            <h1>{this.state.meassage}</h1>
            <button onClick = {this.changeData.bind(this)}>Subscribe</button>
            </div>
        )
    }
}

export default Message