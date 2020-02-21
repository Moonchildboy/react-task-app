import React from 'react'

class LoginContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			email:'',
			password:''
		}
	}
	handleChange = (event) => {
		 this.setState({
		  [event.target.name]: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault() 
		this.props.login(this.state)
	}
	render(){	
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text" 
						name="username"  
						placeholder="username"
						value={this.state.username}
						onChange={this.handleChange} 
						/>
					<input 
						type="email" 
						name="email" 
						placeholder="email"
						value={this.state.email}
						onChange={this.handleChange} 
						/>
					<input 
						type="password" 
						name="password" 
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChange} 
						/>
						
				<button>Login</button>
				<button onClick={this.props.switch}>Register?</button>

				</form>
			</div>
		)
	}	
}
export default LoginContainer