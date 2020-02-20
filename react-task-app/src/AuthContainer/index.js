import React from 'react'
import LoginUser from '../LoginUser'
import RegisterUser from '../RegisterUser'

class AuthContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			displayPage: 'login'	
		}
	}
render(){
	console.table(this.state)
	return(
		<React.Fragment>
				{	
					this.displayPage ?
		        	<RegisterUser register={this.props.register}/> :
		        	<LoginUser login={this.props.login}/> 
				}
		</React.Fragment>
		)
	}
}
export default AuthContainer