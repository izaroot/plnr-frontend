import React, { Component } from "react"
import { Link } from "react-router-dom"
import {Menu} from 'semantic-ui-react'

class NavBar extends Component {
    
    render(){
        return (
            <Menu>
                <Link to="/home">
                <Menu.Item
                name='home'
                >
                Home
                </Menu.Item>
                </Link>

                <Link to="/newtask">
                <Menu.Item
                name='newTask'
                >
                New Task
                </Menu.Item>
                </Link>
                <Menu.Item
                name='logout'
                onClick={this.props.handleLogout}
                >
                Logout
                </Menu.Item>
                <Menu.Item position='right'>
                   Today's Most Popular Task is: <span>{this.props.mostPopTask.name}</span> 
                </Menu.Item>
            </Menu>
        )
    }
}

export default NavBar