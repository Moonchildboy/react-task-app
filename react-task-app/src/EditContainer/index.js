import React from 'react'
import ListTask from '../ListTask'

class EditContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			edit:{
				title:'hard code', //consider passing props
				supporting_action:'',
				status: 'in progress'
			}
		}
	}
// lift state

handleSubmit = (event) => {
	event.preventDefault()
	this.props.editTasks(this.state)//do I convert this to setState? 
}

handleChange = (event) => {
	this.setState({
	  [event.target.name]: event.target.value
	})
}


render(){
	console.log("this is props in the EditContainer", this.props);
		return(
			<div>
				<h1>Rendering EditContainer</h1>
				<form>
					<input 
					type="text" 
					placeholder="title"
					value={this.props.edit.title}
					onChange={this.handleChange}
				/>
				<input 
					type="text-area" 
					placeholder="supporting action"
					value={this.props.edit.supporting_action}
					onChange={this.handleChange}
				/>	
				<button>Update Task</button>
				</form>
			</div>
			)
	}
}
export default EditContainer