import React, { Component } from "react"
import {Item} from 'semantic-ui-react'

export default class Task extends Component{

    render(){
        return(
            <Item>            
                <Item.Content>
                    <Item.Header>{this.props.userTask.start_time.split(',')[0]}:00{this.props.userTask.start_time.split(',')[1]}</Item.Header>
                    <Item.Meta>
                    <h3>{this.props.userTask.task.name}</h3>
                    </Item.Meta>
                    <Item.Description>{this.props.userTask.task.description}</Item.Description>
                </Item.Content>
            </Item>
                
        )
    }
}