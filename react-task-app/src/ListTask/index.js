import React from 'react'
import './index.css'

function ListTasks (props) {
	console.log(props);
	const allTask = props.taskList.map((task) => {
		return (
					<div className="taskDiv" key={task.id}>
						<li>
							{task.title}
						</li>
						<li>
							{task.supporting_action}
						</li>
						<li>
							{task.status}
						</li>
						<button onClick={() => props.editTask(task.id)}>edit</button>
						<button onClick={() => props.deleteTask(task.id)}>delete</button>
					</div>
			)
	})
	return (
		<div>
			{allTask}
		</div>
		)
}
export default ListTasks