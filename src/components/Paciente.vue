<template>

  <v-card>
    <v-card-title>
      {{ paciente.name }}
    </v-card-title>
    <v-card-text>
      <p>
       O paciente tem {{ paciente.age }} anos e está {{ paciente.status}} no quarto {{ paciente.bedroom }} no andar {{ paciente.floor}}.
       O paciente entrou na data {{ paciente.date }} e o horário do ultimo checkup foi às {{ paciente.time }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red" @click="$emit('delete',paciente)">Delete</v-btn>
      <v-btn @click="$emit('edit',paciente)">Edit</v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  props: ['paciente'], 
  data: () => ({

  }),
  methods: {
  }
};
</script>
