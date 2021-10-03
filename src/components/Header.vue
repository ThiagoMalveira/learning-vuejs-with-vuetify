<template>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Alunos</span>
        <span class="font-weight-light">DB</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="justify-end" v-if="alunoEstaLogado" @click="efetuarLogout">Logout</v-btn>
    </v-app-bar>
</template>

<script>
import { logoutMixin } from '../mixin'
import { mapGetters } from 'vuex'
export default {
  mixins: [logoutMixin],
  computed: {
    ...mapGetters(['alunoEstaLogado'])
  }
}
</script>

<style>

</style>