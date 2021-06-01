import React, { Component } from "react"

export default class Task extends Component{

    render(){
        const start = new Date(this.props.userTask.start_time)
        return(
            <div>
                {days[start.getDay()]}<br/>
                {this.props.userTask.task.name}<br/>
                {this.props.userTask.task.description}
            </div>
        )
    }
}