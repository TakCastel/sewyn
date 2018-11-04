<template>
  <v-layout 
    row 
    wrap>
    <v-flex xs12>
      <h1>Profile</h1>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          Profil de username
          <v-spacer/>
          <v-btn
            color="primary"
            outline
            small
            icon
            @click.native="readonly = false">
            <v-icon small>edit</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              :disabled="readonly"
              outline
              label="Nom"
              placeholder="username"/>
            <v-text-field
              :disabled="readonly"
              outline
              label="Email"
              placeholder="user@email"/>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn 
            :disabled="readonly" 
            class="primary"
            @click.native="readonly = true">
            Enregistrer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: ['protected'],
  data: () => ({
    readonly: true,
  })
}
</script>
