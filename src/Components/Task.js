import React, { Component } from "react"

export default class Task extends Component{

    render(){
        return(
            <div>
                {this.props.userTask.name}<br/>
                {this.props.userTask.description}
            </div>
        )
    }
}