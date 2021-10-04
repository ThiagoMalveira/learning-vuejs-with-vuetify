<template>
  <div>

    <v-form>
      <v-container>
        <!-- Eu passei aqui -->
        <v-row>
          <v-col>
            <v-text-field v-model="paciente.name" label="Nome" required />
          </v-col>
          <v-col>
            <v-text-field v-model="paciente.age" label="Idade" required type="numeric" min="0" max="30" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="paciente.bedroom" label="Quarto" required type="numeric" min="0" max="5" />
          </v-col>
          <v-col>
            <v-select :items="items" label="Estado atual" v-model="paciente.status" required />
          </v-col>
          <v-col>
            <v-text-field v-model="paciente.floor" label="Andar" required type="numeric" min="0" max="5"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="11" sm="5">
            <v-menu transition="scale-transition" offset-y max-width="290px" min-width="290px" :close-on-content-click="false" :nudge-right="40">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="paciente.date" label="Data de entrada" prepend-icon="mdi-calendar" clearable readonly v-bind="attrs" v-on="on" />
              </template>
              <v-date-picker v-model="paciente.date" no-title scrollable/>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="11" sm="5">
            <v-menu transition="scale-transition" offset-y max-width="290px" min-width="290px" :close-on-content-click="false" :nudge-right="40">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="paciente.time" label="Horário do checkup" prepend-icon="mdi-clock-time-four-outline" clearable readonly v-bind="attrs" v-on="on"/>
              </template>
                <v-time-picker v-model="paciente.time" format="24hr" no-title scrollable />
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="green" @click="save">Salvar Paciente</v-btn>
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
      paciente:null,
      items: [
        'dormindo',
        'alimentando',
        'medicando',
        'exercitando'
      ]
    }
  },
  created() {
    if(this.$route.params.paciente) {
      this.paciente = this.$route.params.paciente;
    } else {
      this.paciente = { name:'', age: 0 };
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('savePaciente', this.paciente);
      this.$router.push('/');
    },
    backHomePage() {
      this.$router.push({ name: 'home' });
    },
  }
};
</script>