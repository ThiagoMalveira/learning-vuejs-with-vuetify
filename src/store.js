import Vue from 'vue'
import Vuex from 'vuex'

import db from '@/api/db';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pacientes:[]
  },
  mutations: {

  },
  actions: {
    async deletePaciente(context, paciente) {
      await db.deletePaciente(paciente); 
    },
    async getPacientes(context) {
      context.state.pacientes = [];
      let pacientes = await db.getPacientes();
      pacientes.forEach(c => {
        context.state.pacientes.push(c);
      });
    },
    async savePaciente(context, paciente) {
      await db.savePaciente(paciente);
    }
  }
})
