import React from 'react'

function ListTasks (props) {
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
						<button>edit</button>
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