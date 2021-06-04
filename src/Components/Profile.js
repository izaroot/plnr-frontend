import React, { Component } from "react"
import { Card, Image, Icon } from "semantic-ui-react"

class Profile extends Component{

    render(){
        let completedTasks = 0
        this.props.user.user_tasks.forEach(element => {
            element.is_complete ? completedTasks += 1 : completedTasks = completedTasks;
        })
        return (
                <Card>
                    <Image src={this.props.user.profile_img} />
                    <Card.Content>
                        <Card.Header>{this.props.user.name}</Card.Header>
                        <Card.Description>
                           {this.props.profileMsg}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='calendar check' />
                            {completedTasks} tasks completed
                        </a>
                    </Card.Content>
                </Card>
            
        )
    }
}

export default Profile