import React, {Component} from 'react'
import {Form} from 'semantic-ui-react'

class LoginView extends Component {
    
    state = {
        username: "",
        password: ""
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render(){
    return (
        <div>
            Log In and Register
            <Form onSubmit={() => this.props.handleLogin(this.state)} onChange={(e) => this.handleInput(e)}>
            <Form.Group>
                <Form.Input
                placeholder='Username'
                name='username'
                value={this.state.username}
                />
                <Form.Input
                type="password"
                placeholder='Password'
                name='password'
                value={this.state.password}
                />
                <Form.Button content='Submit' />
            </Form.Group>
            </Form>
        </div>
    )
    }
}

export default LoginView