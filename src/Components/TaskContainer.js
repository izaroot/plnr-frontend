import React, { Component } from "react"
import WeekContainer from './WeekContainer'

export default class TaskContainer extends Component{

    // constructor(props) {
    //     super(props);
    //     let tasks =  this.props.user.user_tasks

    //     [{monday:[{}, {}]}, {tuesday: [{}]}]
        
    //   }


    render(){
        const weeks = this.props.user ? this.props.user.tasks_by_week : {};
        return(

            <div>
                {this.props.user ? Object.keys(weeks).map(weekKey => <WeekContainer weeklyTasks={weeks[weekKey]} weekOf={weekKey} />) : null} 
            </div>
           
        )
    }
}