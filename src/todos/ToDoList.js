import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NewToDoForm from './NewToDoForm';
import ToDoListItem from './ToDoListItem';
import { loadTodos } from './thunks';
import { removeTodo, markTodoAsCompleted } from './actions';
import { displayAlert } from './thunks';
import './ToDoList.css'

const ToDoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos, onDisplayAlertClicked }) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>
    const content = (
    <div className="list-wrapper">
        <NewToDoForm />
        {todos.map(todo => <ToDoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onDisplayAlertClicked}
         />)}
    </div>
    );
    return isLoading ? loadingMessage : content;

};


const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
