import React, { Component } from "react"
import { Card, Image, Icon } from "semantic-ui-react"

class Profile extends Component{

    render(){
        return (
            
                <Card>
                    <Image src={this.props.user.profile_img} />
                    <Card.Content>
                        <Card.Header>{this.props.user.name}</Card.Header>
                        {/* <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta> */}
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            # of tasks complete
                        </a>
                    </Card.Content>
                </Card>
            
        )
    }
}

export default Profile