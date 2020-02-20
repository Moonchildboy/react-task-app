import React from 'react'

class LoginContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: '', 
			email: '',
			password:''
		}
	}

handleChange = (event) => {
	this.setState({
	// computed property
      [event.target.name]: event.target.value
	})
}
handleSubmit = (event) => {
	event.preventDefault()
	this.props.login(this.state)
}
	render(){
		console.table(this.state);
		return(
		<div>
			<form onSubmit={this.handleSubmit}>
				<input 
					type="text" 
					name="username" 
					value={this.state.username} 
					placeholder="username" 
					onChange={this.handleChange}/>
				<input 
					type="email" 
					name="email" 
					value={this.state.email} 
					placeholder="email" 
					onChange={this.handleChange}/>
				<input 
					type="password" 
					name="password" 
					value={this.state.password} 
					placeholder="password" 
					onChange={this.handleChange}/>
			<button>Login</button>
			</form>
		</div>
			)
	}
}
export default LoginContainer