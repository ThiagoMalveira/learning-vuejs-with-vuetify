<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field 
              v-model="aluno.nome" 
              label="Nome" 
              required 
              outlined 
              append-icon="mdi-account"
            />
          </v-col>
          <v-col>
            <v-text-field 
              v-model="aluno.matricula" 
              label="Matricula" 
              append-icon="mdi-account"
              outlined 
              required 
              type="numeric" 
              min="0" 
              max="7" 
            />
          </v-col>
          <v-col>
            <v-text-field 
              v-model="aluno.email" 
              label="Email" 
              outlined 
              required 
              append-icon="mdi-email"
              type="email" 
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
              <v-select 
                required 
                :items="cursos" 
                label="Cursos" 
                outlined 
                v-model="aluno.curso" 
                append-icon="mdi-arrow-up"
              />
          </v-col>
          <v-col>
              <v-menu 
              transition="scale-transition" 
              offset-y max-width="290px" 
              min-width="290px" 
              :close-on-content-click="false" 
              :nudge-right="40">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field 
                    v-model="aluno.data_inicio" 
                    label="Data de inicio" 
                    append-icon="mdi-calendar" 
                    clearable 
                    readonly
                    outlined
                    v-bind="attrs" 
                    v-on="on" 
                  />
                </template>
                  <v-date-picker 
                  v-model="aluno.data_inicio" 
                  no-title 
                  scrollable
                  />
              </v-menu>
              <v-menu 
              transition="scale-transition" 
              offset-y max-width="290px" 
              min-width="290px" 
              :close-on-content-click="false" 
              :nudge-right="40">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field 
                    v-model="aluno.data_termino" 
                    label="Data de termino" 
                    append-icon="mdi-calendar" 
                    clearable 
                    readonly
                    outlined
                    v-bind="attrs" 
                    v-on="on" />
                </template>
                  <v-date-picker 
                    v-model="aluno.data_termino" 
                    no-title 
                    scrollable
                  />
              </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="green" @click="save">Salvar aluno</v-btn>
          </v-col>
          <v-col>
            <v-btn color="accent" @click="backHomePage">
              Voltar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      aluno:null,
      cursos: [
        'Engenharia da Computação',
        'Analise e desenvolvimento de sistemas',
        'Sistemas de Informação',
        'Gestão de Recursos Humanos',
        'Logistica',
        'Contabilidade'
      ]
    }
  },
  created() {
    if(this.$route.params.aluno) {
      this.aluno = this.$route.params.aluno;
    } else {
      this.aluno = { nome:'', matricula: '', email: '', cursos: ''};
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('saveAlunos', this.aluno);
      this.backHomePage();
    },
    backHomePage() {
      this.$router.push({ name: 'Homepage' });
    },
  },
};
</script>