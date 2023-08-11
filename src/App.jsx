//States and react libraries
import { useState } from 'react';

//Components
import CustomForm from './Components/CustomForm';
import EditForm from './Components/Editform';
import TaskList from './Components/TaskList';

//hooks
import useLocalStorage from './Hooks/useLocalStorage'

function App() {
	const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
	const [editedTask, setEditedTask] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [PreviousFocusEl, setPreviousFocusEl] = useState(null);

	const addTask = (tasks) => {
		setTasks((prevTask) => [...prevTask, tasks]);
	};
	const deleteTask = (id) => {
		setTasks((prevState) => prevState.filter((t) => t.id !== id));
	};
	const toggleTask = (id) => {
		setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)));
	};
	const updateTask = (task) => {
		setTasks((prev) => prev.map((t) => (t.id === task.id ? { ...t, name: task.name } : t)));
		closeEditMode();
	};
	function closeEditMode() {
		setIsEditing(false);
		PreviousFocusEl.focus();
	}
	const enterEditMode = (task) => {
		setEditedTask(task);
		setIsEditing(true);
		setPreviousFocusEl(document.activeElement);
	};
	return (
		<div className='container'>
			<header>
				<h1>My Task List</h1>
			</header>
			{isEditing && (
				<EditForm
					editedTask={editedTask}
					updateTask={updateTask}
					closeEditMode={closeEditMode}
				/>
			)}
			<CustomForm addTask={addTask} />
			<>
				{tasks && (
					<TaskList
						tasks={tasks}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
						enterEditMode={enterEditMode}
					/>
				)}
			</>
		</div>
	);
}

export default App;
