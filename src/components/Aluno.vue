<template>
  <v-card>
    <v-card-title>
      {{ aluno.nome }} 
    </v-card-title>
      <v-card-text>
        Matricula : {{aluno.matricula}}
      </v-card-text>
    <v-card-actions>
      <v-btn color="red" @click="$emit('delete',aluno)">Delete</v-btn>
      <v-btn @click="$emit('edit',aluno)">Edit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['aluno'], 
};
</script>
