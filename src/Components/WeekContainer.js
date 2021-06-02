import React, { Component } from "react"
import DayContainer from './DayContainer'

export default class WeekContainer extends Component{


    render(){
        let dayNames = [...new Set(this.props.weeklyTasks.map(task => task.start_time.split(',')[2]))]

        return(
            <div>
                <h3></h3>
                {dayNames.map(dayName => <DayContainer dayName={dayName} dailyTasks={this.props.weeklyTasks.filter(task => task.start_time.split(',')[2]===dayName)} />)}
                <br/>
            </div>
           
        )
    }
}