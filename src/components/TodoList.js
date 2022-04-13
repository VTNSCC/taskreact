import { Component } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            todoList: [] //default empty array
        }
    }
    //add an event inside the state
    addTodo = (event) => {
        event.preventDefault();
        
        const data = event.target,
        newTodo = {
            taskTitle: data.taskTitle.value,
            date: data.date.value,
            time: data.time.value
        }
        
        //updating the array but not re-renderind
        this.state.todoList.push(newTodo);
        // updating state and re-render
        this.setState({
            todoList: this.state.todoList
        })
       
    }
    
    //delete task from array
    //i need a key to reference: the action/event.target.value to the local/key/value = index
    deleteTask = (event)=> {
        event.preventDefault();

        this.state.todoList.splice(event.target.value)
        this.setState({
            todoList: this.state.todoList
        })
    }
    render(){
        console.log(this.state.todoList)
        return(
            <>
                <Form onSubmit={this.addTodo}>
                    <Form.Group controlId="formBasicTaskTitle">
                        <Form.Label>Task Title:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Todo"  name="taskTitle" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Task Date:</Form.Label>
                        <Form.Control type="date" placeholder="dd/mm/yyyy"  name="date" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicTime">
                        <Form.Label>Task Time:</Form.Label>
                        <Form.Control type="time" placeholder="Enter the Time"  name="time" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    
                    <br/>
                    
                    <Button type="submit" className="btn btn-success">
                        Add Todo
                    </Button>
                </Form>
                <br/>
                <ListGroup>
                    {
                        this.state.todoList.map((task, index)=> {
                            //Each child in a list should have a unique key prop, and should have a return
                            return(
                                <ListGroup.Item key={index} action variant="primary">
                                    {task.taskTitle} at {task.time}, date: {task.date}
                                    <Button type="button" variant="danger" onClick=
                                    {this.deleteTask} value={index}>
                                        Delete
                                    </Button>
                                </ListGroup.Item>
                            )
                            
                        })
                    }
                </ListGroup>
                {/* Antes
                <ul>
                    <li key={index}>
                                        
                    </li>
                    
                </ul> */}
            </>    
        )
    }
}
{   
    
    //Aprendizados: Achar formas de tornar coisas simples dinâmicas, para atender os requisitos, e alterar os comportamento delas
    //Consigo facilitar muitas funções
    //usar console.log para verificar o comportamento das modificações antes de implementar 
    /*Ex:
    console.log(newTodo);
    console.log(event.target.taskTitle.value);
    */
    // Before:
    /* <label>Date:</label>
    <input type="date" className="form-control" name="date"/>
    <br/>
    <label>Time:</label>
    <input type="time" className="form-control" name="time"/>
    
    <br/> */
    /*Ex sem bootstrap <button type="button" className="btn btn-danger" name="delete">Delete</button> */}


export default TodoList;