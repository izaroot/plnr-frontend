import React, { Component } from "react"
import {Segment} from 'semantic-ui-react'
import Profile from "./Profile"
import TaskContainer from "./TaskContainer"

class HomeView extends Component {


    render() {
        if( Math.random() > .77){
            alert("Hi!!! We have been trying to reach you about your cars extended warranty!")
        }
        return (
            <div>
                {!!Object.keys(this.props.user).length ? <Segment.Group horizontal>
                    <Segment><Profile profileMsg={this.props.profileMsg} user={this.props.user}/></Segment>
                    <Segment><TaskContainer handleUpdatedTask={this.props.handleUpdatedTask} handleDeleteTask={this.props.handleDeleteTask} user={this.props.user}/></Segment>
                </Segment.Group> : null }      
            </div>
        )
    }
    
}

export default HomeView