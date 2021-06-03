import React, { Component } from "react"
import WeekContainer from './WeekContainer'

export default class TaskContainer extends Component{

    render(){
        let sortedTasks = [...this.props.user.user_tasks].sort((taskA, taskB) => parseInt(taskA.start_time[7]) - parseInt(taskB.start_time[7]))
        let weekNums = [...new Set(sortedTasks.map(task => task.start_time[3]))]
        
        return(
            <div>
                {weekNums.map(weekNum => <WeekContainer weeklyTasks={sortedTasks.filter(task => task.start_time[3]===weekNum)}/>)}
            </div>
           
        )
    }
}