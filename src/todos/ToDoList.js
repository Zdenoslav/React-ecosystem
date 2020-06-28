import React from 'react';
import NewToDoForm from './NewToDoForm';
import ToDoListItem from './ToDoListItem';
import './ToDoList.css'

const ToDoList = ({ todos = [] }) => (
    <div className="list-wrapper">
        <NewToDoForm />
        {todos.map(todo => <ToDoListItem todo={todo} />)}
    </div>
);

export default ToDoList;
