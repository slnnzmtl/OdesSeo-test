import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    localUsers: [],
    currentUser: {},
    editableUser: null,
  },
  mutations: {
    setLocalUsers(state, array) {
      state.localUsers = array
      localStorage.setItem('Users', JSON.stringify(array))
    },
    setCurrentUser(state, object) {
      state.currentUser = object
    },
    setEditableUser(state, idx) {
      state.editableUser = idx
    }
  },
  actions: {
    getLocalUsers({ commit }) {
      var users = []
      if (localStorage.getItem('Users')) {
        var local = JSON.parse(localStorage.getItem('Users'))
        for (var i = 0; i < local.length; i++){
          users.push(local[i])
        }
        commit('setLocalUsers', users)
      }
    },
    addUser({ commit }) {
      var users = this.state.localUsers
      users.push(this.state.currentUser)
      commit('setLocalUsers', users)
    },

    deleteUser({ commit }, idx) {
      var temp = this.state.localUsers
      temp.splice(idx, 1)
      commit('setLocalUsers', temp)
    },

    resetCurrentUser({ commit }) {
      commit('setCurrentUser', {})
    },

    editUser({commit}, values) {
      commit('setEditableUser', values.idx)
      commit('setCurrentUser', values.obj)
      console.log(this.state.editableUser)
    },

    saveList({commit}) {
      var idx = this.state.editableUser
      var local = this.state.localUsers
      var current = this.state.currentUser
      local.splice(idx, current)
      commit('setLocalUsers', local)
      commit('setEditableUser', null)
    }
  },
  getters: {
    localUsers: state => {
      return state.localUsers
    },
    currentUser: state => {
      return state.currentUser
    },
    editableUser: state => {
      return state.editableUser
    }
  }
})
