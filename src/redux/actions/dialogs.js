import dialogsAPI from "../../api/dialogs";

const setDialogs = (dialogs) => ({
    type: 'DIALOGS:SET_ITEMS',
    payload: dialogs
});
const setIsLoading = (bool) => ({
    type: 'DIALOGS:SET_IS_LOADING',
    payload: bool
});

export const setCurrentDialogId = (dialogId) => ({
    type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
    payload: dialogId
});

export const fetchDialogs = () => dispatch => {
    dispatch(setIsLoading(true));
    dialogsAPI.getAllDialogs().then(({data}) => {
            console.log(data);
            dispatch(setDialogs(data));
            dispatch(setIsLoading(false))
        }
    ).catch(() => dispatch(setIsLoading(false)))
};