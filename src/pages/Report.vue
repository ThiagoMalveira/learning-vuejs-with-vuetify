<template>
    <div>
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-col>
        <v-data-table
            :headers="headers"
            :items="alunos"
            :search="search"
            append-icon="mdi-arrow-up"
        >
        </v-data-table>
        </v-col>
        <v-col> 
                <v-btn
                color="accent"
                @click="backHomePage">Voltar
                </v-btn>
        </v-col>
    </div>
</template>

<script>
export default {
    data(){
        return {
            search: '',
            headers: [
                { text: 'Nome', value: 'nome'},
                { text: 'Matricula', value: 'matricula'},
                { text: 'Curso', value: 'curso'},
                { text: 'data inicio', value: 'data_inicio'},
                { text: 'data termino', value: 'data_termino'}
            ],
        }
    },
    computed: {
        alunos() {
            return this.$store.state.alunos;
        },
    },  
    methods: {
        backHomePage() {
            this.$router.push({ name: 'Homepage' });
        },
    }
}
</script>

<style>

</style>