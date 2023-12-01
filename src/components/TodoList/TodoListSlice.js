const initState = [
    { id: 1, name: 'Learn Java', completed: true, priority: 'High' }
]



const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/AddTodo':
            return [...state, action.payload]
        case 'todoList/UpdateTodo':
            console.log('update task')
            for (var i = 0; i < state.length; i++) {
                if (state[i].id == action.payload.id) {
                    state[i] = {...state[i], ...action.payload};
                    break;
                }
            }
            // return state.map(todo =>
            //     todo.id === action.payload.id ?
            //         {
            //             ...todo,
            //             name: action.payload.name,
            //             completed: action.payload.completed,
            //             priority: action.payload.priority,
            //         }
            //         : todo
            // )
            // newstate = newstate.map(task => {
            //     if(task.id == action.payload.id){
            //         return action.payload;
            //     } else{
            //         return task;
            //     }
            // })
            return [...state];
        default:
            return state;
    }
}



export default todoListReducer;