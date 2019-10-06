import Api from '@/services/Api'

export default {
  register(user_infos) {
    return Api().post('register', user_infos)
  }
}
