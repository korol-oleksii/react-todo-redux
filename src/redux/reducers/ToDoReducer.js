const ADD_TASK = 'ADD_TASK';
const COMPLETE_STATUS = 'COMPLETE_STATUS';
const REMOVE_TASK = 'REMOVE_TASK';
const REMOVE_ALL_TASKS = 'REMOVE_ALL_TASKS';
const SORT_STATUS_COMPLETE = 'SORT_STATUS_COMPLETE';
const SORT_ID = 'SORT_ID';
const SORT_DATE = 'SORT_DATE';
// const SORT_ASC = 'SORT_ASC';
// const SORT_DESC = 'SORT_DESC';

let InitialState = {
    todos: [
        {id:1, text: 'Learn HTML, CSS', complete: true, date: '13.09.2023'},
        {id:2, text: 'Learn JS Start', complete: true, date: '11.10.2023'},
        {id:3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.', complete: false, date: '21.10.2023'},
        {id:4, text: 'Learn Git', complete: true, date: '27.10.2023'},
        {id:5, text: 'Learn JS Base', complete: true, date: '04.11.2023'},
        {id:6, text: 'Lorem ipsum dolor sit amet.', complete: false, date: '10.11.2023'},
        {id:7, text: 'Learn SCSS, Webpack, Gulp', complete: true, date: '15.12.2023'},
        {id:8, text: 'Learn React', complete: false, date: '12.01.2024'},
    ]
};

const ToDoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todos: [...state.todos, {id: state.todos.length + 1, text: action.text, complete: false, date: new Date().toLocaleDateString()}]
            }
        case COMPLETE_STATUS:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.todoId ? {...todo, complete: !todo.complete} : todo)
            }
        case REMOVE_TASK:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.todoId)
            }
        case REMOVE_ALL_TASKS:
            return {
                ...state,
                todos: []
            }
        case SORT_STATUS_COMPLETE:
            return {
                ...state,
                todos: [...state.todos.sort((a,b) => a.complete - b.complete)]
            }
        case SORT_ID:
            return {
                ...state,
                todos: [...state.todos.sort((a,b) => a.id > b.id ? 1 : -1)]
            }
        case SORT_DATE:
            return {
                ...state,
                todos: [...state.todos.sort((a,b) => a.date.toISOString > b.toISOString ? 1 : -1)]
            }
        // case SORT_ASC:
        //     return {
        //         ...state,
        //         todos: [...state.todos.sort((a,b) => a.date.toISOString > b.date.toISOString ? 1 : -1)]
        //     }
        // case SORT_DESC:
        //     return {
        //         ...state,
        //         todos: [...state.todos.sort((a,b) => a.date.toISOString < b.date.toISOString ? 1 : -1)]
        //     }
        default:
            return state
    }
}

export default ToDoReducer;

export const AddTaskActionCreator = (text) => {
    return {
        type: ADD_TASK,
        text: text
    }
}
export const CompleteStatusActionCreator = (id) => {
    return {
        type: COMPLETE_STATUS,
        todoId: id,
    }
}
export const RemoveTaskActionCreator = (id) => {
    return {
        type: REMOVE_TASK,
        todoId: id,
    }
}
export const RemoveAllTasksActionCreator = () => {
    return {
        type: REMOVE_ALL_TASKS,
    }
}
export const SortByCompleteActionCreator = () => {
    return {
        type: SORT_STATUS_COMPLETE,
    }
}
export const SortByIdActionCreator = (id) => {
    return {
        type: SORT_ID,
    }
}
export const SortByDateActionCreator = () => {
    return {
        type: SORT_DATE,
    }
}
// export const SortByAscActionCreator = () => {
//     return {
//         type: SORT_ASC,
//     }
// }
// export const SortByDescActionCreator = () => {
//     return {
//         type: SORT_DESC,
//     }
// }