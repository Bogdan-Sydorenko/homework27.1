import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Home = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => setTodos([...todos, task]);
    const removeTodo = (index) => setTodos(todos.filter((_, i) => i !== index));

    return (
        <div>
            <h1>Головна</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} />
        </div>
    );
};

export default Home;
