import React, { Component } from "react"
import { Item } from "semantic-ui-react"
import Task from './Task'



export default class DayContainer extends Component{
    

    render(){
        return(
            <Item.Group>
                <h2>{this.props.dayName}</h2>
                {this.props.dailyTasks.map(task => <Task userTask={task} />)}

            </Item.Group>
           
        )
    }
}