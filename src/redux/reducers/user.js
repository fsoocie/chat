const initialState = {
    data: null,
    token: window.localStorage.token,
    isAuth: !!window.localStorage.token
};

export default (state=initialState, {type,payload}) => {
    switch (type) {
        case 'USER:SET_DATA':
            return {...state, data:payload, token: window.localStorage.token, isAuth: true};
        case 'USER:SET_TOKEN':
            return {...state, token:payload};
        default: return state
    }
}