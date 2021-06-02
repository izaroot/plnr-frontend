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
                // active={activeItem === 'editorials'}
                // onClick={this.handleItemClick}
                >
                Home
                </Menu.Item>
                </Link>

                <Link to="/newtask">
                <Menu.Item
                name='newTask'
                // active={activeItem === 'reviews'}
                // onClick={this.handleItemClick}
                >
                New Task
                </Menu.Item>
                </Link>
                <Menu.Item
                name='logout'
                // active={activeItem === 'upcomingEvents'}
                onClick={this.props.handleLogout}
                >
                Logout
                </Menu.Item>
            </Menu>
        )
    }
}

export default NavBar