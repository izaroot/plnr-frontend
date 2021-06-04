import React, { Component } from "react"
import { Segment } from "semantic-ui-react"
import DayContainer from './DayContainer'

export default class WeekContainer extends Component{

    render(){
        let dayNames = [...new Set(this.props.weeklyTasks.map(task => task.start_time[2]))]
        let firstTaskDay = new Date(parseInt(`${this.props.weeklyTasks[0].start_time[7]}000`))

        let weekOf = ""
        if (firstTaskDay.getDay() > 0){
            let day = 24 * firstTaskDay.getDay()
            weekOf = new Date(firstTaskDay.setHours(-day)).toLocaleDateString()
        } else {
            weekOf = firstTaskDay.toLocaleDateString()
        }
        return(
            <div>
                <h1>Week Of {weekOf}</h1>
                {dayNames.map(dayName => <Segment placeholder><DayContainer handleUpdatedTask={this.props.handleUpdatedTask} handleDeleteTask={this.props.handleDeleteTask} dailyTasks={this.props.weeklyTasks.filter(task => task.start_time[2] === dayName)} /></Segment>)}
                <br/>
            </div>
        )
    }
}