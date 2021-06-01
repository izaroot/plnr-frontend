import React, { Component } from "react"
import DayContainer from './DayContainer'

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