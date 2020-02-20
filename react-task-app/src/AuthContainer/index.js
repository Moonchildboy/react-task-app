import React from 'react'

class AuthContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: '', 
			email: '',
			password: ''
		}
	}
handleChange = (event) => {
	this.setState({
      [event.target.name]: event.target.value

	})
}
handleSubmit = (event) => {//how do I get this 
	event.preventDefault()
	console.table("This is handleSubmit");
	this.props.register(this.state)//define this ƒ in App.js
}
render(){
	console.table(this.state)
	return(
		<React.Fragment>
			<form onSubmit={this.handleSubmit}>
				<div>
					<input 
					type="text" 
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
					placeholder="username"/>
				</div>
				<div>
					<input 
					type="text" 
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
					placeholder="email"/>
				</div>
				<div>
					<input 
					type="password" 
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
					placeholder="password"/>
				</div>
				<button>Submit</button>
			</form>
		</React.Fragment>
		)
	}
}
export default AuthContainer