const reducer = (state, action) => {
    switch (action.type) {
        case 'SET-USERNAME':
            return { ...state, username: action.payload }
        case 'SET-PASSWORD':
            return { ...state, password: action.payload }
        case 'EVALUATE-LOGIN':
            return { ...state, isLoggedin: state.username === state.password ? true : false }
        default:
            return state;
    }

};

export default reducer;