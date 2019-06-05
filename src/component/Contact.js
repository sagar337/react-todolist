
import React from "react"


function Contact(props){
	console.log(props.contact);
console.log(props.contact.phoneno);
	return(
	<h3>{props.contact.name}</h3>
	)
}

export default Contact;