<template>
  <v-dialog 
    v-model="dialog" 
    persistent 
    fullscreen>
    <v-btn 
      v-if="content.id"
      slot="activator" 
      color="primary"
      class="mx-1"
      icon
      outline
      small
      dark>
      <v-icon small>edit</v-icon>
    </v-btn>
    <v-btn 
      v-else
      slot="activator" 
      color="primary" 
      dark>
      <v-icon left>add</v-icon>
      Publier une news
    </v-btn>
    <v-card>
      <v-card-title>
        <span 
          v-if="content.id" 
          class="headline">Editer une annonce</span>
        <span 
          v-else 
          class="headline">Poster une annonce</span>
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-form 
          ref="form"
          v-model="form.valid" 
          lazy-validation>
          <v-container 
            grid-list-md 
            class="pa-0">
            <v-layout 
              row
              wrap>
              <v-flex xs12> 
                <v-text-field
                  v-model="content.title"
                  :rules="form.titleRules"
                  :placeholder="content.id ? `${content.title}` : 'Votre titre'"
                  outline
                  label="Sujet"
                  required
                />
              </v-flex>
              <v-flex xs12> 
                <v-textarea
                  v-model="content.text"
                  :rules="form.contentRules"
                  :placeholder="content.id ? `${content.content}` : 'Votre message'"
                  outline
                  flat
                  textarea
                  auto-grow
                  label="Message"
                  required
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-spacer/>
        <v-btn 
          color="primary" 
          outline 
          @click.native="dialog = false">Annuler</v-btn>
        <v-btn 
          color="primary"  
          @click.native="handleSubmit">{{ content.id ? 'Editer' : 'Poster' }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({
        title: '',
        text: ''
      })
    }
  },

  data: () => ({
    dialog: false,
    form: {
      valid: true,
      titleRules: [
        v => !!v || 'Vous devez renseigner un titre',
        v => (v && v.length <= 36) || 'Votre titre ne doit pas contenir plus de 36 caractères'
      ],
      textRules: [
        v => !!v || 'Vous devez écrire quelque chose',
      ]
    }
  }),

  methods: {
    handleSubmit () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('submitNews', {
          id: this.content ? this.content.id : undefined,
          title: this.content.title,
          text: this.content.text
        })
        this.dialog = false
        this.$refs.form.reset()
      }
    }
  }
}
</script>
