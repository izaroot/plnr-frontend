import React, { Component } from "react"
import { useHistory } from "react-router"
import {Segment} from 'semantic-ui-react'
import Profile from "./Profile"
import TaskContainer from "./TaskContainer"

class HomeView extends Component {


    render() {
        
        return (
            <div>
                <Segment.Group horizontal>
                    <Segment><Profile user={this.props.user}/></Segment>
                    <Segment><TaskContainer user={this.props.user}/></Segment>
                </Segment.Group>        
            </div>
        )
    }
    
}

export default HomeView