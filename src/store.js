import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/http'

import db from '@/api/db';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    alunos:{}
  },
  mutations: {
    DEFINIR_ALUNO_LOGADO(state, { token, aluno }) {
      state.token = token
      state.alunos = aluno
  },
    DESLOGAR_ALUNO(state) {
      state.token = null
      state.alunos = {}
    }
  },
  getters: {
    alunoEstaLogado: state => Boolean(state.token)
  },
  actions: {
    async deleteAluno(context, aluno) {
      await db.deleteAluno(aluno); 
    },
    async getAlunos(context) {
      context.state.alunos = [];
      let alunos = await db.getAlunos();
      alunos.forEach(c => {
        context.state.alunos.push(c);
      });
    },
    async saveAlunos(context, aluno) {
      await db.saveAlunos(aluno);
    },
    efetuarLogin({ commit }, usuario) {
      return new Promise((resolve, reject) => {
          http.post('auth/login', usuario)
              .then(response => {
                  commit('DEFINIR_ALUNO_LOGADO', {
                      token: response.data.access_token,
                      usuario: response.data.user
                  })
                  resolve(response.data)
              })
              .catch(err => {
                  console.log(err)
                  reject(err)
              })
      })
  }
  }
})
