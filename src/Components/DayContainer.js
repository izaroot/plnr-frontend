import React, { Component } from "react"
import Task from './Task'

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export default class DayContainer extends Component{
    

    render(){
        const start = new Date(this.props.dayOf)
        return(
            <div>
                <h4>{days[start.getDay()]}</h4>
                {this.props.dayOfUserTasks.map(userTask => <Task userTask={userTask} />)}
                DayContainer
            </div>
           
        )
    }
}