import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
function  Header(){
	return(
		
		<header style ={headerStyle}> 
		<h1>Todo List</h1>
		<Link to="/" style={linkStyle}>Home</Link> |
		 <Link to="/about" style={linkStyle}>About</Link>
		</header>
		
	)
	
	
	
}



const linkStyle ={
	color:"#fff",
	textDecoration:'none'
}
const headerStyle={
	color:"#fff",
	background:"#333",
	textAlign:"center",
	padding:"10px"
}


export default Header;