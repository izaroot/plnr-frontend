import React, { Component } from "react"
import {Item, Button, Icon, Modal, Form} from 'semantic-ui-react'

export default class Task extends Component{

    state = {
        open: false,
        start_time: new Date(parseInt(`${this.props.userTask.start_time[7]}000`)).toJSON().slice(0, -5)
    }

    deleteTask = () => {
        fetch(`http://localhost:9292/usertasks/${this.props.userTask.id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(deletedTask => {
            this.props.handleDeleteTask(deletedTask.id)
        })
    }

    ToggleComplete = () => {
        fetch(`http://localhost:9292/usertasks/${this.props.userTask.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                is_complete: !this.props.userTask.is_complete
            })
        })
        .then(resp => resp.json())
        .then(updatedObj => {
            this.props.handleUpdatedTask(updatedObj)
        })
    }

    editStartTime = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    cancelChanges = () => {
        this.setState({
            start_time:new Date(parseInt(`${this.props.userTask.start_time[7]}000`)).toJSON().slice(0, -5)
        })
    }


    saveTask = () => {
        fetch(`http://localhost:9292/usertasks/${this.props.userTask.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
               start_time: this.state.start_time
            })
        })
        .then(resp => resp.json())
        .then(updatedObj => {
            this.props.handleUpdatedTask(updatedObj)
        })
    }

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
                        <Modal onClose={() => this.setState({open: false})}
                                onOpen={() => this.setState({open: true})}
                                open={this.state.open}
                                trigger={<Button onClick={null} floated='right'><Icon name='edit'/></Button>}>
                                <Modal.Header>{this.props.userTask.task.name}</Modal.Header>
                                <Modal.Content>
                                    <Form>
                                        <Form.Group>
                                            <Form.Input onChange={(e) => this.editStartTime(e)} type="datetime-local" name="start_time" value={this.state.start_time}>

                                            </Form.Input>
                                        </Form.Group>
                                    </Form>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='black' onClick={() => {this.setState({open: false}); this.cancelChanges()}}>
                                    Cancel
                                    </Button>
                                    <Button
                                    content="Save"
                                    labelPosition='right'
                                    icon='checkmark'
                                    onClick={() => {this.setState({open: false}); this.saveTask()}}
                                    positive
                                    />
                                </Modal.Actions>                            
                        </Modal>
                        <Button onClick={this.deleteTask} floated='right'><Icon name='trash alternate'/></Button>
                        <Button onClick={this.ToggleComplete} floated='right'><Icon name={this.props.userTask.is_complete ? 'check square' : 'check square outline'}/></Button>
                    </Item.Extra>
                </Item.Content>
            </Item>    
        )
    }
}