import React, { Component } from "react"
import { Item } from "semantic-ui-react"
import Task from './Task'

export default class DayContainer extends Component{

    render(){
        return(
            <Item.Group divided>
                <h2>{this.props.dailyTasks[0].start_time[2]} {this.props.dailyTasks[0].start_time[4]} {this.props.dailyTasks[0].start_time[5]}</h2>
                {this.props.dailyTasks.map(task => <Task handleUpdatedTask={this.props.handleUpdatedTask} handleDeleteTask={this.props.handleDeleteTask} userTask={task} />)}
            </Item.Group>
           
        )
    }
}