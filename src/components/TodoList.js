import React from 'react';

const TodoList = ({ todos, removeTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => removeTodo(index)}>Видалити</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
