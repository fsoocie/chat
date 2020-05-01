import instance from '../core/core'

export default {
    signIn(postData) {
        return instance.post('/user/login', postData)
    },
    me(){
        return instance.get('/user/me')
    },
    signUp(postData) {
        return instance.post('/user/register', postData)
    }
}