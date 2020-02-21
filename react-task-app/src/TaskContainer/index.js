import React from 'react'
import ListTask from '../ListTask'
import EditContainer from '../EditContainer'


class NewTaskContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			title:'',
			supporting_action:'',
			status: 'in progress',
			idOFTaskToEdit:0,
			edit: {
				title:'',
				supporting_action:''
			},
			taskList:[]
		}
	}

componentDidMount(){
  	this.compileTasks()
}

createTasks = async (newTask) => { //do I need a return statement? 
console.log("this is a newTask", newTask);

 const url = process.env.REACT_APP_API_URL + '/api/v1/task/'
 try{
 	const registerResponse = await fetch(url, {
      method:'POST',
      credentials:'include',
      body:JSON.stringify(newTask),
      headers: {
        'Content-Type': 'application/json'
      }
  })
 	const registerJson = await registerResponse.json()
 	this.compileTasks()
 } catch (err){
 	console.error(err);
 }
}

handleSubmit = (event) => {
	event.preventDefault()
	this.createTasks(this.state)
}

handleChange = (event) => {
	this.setState({
	  [event.target.name]: event.target.value
	})
}

compileTasks = async () => {
	console.log('compileTasks called');
	const url = process.env.REACT_APP_API_URL + '/api/v1/task/'
 try{
 	const taskResponse = await fetch(url, {
      method:'GET',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json'
      }
  }) 
 	const taskJson = await taskResponse.json()
 	console.log('this is taskResponse', taskJson);
 	this.setState({
  		taskList: taskJson.data
  })
} catch (err){
 	console.error(err);
 }
}
deleteTask = async (id) => {
	try{
		const url = await fetch(process.env.REACT_APP_API_URL + "/api/v1/task/" + id, {
			method: 'DELETE',
			credentials: 'include'
		}) 
		const deleteTaskJson = await url.json()
		if (deleteTaskJson.status === 200) {
			this.setState({
				taskList: this.state.taskList.filter(task => task.id != id)
			})
		}
		else {
			throw new Error('could not delete dog')
		}
	}	catch (err){
			console.error(err);
	}
}
editTask = (id) => {
	const edit = this.state.taskList.find((task) => task.id === id) //
	this.setState({
		edit:{...edit}
	})
}

render(){	
	return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<input 
					type="text" 
					name="title" 
					value={this.state.title}
					onChange={this.handleChange}
					placeholder="title"
				/>
				<input 
					type="text" 
					name="supporting_action" 
					value={this.state.supporting_action}
					onChange={this.handleChange}
					placeholder="supporting action"
				/>
				<button>Submit Task</button>
			</form>
			<ListTask taskList={this.state.taskList} deleteTask={this.deleteTask} editTask={this.editTask}/>
			<EditContainer edit={this.state.edit}/>	
		</div>
			)
	}
}
export default NewTaskContainer