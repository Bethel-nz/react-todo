import React, { useState } from 'react';
// library imports
import { PlusIcon } from '@heroicons/react/24/solid';

function CustomForm({ addTask }) {
	const [task, setTask] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask({
			id: Date.now(),
			name: task,
			checked: false,
		});
		setTask('');
	};
	return (
		<form
			className='todo'
			onSubmit={handleSubmit}>
			<div className='wrapper'>
				<input
					type='text'
					id='task'
					className='input'
					value={task}
					onChange={(e) => setTask(e.target.value)}
					required
					autoFocus
					maxLength={64}
					placeholder='Enter Task'
				/>
				<label
					htmlFor='task'
					className='label'>
					Enter Task
				</label>
			</div>
			<button
				className='btn'
				aria-label='Add Task'
				type='submit'>
				<PlusIcon />
			</button>
		</form>
	);
}

export default CustomForm;
