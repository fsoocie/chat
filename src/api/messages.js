import instance from '../core/core'

export default {
    getAllMessagesById(id) {
        return instance.get('/messages?dialog='+id)
    }
}