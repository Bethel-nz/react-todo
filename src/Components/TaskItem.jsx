//styles
import styles from './TaskItem.module.css';

//icons
import { CheckIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

//states
import { useState } from 'react';

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
	const [isChecked, setIsChecked] = useState(task.checked);

	const handleCheckbox = () => {
		setIsChecked((prev) => !prev);
		toggleTask(task.id);
	};
	return (
		<li className={styles.task}>
			<div className={styles['task-group']}>
				<input
					type={'checkbox'}
					className={styles.checkbox}
					checked={isChecked}
					name={task.name}
					id={task.id}
					onChange={handleCheckbox}
				/>
				<label
					htmlFor={task.id}
					className={styles.label}>
					{task.name}
					<p className={styles.checkmark}>
						<CheckIcon
							strokeWidth={2}
							width={24}
							height={24}
						/>
					</p>
				</label>
			</div>
			<div className={styles['task-group']}>
				<button
					onClick={() => enterEditMode(task)}
					className='btn'
					aria-label={`Update ${task.name} Task`}>
					<PencilSquareIcon
						width={24}
						height={24}
					/>
				</button>
				<button
					onClick={() => deleteTask(task.id)}
					className={`btn ${styles.delete}`}
					aria-label={`Delete ${task.name} Task`}>
					<TrashIcon
						strokeWidth={2}
						width={24}
						height={24}
					/>
				</button>
			</div>
		</li>
	);
};

export default TaskItem;
