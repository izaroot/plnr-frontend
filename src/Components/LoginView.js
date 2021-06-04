import React, {Component} from 'react'
import { withRouter } from 'react-router'
import {Form, Segment, Button} from 'semantic-ui-react'

class LoginView extends Component {
    
    state = {
        name: "",
        profile_img: "",
        birthdate: "2020-07-12",
        username: "",
        password: "",
        registerDisplay: false
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginDisplay = () =>{
        this.setState({
            name: "",
            profile_img: "",
            birthdate: "2020-07-12",
            username: "",
            password: "",
            registerDisplay: !this.state.registerDisplay
        })
    }
    render(){
    return (
        <Segment.Group horizontal>
            <Segment vertical>
                {!this.state.registerDisplay ? <Form onSubmit={() => {this.props.handleLogin(this.state)}} onChange={(e) => this.handleInput(e)}>
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
                    <Form.Button content='Login' />
                </Form.Group>
                </Form> :
                <Form onSubmit={() => this.props.handleRegister(this.state)} onChange={(e) => this.handleInput(e)}>
                <Form.Group>
                    <Form.Input
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    />
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
                    <Form.Input
                    placeholder='Profile Pic'
                    name='profile_img'
                    value={this.state.profile_img}
                    />
                    <Form.Input
                    type="date"
                    placeholder='2020-07-12'
                    name='birthdate'
                    value={this.state.birthdate}
                    />
                    <Form.Button content='Register' />
                </Form.Group>
                </Form>}
                <Button onClick={this.loginDisplay}>{!this.state.registerDisplay ? "Create New User" : "Already have an account?"}</Button>
            </Segment>
            <Segment>
                <h3>The most popular task to do on {new Date().toLocaleString("default", { weekday: "long" })}s is: </h3>
                <h1>{this.props.mostPopTask.name}</h1>
                <h4>{this.props.mostPopTask.description}</h4>
            </Segment>
        </Segment.Group>
    )
    }
}

export default LoginView