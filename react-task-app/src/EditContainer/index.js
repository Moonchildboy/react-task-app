import React from 'react'
import ListTask from '../ListTask'

class EditContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			
				title:'', //consider passing props
				supporting_action:''
			
		}
	}
// lift state
componentDidMount () {
	this.updateState()
}

handleSubmit = (event) => {
	event.preventDefault()
	this.props.updateTask(this.state)//do I convert this to setState? 
}

handleChange = (event) => {
	this.setState({
	  [event.target.name]: event.target.value
	})
}

updateState = () => {
	this.setState({
	title: this.props.edit.title,
	supporting_action: this.props.edit.supporting_action
	})
}


render(){

	console.log(this.state);

		return(
			<div>
				<h1>Rendering EditContainer</h1>
				<form onSubmit={this.handleSubmit}>
					<input 
					type="text" 
					name="title"
					placeholder="title"
					value={this.state.title}
					onChange={this.handleChange}
				/>
				<input 
					type="textarea" 
					placeholder="supporting action"
					name="supporting_action"
					value={this.state.supporting_action}
					onChange={this.handleChange}
				/>	
				<button>Update Task</button>
				</form>
			</div>
			)
	}
}
export default EditContainer