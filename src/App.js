import React from 'react';
import './App.css';

import { TodoList } from './components/todolist/todolist.component';
import { AddTodo } from './components/addtodo/addtodo.component';



class App extends React.Component {
  constructor(){
    super();
    var date = new Date().toJSON().slice(0, 10);
    this.state = {
      todos : [],
      filter:'all',
      text:'',
      date:date,
    }
  }
  
  handleChange = id =>{
    const checkvalue = this.state.todos[id].completed;
    
     this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !checkvalue;
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })   
  }

  handleInputChange = e => {
    var val=e.target.value;
    if(e.target.name=== 'text'){
      var regex = /[^a-z.@\s]/ig;
     val = e.target.value.replace(regex, '');
    }
    
     console.log(val);

    this.setState({[e.target.name]: val})
    
  }

  handleSubmit = e => {
    e.preventDefault();
    var date = new Date().toJSON().slice(0, 10);
    if(this.state.text.length === 0 || this.state.date.length === 0){
      return;
    }
    const newTodo = {
      id: this.state.todos.length,
      name: this.state.text,
      completed: false,
      date:this.state.date,

    }
    
       this.setState(prevState => ({
        todos: this.state.todos.concat(newTodo),
        text:'',
        date:date,
       }));
       
  }

  filter = status => {
    this.setState({filter: status})

  }
  handleDelete = id => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
  }

  render(){
    let todos= [];
    if(this.state.filter === 'all'){
      todos=this.state.todos;
    }
    else if(this.state.filter === 'active'){
      todos = this.state.todos.filter(todo => !todo.completed)
    }
    else{
      todos = this.state.todos.filter(todo => todo.completed)
    }
      
    return (
    <div className="App">
      <h1> Things to do</h1>
      <div>
        <button onClick={() => this.filter('all')}>All</button>
        <button onClick={() => this.filter('completed')}>Completed</button>
        <button onClick={() => this.filter('active')}>Active</button>
      </div>
      
      <AddTodo state={this.state} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
      <div>Todos Left:{this.state.todos.filter(todo => !todo.completed).length}</div>
      <TodoList todos={todos} handleChange={this.handleChange} handleDelete={this.handleDelete}/>
      
       


    </div>
  );
}
}

export default App;
