import React, { Component } from "react"
import { Dropdown, Form, Item, Label, List, Icon, Segment, Select } from "semantic-ui-react"

const iconMap = {
    "Self Care" : "heartbeat",
    "Leisure" : "gamepad",
    "Chore" : "home",
    "Productivity" : "calculator"
}


export default class NewTask extends Component{

    state={
        allTasks: [],
        selectedTaskObj: null,
        startTime: '',
        endTime: '',
        userId: null,
        priority: 0,
        disableSubmit: false
    }

    componentDidMount(){
        fetch('http://localhost:9292/tasks')
        .then(resp => resp.json())
        .then(allTasks => {
            this.setState({
                allTasks
            })
        })
    }

    handleTaskClick = (task) => {
        this.setState({
            selectedTaskObj: task
        })
    }

    handleSubmit = () => {
        const newUserTask = {
            start_time: this.state.startTime,
            end_time: this.state.startTime,
            user_id: this.props.userId,
            task_id: this.state.selectedTaskObj.id,
            is_complete: false,
            priority: this.state.priority
        }
        const postConfig = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserTask)
        }
        fetch("http://localhost:9292/newusertask", postConfig)
        .then(resp => resp.json())
        .then(result => {
            console.log(result)
            this.props.handleNewTask(result)
            this.props.handlePageChange('/home')
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <Segment.Group horizontal>
                <Segment>
                    <List selection verticalAlign='middle'>
                        {this.state.allTasks.map(task => 
                        <List.Item onClick={() => this.handleTaskClick(task)} >
                            <Icon name={iconMap[task.category]} />
                            <List.Content>
                                <List.Header>{task.name}</List.Header>
                            </List.Content>
                        </List.Item>)}
                    </List>
                    
                </Segment>
                {!this.state.selectedTaskObj ? null :
                    <Segment>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header>{this.state.selectedTaskObj.name}</Item.Header>
                                    <Item.Meta>{this.state.selectedTaskObj.description}</Item.Meta>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Field>
                                <Form.Input
                                label='Choose a start time'
                                type="datetime-local"
                                name='startTime'
                                onChange={this.handleChange}
                                />
                                <Form.Input
                                label='Choose an end time'
                                type="datetime-local"
                                name='endTime'
                                onChange={this.handleChange}
                                />
                                <Form.Input
                                label='Choose Priority'
                                type="number"
                                name='priority'
                                min={0}
                                max={3}
                                value={this.state.priority}
                                onChange={this.handleChange}
                                />
                                <br/>
                                <Form.Button disabled={this.state.disableSubmit} content='Add Task' />
                            </Form.Field>
                        </Form.Group>
                    </Form>
                </Segment>}
            </Segment.Group>
        )
    }
}