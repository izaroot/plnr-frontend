import React, { Component } from "react"
import WeekContainer from './WeekContainer'

export default class TaskContainer extends Component{

    // constructor(props) {
    //     super(props);
    //     let tasks =  this.props.user.user_tasks

    //     [{monday:[{}, {}]}, {tuesday: [{}]}]
        
    //   }


    render(){
        let sortedTasks = [...this.props.user.user_tasks].sort((taskA, taskB) => parseInt(taskA.start_time.split(',')[7]) - parseInt(taskB.start_time.split(',')[7]))
        let weekNums = [...new Set(sortedTasks.map(task => task.start_time.split(',')[3]))]
        return(

            <div>
                {/* {this.props.user ? tasks.map(task => <WeekContainer weeklyTasks={task} />) : null}  */}
                {weekNums.map(weekNum => <WeekContainer weeklyTasks={sortedTasks.filter(task => task.start_time.split(',')[3]===weekNum)}/>)}
            </div>
           
        )
    }
}