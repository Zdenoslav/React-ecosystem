import React, { useState } from 'react';
import './NewToDoForm.css';

const NewToDoForm = () => {

    const [inputValue, setInputValue] = useState('');

    <div className="new-todo-form">
        <input
             className="new-todo-input"
             type="text"
             placeholder="Type your new todo here"
             value={inputValue}
             onChange={e => setInputValue(e.target.value)}/>
        <button className="new-todo-button">Create Todo</button>
    </div>
};

export default NewToDoForm;
