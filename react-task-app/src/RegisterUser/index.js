import React from 'react'

function RegisterUser (props) {

	// const users = props.

return(
		<React.Fragment>
			<form>
				<div>
					<input 
					type="text" 
					name="username"
					placeholder="username"/>
				</div>
				<div>
					<input 
					type="text" 
					name="email"
					placeholder="email"/>
				</div>
				<div>
					<input 
					type="password" 
					name="password"
					placeholder="password"/>
				</div>
				<button>Submit</button>
			</form>
		</React.Fragment>
	)
}
export default RegisterUser