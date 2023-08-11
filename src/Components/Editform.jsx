import React, { useEffect, useState } from 'react';
// library imports
import { CheckIcon } from '@heroicons/react/24/solid';

function EditForm({ editedTask, updateTask, closeEditMode }) {
	const [UpdatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
	useEffect(() => {
		const closeModal = (e) => {
			e.key === 'Escape' && closeEditMode();
		};
		window.addEventListener('keydown', closeModal);
		return () => {
			window.removeEventListener('keydown', closeModal);
		};
	}, [closeEditMode]);
	const handleSubmit = (e) => {
		e.preventDefault();
		updateTask({ ...editedTask, name: UpdatedTaskName });
	};
	return (
		<div
			role={'dialog'}
			aria-labelledby='editTask'
			onClick={(e) => {
				e.target === e.currentTarget && closeEditMode;
			}}
		>
			<form
				className='todo'
				onSubmit={handleSubmit}
			>
				<div className='wrapper'>
					<input
						type='text'
						id='editTask'
						className='input'
						value={UpdatedTaskName}
						onChange={(e) => setUpdatedTaskName(e.target.value)}
						required
						autoFocus
						maxLength={64}
						placeholder='Enter New Task'
					/>
					<label
						htmlFor='editTask'
						className='label'
					>
						Enter New Task
					</label>
				</div>
				<button
					className='btn'
					aria-label={`confirm to change ${UpdatedTaskName} content`}
					type='submit'
				>
					<CheckIcon
						strokeWidth={2}
						height={24}
						width={24}
					/>
				</button>
			</form>
		</div>
	);
}

export default EditForm;
