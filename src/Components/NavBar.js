import React, { Component } from "react"
import {Menu} from 'semantic-ui-react'

class NavBar extends Component {
    
    render(){
        return (
            <Menu>
                <Menu.Item
                name='editorials'
                // active={activeItem === 'editorials'}
                // onClick={this.handleItemClick}
                >
                Home
                </Menu.Item>

                <Menu.Item
                name='reviews'
                // active={activeItem === 'reviews'}
                // onClick={this.handleItemClick}
                >
                Add Task
                </Menu.Item>

                <Menu.Item
                name='upcomingEvents'
                // active={activeItem === 'upcomingEvents'}
                // onClick={this.handleItemClick}
                >
                Logout
                </Menu.Item>
            </Menu>
        )
    }
}

export default NavBar