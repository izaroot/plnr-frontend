import React, { Component } from "react"
import DayContainer from './DayContainer'

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export default class WeekContainer extends Component{


    render(){
        return(
            <div>
                <h3>{this.props.weekOf}</h3>
                {this.props.weeklyTasks.map(userTask => <DayContainer userTask={userTask} dayOf={userTask.start_time} />)}
                <br/>
                ----------------------
            </div>
           
        )
    }
}