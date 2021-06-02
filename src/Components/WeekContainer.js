import React, { Component } from "react"
import DayContainer from './DayContainer'

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export default class WeekContainer extends Component{


    render(){
        return(
            <div>
                <h3>{this.props.weekOf}</h3>
                {this.props.weeklyTasks.map(dayOfUserTasks => <DayContainer dayOfUserTasks={dayOfUserTasks[1]} dayOf={dayOfUserTasks[1][0].start_time} />)}
                <br/>
                ----------------------
            </div>
           
        )
    }
}