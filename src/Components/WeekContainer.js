import React, { Component } from "react"
import { Segment } from "semantic-ui-react"
import DayContainer from './DayContainer'

export default class WeekContainer extends Component{

    render(){
        let dayNames = [...new Set(this.props.weeklyTasks.map(task => task.start_time[2]))]

        return(
            <div>
                {dayNames.map(dayName => <Segment><DayContainer dailyTasks={this.props.weeklyTasks.filter(task => task.start_time[2] === dayName)} /></Segment>)}
                <br/>
            </div>
        )
    }
}