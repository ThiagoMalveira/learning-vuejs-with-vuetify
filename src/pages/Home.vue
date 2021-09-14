<template>

  <v-container>
    <v-row>
      <v-col cols="4" v-for="(paciente,idx) in pacientes" :key="idx">
        <Paciente :paciente="paciente" @delete="deletePaciente" @edit="editPaciente" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="addPaciente">Adicionar paciente</v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Paciente from '@/components/Paciente.vue';

export default {
  components: {
    Paciente
  },
  computed: {
    pacientes() {
      return this.$store.state.pacientes;
    }
  },
  created() {
    this.$store.dispatch('getPacientes');
  },
  methods: {
    addPaciente() {
      this.$router.push({ name: 'edit' });
    },
    async deletePaciente(paciente) {
      await this.$store.dispatch('deletePaciente', paciente);
      this.$store.dispatch('getPacientes');
    },
    editPaciente(paciente) {
      this.$router.push({ name: 'edit', params: {paciente: paciente} });
    }
  }
};
</script>
