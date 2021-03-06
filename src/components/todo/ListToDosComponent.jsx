import React, { Component } from 'react'

class ListToDosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, description: 'Learn to dance', done: false, targetDate: new Date() },
                { id: 2, description: 'Became an expert in it', done: false, targetDate: new Date() },
                { id: 3, description: 'Get a react job', done: false, targetDate: new Date() }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>List ToDos</h1>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Completed</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListToDosComponent