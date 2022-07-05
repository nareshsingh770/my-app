
const initialDetail = {
    name: '',
    email: '',
    subject: '',
    message: ''
}
const messageInput = (state = initialDetail, action) => {
    switch (action.type) {
        case 'DETAIL_INPUT_USERS':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default: return state
    }
}

export default messageInput;