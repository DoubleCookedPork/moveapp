import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 初始化的时候从本地获取数据，防止刷新丢失token
    user: auth.getUser()
  },
  mutations: {
    // 登录成功条用mutations更新容器中的user状态数据
    setUser (state, data) {
      state.user = data
      // 将数据放到本地存储
      auth.saveUser(state.user)
    }
  },
  actions: {

  }
})
