import messagesAPI from "../../api/messages";

const setMessages = (messages) => ({
    type: 'MESSAGES:SET_ITEMS',
    payload: messages
});
const setIsLoading = (bool) => ({
    type: 'MESSAGES:SET_IS_LOADING',
    payload: bool
});

export const fetchMessages = (dialogId) => dispatch => {
    dispatch(setIsLoading(true));
    messagesAPI.getAllMessagesById(dialogId).then(({data}) => {
            dispatch(setMessages(data));
            dispatch(setIsLoading(false))
        }
    ).catch(() => dispatch(setIsLoading(false)))
};