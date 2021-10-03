<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="10" sm="8" md="5">
            <v-card class="elevation-11">
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2"
                          color="green"
                        >Criar usuário</h1>
                        <v-col></v-col>
                        <v-form>
                          <v-text-field
                            label="Matricula"
                            v-model="aluno.matricula"
                            outlined
                            append-icon="mdi-account"
                            name="Email"
                            type="text"
                            color="green"
                          />
                          <v-text-field
                            label="Email"
                            v-model="aluno.email"
                            outlined
                            append-icon="mdi-email"
                            name="Email"
                            type="text"
                            color="green"
                          />
                          <v-text-field
                            label="Password"
                            v-model="aluno.senha"
                            name="password"
                            type="password"
                            append-icon="mdi-lock"
                            outlined
                            color="green"
                          />
                        </v-form>
                      </v-card-text>
                    <div justify="between" class="mt-3 mb-3 text-center">
                        <v-btn rounded color="green" dark @click="CriarUsuario">Criar</v-btn>
                        <v-btn rounded color="green" dark @click="backToLogin">Voltar</v-btn>
                    </div>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    data(){
      return {
        aluno: {
          nome: "",
          senha: "",
          email: ""
        }
      }
    },
    methods: {
      backToLogin(){
        this.$router.push({ name: 'home'})
      },
      CriarUsuario(){
        this.$http
        .post("auth/register", this.aluno)
        .then(resposta => console.log(resposta))
        .catch(erro => console.log(erro))
      }
    }
}
</script>