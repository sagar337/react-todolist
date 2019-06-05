import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class Todos extends Component {
  
 
  render() {
	
	console.log(this.props.todos.id)
    return (
			this.props.todos.map((todo) => (
				//<h3>{todo.title}</h3>
				<TodoItem key={todo.id} todo={todo}  handleChange={this.props.handleChange} deleteItem={this.props.deleteItem}/>
			))
			
			
	)
  }
}

export default Todos;
