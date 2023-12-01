import { createSelector } from "reselect";

// export const todoListSelector = (state) => {
//     const result = state.todoList.filter(todo => {
//         return todo.name.includes(state.filters.search)
//     });
//     return result;
// };
// export const searchTextSelector = (state) => state.filters.search;

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const searchStatusSelector = (state) => state.filters.status;
export const searchPrioritySelector = (state) => state.filters.priority;
export const searchSelector = (state) => state.filters;


export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchSelector,
    (todoList, searchObj) => {
        var result = todoList;
        //filter by name
        result = result.filter(todo => {
            return todo.name.includes(searchObj.search);
        })

        //filter by status
        if(searchObj.status !== 'All'){
            //convert status to boolean
            var statusBolean = false;
            if(searchObj.status === 'Completed') {
                statusBolean = true;
            }
            //filter
            result = result.filter(todo => {
                return todo.completed == statusBolean;
            })
        }

        //filter by priority
        if(searchObj.priority.length){
            result = result.filter(todo => {
                return searchObj.priority.includes(todo.priority);
            })
        }

        //return result
        return result;
    }
)