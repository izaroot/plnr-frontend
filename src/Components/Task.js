import React, { Component } from "react"
import {Item, Button, Icon} from 'semantic-ui-react'

export default class Task extends Component{

    render(){
        return(
            <Item>            
                <Item.Content>
                    <Item.Header>{this.props.userTask.start_time[0]}:00{this.props.userTask.start_time[1]}</Item.Header>
                    <Item.Meta>
                    <h3>{this.props.userTask.task.name}</h3>
                    </Item.Meta>
                    <Item.Description>{this.props.userTask.task.description}</Item.Description>
                    <Item.Extra>
                        <Button onClick={null} floated='right'><Icon name='edit'/></Button>
                        <Button onClick={null} floated='right'><Icon name='trash alternate'/></Button>
                        <Button onClick={null} floated='right'><Icon name={this.props.userTask.is_complete ? 'check square' : 'check square outline'}/></Button>
                    </Item.Extra>
                </Item.Content>
            </Item>    
        )
    }
}