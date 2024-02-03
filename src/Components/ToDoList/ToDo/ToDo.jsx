import {useDispatch} from "react-redux";
import {CompleteStatusActionCreator, RemoveTaskActionCreator} from "../../../redux/reducers/ToDoReducer";

const ToDo = ({task}) => {

    let dispatch = useDispatch();

    const ToggleToDoCompleteHandler = () => {
        dispatch(CompleteStatusActionCreator(task.id));
    }
    const RemoveToDoTaskHandler = () => {
        dispatch(RemoveTaskActionCreator(task.id));
    }

    return (
        <div className="ToDo mesh-cell task" data-id={task.id}>
            <div className="task__row mesh-row mesh-row--v-center">
                <label className="task__label">
                    <input type="checkbox" defaultChecked={task.complete} onClick={ToggleToDoCompleteHandler}/>
                </label>
                <div className="task__text">
                    <p>{task.text}</p>
                </div>
                <div className="task__action">
                    <button className="btn-remove-task" onClick={RemoveToDoTaskHandler}>&times;</button>
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