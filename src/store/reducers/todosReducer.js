import { todoActionTypes } from "../actionTypes/todoActionTypes";

const initialState = {
    todos: [1, 2, 3, 4]
}

function todosReducer(state = initialState, action) {
    switch(action.type){
        case 'TEST' : {
            console.log('test');
            return state;
        }
        case todoActionTypes.ADD_TODO : {
            const newTodos = [...state.todos];
            newTodos.push(action.payload);
            // console.log('newTodos', newTodos);
            return {
                ...state,
                todos: newTodos
                
            };
        }
        default: {
            return state;
        }
    }
}

export default todosReducer;