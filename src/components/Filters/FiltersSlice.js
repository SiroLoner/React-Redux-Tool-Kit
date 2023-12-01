const initState = {
    search: '',
    status: 'All',
    priority: []
}


const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filters/SearchFilterChange':
            return {
                ...state,
                search: action.payload
            }
        case 'filters/StatusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/PriorityFilterChange':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state;
    }
}



export default filtersReducer;