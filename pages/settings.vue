<template>
  <v-container
    fluid
    grid-list-lg>
    <v-layout 
      justify-center
      row 
      wrap>
      <v-flex xs12>
        <h1>Paramètres avancés</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  middleware: 'protected'
}
</script>
