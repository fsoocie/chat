import userAPI from "../../api/user";
import {notification} from 'antd'
const openNotificationWithIcon = ({type, message, description}) => {
    notification[type]({
        message,
        description
    });
};

const setUserData = (payload) => ({
    type: 'USER:SET_DATA',
    payload: payload
});

export const fetchUserData = () => dispatch => {
    userAPI.me().then(({data}) => {
        dispatch(setUserData(data))
    })
};

export const fetchSignIn = (signInData) => dispatch => {
    return userAPI.signIn(signInData).then(({data}) => {
            if (data.status === 'error') {
                openNotificationWithIcon({
                    type:'error',
                    message:'Ошибка!',
                    description:'Ошибка при авторизации. Пожалуйста, повторите попытку'
                })
            }else{
                openNotificationWithIcon({
                    type:'success',
                    message: 'Успех!',
                    description: 'Всё прошло отлично!'
                });
                window.localStorage.token = data.token;
                window.instance.defaults.headers.token = data.token;
                dispatch(fetchUserData())
            }
            return data
        }
    )
};