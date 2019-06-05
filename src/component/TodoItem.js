import React,{Component} from 'react'


export class TodoItem extends Component{
	
	
	getStyle =() => {
		
		
		return{
			backgroundColor:'#f4f4f4',
			padding:'10px',
			borderBottom:'1px #ccc dotted',
			textDecoration : this.props.todo.completed?"line-through":"none"
		}
		
		
		
	}
	 deleteItem =(id) =>{
	console.log("from TodoItem.js")
	this.setState({todos:
	[...this.state.todos.map( todo => todo.id !=id)]
	})
} 
	
	render(){
		const {id, title} = this.props.todo;
		return(
		<div style={this.getStyle()}>
			<p>
			<input type="checkbox" onChange={this.props.handleChange.bind(this,id)}/>
			{this.props.todo.title}</p>
			<button  style={btnStyle}   onClick={this.props.deleteItem.bind(this,id)}>X</button>
		</div>
		)
	}
	
}

const btnStyle ={
	background:"#ff0000",
	color:"#fff",
	border:"none",
	padding:"5px 9px",
	borderRadius:"50%",
	cursor:"pointer",
	float:"right",
}
export default TodoItem;