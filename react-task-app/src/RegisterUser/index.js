import React from 'react'

class RegisterUser extends React.Component {
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
handleSubmit = (event) => {
	event.preventDefault()
	this.props.register(this.state)
}

render(){
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
				
				<button>Register</button>
				<button onClick={this.props.switch}>or Login</button>
			</form>
		</React.Fragment>
		)
	}
}
export default RegisterUser