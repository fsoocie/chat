import instance from '../core/core'

export default {
    getAllDialogs() {
      return instance.get('/dialogs')
    }
}