import React from 'react'

class LoginContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}

	handleSubmit = (event) => {
		event.preventDefault() // ?
		this.props.login()
	}


	render(){	
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text" 
						name="username"  
						placeholder="username" 
						/>
					<input 
						type="email" 
						name="email" 
						placeholder="email" 
						/>
					<input 
						type="password" 
						name="password" 
						placeholder="password" 
						/>
				<button>Login</button>
				</form>
			</div>
		)
	}	

}
export default LoginContainer