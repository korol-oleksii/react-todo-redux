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
    // SortByAscActionCreator,
    // SortByDescActionCreator,
} from "../../redux/reducers/ToDoReducer";

const ToDoList = () => {

    let tasks = useSelector(state => state.todos);
    let dispatch = useDispatch();

    const [text, setText] = useState('');

    const OnChangeHandler = (e) => {
        setText(e.target.value);
    }
    const AddTaskHandler = () => {
        dispatch(AddTaskActionCreator(text));
        setText('');
    }
    const RemoveAllTasksHandler = () => {
        dispatch(RemoveAllTasksActionCreator(tasks));
    }
    const SortByCompleteHandler = () => {
        dispatch(SortByCompleteActionCreator());
    }
    const ResetSortHandler = () => {
        dispatch(SortByIdActionCreator(tasks.id));
    }
    const SortByDateHandler = () => {
        dispatch(SortByDateActionCreator());
        let thisHandler = document.querySelector('.btn-sort-by-date')
        if (SortByDateActionCreator()) {
            thisHandler.classList.toggle('is-sort');
        }
    }
    // const SortByAscHandler = () => {
    //     dispatch(SortByAscActionCreator());
    // }
    // const SortByDescHandler = () => {
    //     dispatch(SortByDescActionCreator());
    // }

    return (
        <div className="ToDoList todo-list">
            <div className="todo-list__container mesh-cell">
                <h2 className="todo-list__title">ToDo List</h2>
                <div className="todo-list__form mesh-row">
                    <label className="todo-list__label">
                        <input type="text" onChange={(e) => OnChangeHandler(e)} value={text} placeholder="Insert task"/>
                    </label>
                    <button className="btn-add-task" onClick={AddTaskHandler}>Add task</button>
                </div>
                <div className="todo-list__sorting">
                    <button className="btn-sort-by-date" onClick={SortByDateHandler}>Sort Date</button>
                    <button className="btn-sort-complete" onClick={SortByCompleteHandler}>Sort by Complete</button>
                    <button className="btn-sort-reset" onClick={ResetSortHandler}>Reset Sort</button>
                    <button className="btn-remove-all-tasks" onClick={RemoveAllTasksHandler}>Remove all tasks</button>
                </div>
            </div>
            <div className="todo-list__tasks">
                {
                    tasks.map(task => <ToDo task={task} key={task.id}/>)
                }
            </div>
        </div>
    )
}

export default ToDoList;