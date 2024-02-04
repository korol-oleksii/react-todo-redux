import ToDo from "./ToDo/ToDo";
import './ToDoList.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    AddTaskActionCreator,
    RemoveAllTasksActionCreator,
    SortByCompleteActionCreator,
    SortByDateActionCreator,
    SortByIdActionCreator
} from "../../redux/reducers/ToDoReducer";

const ToDoList = () => {

    let tasks = useSelector(state => state.todos);
    let dispatch = useDispatch();

    const [text, setText] = useState('');

    const OnChangeHandler = (e) => {
        setText(e.target.value);
    }
    const AddTaskHandler = () => {
        let detectError = document.querySelector('.todo-list__form')
        if (text) {
            dispatch(AddTaskActionCreator(text));
            setText('');
            detectError.classList.remove('field-empty');
        } else {
            detectError.classList.add('field-empty');
        }
    }
    const SortByDateHandler = () => {
        dispatch(SortByDateActionCreator());

        if (SortByDateActionCreator()) {
            document.querySelector('.btn-sort-by-date').classList.toggle('is-sort');
        }
    }
    const SortByCompleteHandler = () => {
        dispatch(SortByCompleteActionCreator());

        if (SortByCompleteActionCreator()) {
            document.querySelector('.btn-sort-complete').classList.add('is-sort');
        }
    }
    const ResetSortHandler = () => {
        dispatch(SortByIdActionCreator(tasks.id));
        clearFilters();
    }
    const RemoveAllTasksHandler = () => {
        dispatch(RemoveAllTasksActionCreator(tasks));
        clearFilters();
    }

    const clearFilters = () => {
        let btnSorts = document.querySelectorAll('.btn-sort');
        btnSorts.forEach(btnSort => {
            btnSort.classList.remove('is-sort');
        });
    }

    return (
        <div className="ToDoList todo-list">
            <div className="todo-list__container mesh-cell">
                <h2 className="todo-list__title">ToDo List</h2>
                <div className="todo-list__form mesh-row">
                    <label className="todo-list__label">
                        <input className="input" type="text" onChange={(e) => OnChangeHandler(e)} value={text} placeholder="Insert task"/>
                    </label>
                    <button className="btn-add-task" onClick={AddTaskHandler}>Add task</button>
                </div>
                <div className="todo-list__sorting mesh-row">
                    <div className="todo-list__sorting--row">
                        <button className="btn-sort btn-sort-by-date" onClick={SortByDateHandler}>Sort</button>
                        <button className="btn-sort btn-sort-complete" onClick={SortByCompleteHandler}>Sort by Complete</button>
                        <button className="btn-sort btn-sort-reset" onClick={ResetSortHandler}>Reset Sort</button>
                    </div>
                    <div className="todo-list__sorting--row">
                        <button className="btn-remove-all-tasks" onClick={RemoveAllTasksHandler}>
                            Remove all
                            <svg width="16" height="22" viewBox="0 0 16 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 2V4H0V2H6V0H10V2H16ZM15 6V20C15 21.1 14.1 22 13 22H3C1.9 22 1 21.1 1 20V6H15ZM10 14L13 11L11 9L8 12L5 9L3 11L6 14L3 17L5 19L8 16L11 19L13 17L10 14Z"
                                    fill="red"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="todo-list__tasks">
                {
                    tasks.length ? tasks.map(task => <ToDo task={task} key={task.id}/>) :
                        <h3 className="no-tasks mesh-row">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.8 17.9L11.9 0.5C11.7 0.2 11.4 0 11 0C10.6 0 10.3 0.2 10.1 0.5L0.199983 17.9C-0.300017 18.8 0.299983 20 1.29998 20H20.7C21.7 20 22.3 18.8 21.8 17.9ZM12 17H9.99998V15H12V17ZM12 13H9.99998V6H12V13Z"
                                    fill="orange"/>
                            </svg>
                            No tasks
                        </h3>
                }
            </div>
        </div>
    )
}

export default ToDoList;