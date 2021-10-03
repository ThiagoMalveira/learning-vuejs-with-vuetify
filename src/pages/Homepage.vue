<template>
  <v-container>
    <v-row>
      <v-col cols="5" v-for="(aluno,idx) in alunos" :key="idx">
        <aluno :aluno="aluno" @delete="deleteAluno" @edit="editaluno" />
      </v-col>
    </v-row>
    <div class="justify-space-between mb-6">
      <v-row>
        <v-col>
          <v-btn @click="addAluno">Adicionar aluno</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="reportAluno">Relatório de alunos</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Aluno from '@/components/Aluno.vue';

export default {
  components: {
    Aluno
  },
  computed: {
    alunos() {
      return this.$store.state.alunos;
    }
  },
  created() {
    this.$store.dispatch('getAlunos');
  },
  methods: {
    addAluno() {
      this.$router.push({ name: 'edit' });
    },
    reportAluno() {
      this.$router.push({ name: 'report' });
    },
    async deleteAluno(aluno) {
      await this.$store.dispatch('deleteAluno', aluno);
      this.$store.dispatch('getAlunos');
    },
    editaluno(aluno) {
      this.$router.push({ name: 'edit', params: {aluno: aluno} });
    },
    createCurso(){
      this.$router.push({ name: 'CreateCurso'});
    }
  }
};
</script>
