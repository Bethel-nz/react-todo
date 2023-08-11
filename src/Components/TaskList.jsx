//Components
import TaskItem from './TaskItem';

//styles
import styles from './TaskList.module.css';

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
	return (
		<ul className={styles.tasks}>
			{tasks
				.sort((a, b) => {
					b.id - a.id;
				})
				.map((task) => {
					return (
						<TaskItem
							deleteTask={deleteTask}
							key={task.id}
							task={task}
							toggleTask={toggleTask}
							enterEditMode={enterEditMode}
						/>
					);
				})}
		</ul>
	);
};

export default TaskList;
