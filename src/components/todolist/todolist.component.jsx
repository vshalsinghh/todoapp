import React from 'react';
import './todolist.styles.css';

export const TodoList = ({todos, handleChange, handleDelete}) => (
	<div className='todolist'>
		{todos.map(todo => <div key={todo.id} className='todoitem' >
         <input name='completed'  
         	type='checkbox' 
         	checked={todo.completed} 
         	onChange={() => handleChange(todo.id)}/>
         <p className={`${todo.completed? 'completed' : 'active'}`}>{todo.name} </p> 
         <p className='date'>{todo.date} </p>
         <button className={`${todo.completed? 'complete' : 'active'} delete`} 
         onClick={() => handleDelete(todo.id)}>&#10005;</button>
     
      </div> )}

	</div>

	)