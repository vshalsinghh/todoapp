import React  from 'react';

export const AddTodo = ({state, handleInputChange, handleSubmit}) => {
	
	return(
	<form onSubmit={handleSubmit}>
          <input name='text'
            id="new-todo"
            onChange={handleInputChange}
            value={state.text}
            placeholder='Todo...'
          />
          <input name='date' type='date' onChange={handleInputChange} value={state.date} />
          <button>
            Add #{state.todos.length + 1}
          </button>
        </form>

	)
}