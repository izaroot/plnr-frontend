import React, { Component } from "react"
import { useHistory } from "react-router"
import {Segment} from 'semantic-ui-react'
import Profile from "./Profile"
import TaskContainer from "./TaskContainer"

class HomeView extends Component {


    render() {
        if( Math.random() > .2){
            alert("Hi!!! We have been trying to reach you about your cars extended warranty!")
        }
        return (
            <div>
                <Segment.Group horizontal>
                    <Segment><Profile user={this.props.user}/></Segment>
                    <Segment><TaskContainer handleUpdatedTask={this.props.handleUpdatedTask} handleDeleteTask={this.props.handleDeleteTask} user={this.props.user}/></Segment>
                </Segment.Group>        
            </div>
        )
    }
    
}

export default HomeView