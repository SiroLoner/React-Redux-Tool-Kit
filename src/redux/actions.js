//Action creators
export const addTodo = (data) => {
    return {
        type: "todoList/AddTodo",
        payload: data
    }
}

export const updateTodo = (data) => {
    return {
        type: "todoList/UpdateTodo",
        payload: data
    }
}

export const searchFilterChange = (data) => {
    return {
        type: "filters/SearchFilterChange",
        payload: data
    }
}

export const statusFilterChange = (data) => {
    return {
        type: "filters/StatusFilterChange",
        payload: data
    }
}

export const priorityFilterChange = (data) => {
    return {
        type: "filters/PriorityFilterChange",
        payload: data
    }
}