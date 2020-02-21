import React from 'react'
import LoginContainer from '../LoginContainer'
import RegisterUser from '../RegisterUser'

class AuthContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			displayPage: true	// 
		}
	}

	changeAuth = () => { // where to call this function?
		
			this.setState({
				displayPage: !this.state.displayPage
			})
	}


	render(){
		console.table(this.state)
		return(
			<React.Fragment>
					{	
						this.state.displayPage ?
			        	<LoginContainer login={this.props.login} switch={this.changeAuth}/> 
			        	:
			        	<RegisterUser register={this.props.register} switch={this.changeAuth}/> 
					}
			</React.Fragment>
			)
		}
	}
export default AuthContainer