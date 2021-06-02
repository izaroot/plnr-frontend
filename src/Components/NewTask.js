import React, { Component } from "react"

export default class NewTask extends Component{

    state={
        allTasks: []
    }

    componentDidMount(){
        fetch('http://localhost:9292/tasks')
        .then(resp => resp.json())
        .then(allTasks =>{
            this.setState({
                allTasks
            })
        })
    }

    render(){
        return(
            <ul>
                {this.state.allTasks.map(task => <li>{task.name}</li>)}
            </ul>
        )
    }
}