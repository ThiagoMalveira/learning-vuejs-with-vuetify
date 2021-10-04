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
            :items="pacientes"
            :search="search"
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
                { text: 'Nome', value: 'name'},
                { text: 'Idade', value: 'age'},
                { text: 'Quarto', value: 'bedroom'},
                { text: 'Andar', value: 'floor'},
                { text: 'Estado atual', value: 'status'},
                { text: 'Data de entrada', value: 'date'},
                { text: 'Data do último checkup', value: 'time'},
            ],
        }
    },
    computed: {
        pacientes() {
            return this.$store.state.pacientes;
        },
    },  
    methods: {
        backHomePage() {
            this.$router.push({ name: 'home' });
        },
    }
}
</script>

<style>

</style>