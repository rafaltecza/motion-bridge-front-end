import { APPEND_TODO, COMPLETE_TODO, DELETE_TODO, PREPEND_TODO } from './alert.types';

const state = {
    todos: [
        {
            username: "test",
            id: 1,
            title: "Eat",
            completed: true
        },
        {
            username: "test",
            id: 2,
            title: "Code",
            completed: false
        },
        {
            username: "test",
            id: 3,
            title: "Sleep",
            completed: false
        }
    ]
};

const reducer = (state, action) => {
    // switch(action.type){
    //     case PREPEND_TODO:
    //             return { // returning a copy of orignal state
    //                 ...state, //spreading the original state
    //                 todos: [action.payload, ...state.todos] // new todos array
    //             }
    //     case APPEND_TODO:
    //             return { // returning a copy of orignal state
    //                 ...state, //copying the original state
    //                 todos: [...state.todos, action.payload] //new todos array
    //             }
    //     case DELETE_TODO:
    //         return {  // returning a copy of orignal state
    //             ...state, //copying the original state
    //             todos: state.todos.filter(todo => todo.id !== action.payload)
    //             // returns a new filtered todos array
    //         }
    //     case COMPLETE_TODO: {
    //         const index = state.todos.findIndex(todo => todo.id !==                                                                        action.payload); //finding index of the item
    //         const newArray = [...state.todos]; //making a new array
    //         newArray[index].completed = true//changing value in the new array
    //         return {
    //             ...state, //copying the orignal state
    //             todos: newArray, //reassingning todos to new array
    //         }
    //     }
    //     default:
        return state;
    // }
}

export default reducer();