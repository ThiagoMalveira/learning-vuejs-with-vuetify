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
                        >Login</h1>
                        <v-col></v-col>
                        <v-form>
                          <v-text-field
                            label="Email"
                            outlined
                            v-model="usuario.email"
                            append-icon="mdi-email"
                            name="Email"
                            type="text"
                            color="green"
                          />

                          <v-text-field
                            label="Password"
                            v-model="usuario.senha"
                            name="password"
                            type="password"
                            append-icon="mdi-lock"
                            outlined
                            color="green"
                          />
                        </v-form>
                     <div class="text-center mt-3">
                        <v-btn 
                          rounded 
                          color="green" 
                          dark 
                          @click="efetuarLogin">
                          LOGIN
                        </v-btn>
                      </div>
                      </v-card-text>
                      <v-col class="text-center mt-3">
                        <router-link :to="{ name: 'cadastro' }"> Não possui um cadastro, cadastre-se aqui!</router-link>
                      </v-col>  
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
        return{
            usuario: {},
            mensagemErro: ''
        }
    },
    computed: {
        alunos() {
            return this.$store.state.alunos;
        },
    },
    methods: {
        efetuarLogin(){
            this.$store
            .dispatch("efetuarLogin", this.usuario)
            .then(() => this.$router.push({ name: "Homepage" }))
            .catch(err => {
                if(err.request.status == 401){
                    this.mensagemErro = "Login ou senha inválido(s)!";
                }
            })
        }
    }
}
</script>
