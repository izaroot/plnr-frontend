import React, { Component } from "react"
import WeekContainer from './WeekContainer'

export default class TaskContainer extends Component{

    constructor(props) {
        super(props);
        
      }


    render(){
       
        return(
            <div>
                {this.props.user ? this.props.user.user_tasks.map(userTask => <WeekContainer userTask={userTask} />) : null} 
            </div>
           
        )
    }
}