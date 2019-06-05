import React, { Component } from 'react';
import {BrowserRouter as Router, Route}from 'react-router-dom'
import Todos from "./component/Todos"
import AddTodo from "./component/AddTodo"
import Header from "./Header"
import uuid from 'uuid'
import About from "./pages/About"
import axios from "axios"

class App extends Component{
	
	constructor(){
		super();
		this.state={
			todos:[]}
	}

componentDidMount(){
	
	axios.get('https://jsonplaceholder.typicode.com/todos').then(res =>this.setState({todos : res.data}))
}
handleChange  = (id)=>{
	console.log(id)
	/*this.setState({ todos: this.state.todos.map( todo=>{
				if(todo.id === id)
				{
					todo.completed = !todo.completed
				}	
				return todo
	})
	});*/
	}

 deleteItem =(id) =>{
	console.log("from App.js")	
	axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
	this.setState({todos:
	[...this.state.todos.filter( todo => todo.id !==id)]
	})	)
} 

addTodo = (title) =>{
	
	//Test data 
	/*const newTodo ={
		id:uuid.v4(),
		title:title,
		completed:false
	}*/
	
	axios.post("https://jsonplaceholder.typicode.com/todos",{
		title:title,
		completed:false
	}).then(res => this.setState({ todos:[...this.state.todos,res.data]}))
	
		
}
	render(){
				return(
						<Router>
							<div className="App">
								<div className="container">
									<Header />
									<Route exact path="/" render={props =>
										<React.Fragment>
										<AddTodo addTodo={this.addTodo}/>
									<Todos todos={this.state.todos} 
									handleChange={this.handleChange} 
									deleteItem={this.deleteItem}	/>
										</React.Fragment>
									}/>
									
									<Route  path ="/about" component={About} />
								
									
								</div>
							</div>
						</Router>	
						)
				}
}


const itemStyle = {
	backgroundColor:"#f4f4f4"
}

export default App;
