import {useDispatch} from "react-redux";
import {
    ChangeTaskActionCreator,
    CompleteStatusActionCreator,
    RemoveTaskActionCreator
} from "../../../redux/reducers/ToDoReducer";

const ToDo = ({task}) => {

    let dispatch = useDispatch();

    const ToggleToDoCompleteHandler = () => {
        dispatch(CompleteStatusActionCreator(task.id));
    }
    const RemoveToDoTaskHandler = () => {
        dispatch(RemoveTaskActionCreator(task.id));
    }

    const ChangeTaskHandler = () => {
        dispatch(ChangeTaskActionCreator(task.id, prompt('Change task:', `${task.text}`)));
    }

    return (
        <div className="ToDo mesh-cell task" data-id={task.id}>
            <div className="task__row mesh-row mesh-row--v-center">
                <label className="task__label mesh-row switch">
                    <input className="switch__checkbox" type="checkbox" defaultChecked={task.complete} onClick={ToggleToDoCompleteHandler}/>
                    <span className="switch__custom"></span>
                    <span className="task__text">{task.text}</span>
                </label>
                <div className="task__action">
                    <button className="btn-edit-task" onClick={ChangeTaskHandler}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 6V18C20 19.1 19.1 20 18 20H2C0.9 20 0 19.1 0 18V2C0 0.9 0.9 0 2 0H14L12 2H2V18H18V8L20 6ZM18.6 4.4C19.4 3.6 19.4 2.4 18.6 1.6L18.4 1.4C17.6 0.6 16.4 0.6 15.6 1.4L15 2L18 5L18.6 4.4ZM6 11L5 15L9 14L17 6L14 3L6 11Z"
                                fill="#606060"/>
                        </svg>
                    </button>
                    <button className="btn-remove-task" onClick={RemoveToDoTaskHandler}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2ZM10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM15 7L13 5L10 8L7 5L5 7L8 10L5 13L7 15L10 12L13 15L15 13L12 10L15 7Z"
                                fill="#606060"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="task__row">
                <div className="task__date">
                    added at: {task.date}
                </div>
            </div>
        </div>
    )
}

export default ToDo;