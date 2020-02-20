import React from 'react'

function LoginUser(props) {
	console.log(props.login);
		return(
			<div>
				<form onSubmit={props.login}>
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
export default LoginUser