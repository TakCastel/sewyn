<template>
  <v-container 
    fluid 
    fill-height>
    <v-layout 
      row 
      wrap 
      align-center
      justify-center>
      <v-flex 
        lg4
        md6
        sm8 
        xs12>
        <v-card>
          <v-form 
            ref="form" 
            v-model="valid"
            lazy-validation 
            @submit.prevent="handleSubmit">
            <v-card-title primary-title>
              <h2 v-if="!isRegistered">Création d'un compte</h2>
              <h2 v-else>Connexion</h2>
            </v-card-title>
            <v-divider/>
            <v-card-text>
              <v-text-field
                v-model="form.username"
                :rules="form.usernameRules"
                :label="!isRegistered ? 'Nom' : 'Nom ou adresse mail'"
                type="text"
                placeholder="John Doe"
                outline
                required
              />
              <v-text-field
                v-if="!isRegistered"
                v-model="form.email"
                :rules="!isRegistered ? form.emailRules : null"
                :required="!isRegistered"
                placeholder="johndoe@mail.com"
                outline
                label="Adresse mail"
              />
              <v-text-field
                v-model="form.password"
                :append-icon="form.passwordShow ? 'visibility_off' : 'visibility'"
                :rules="form.passwordRules"
                :type="form.passwordShow ? 'text' : 'password'"
                name="input-10-1"
                label="Mot de passe"
                outline
                @click:append="form.passwordShow = !form.passwordShow"
              />
            </v-card-text>
            <v-card-actions>
              <v-container
                grid-list-md>
                <v-layout 
                  row 
                  wrap>
                  <v-flex xs12>
                    <v-btn
                      block 
                      large
                      color="primary"
                      type="submit">
                      {{ !isRegistered ? 'Créer' : 'Se connecter' }}
                    </v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn
                      v-show="!isRegistered"
                      outline
                      block 
                      large
                      color="primary"
                      @click.native="isRegistered = true">
                      J'ai déjà un compte
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isRegistered: false,
    valid: true,
    form: {
      username: '',
      usernameRules: [
        v => !!v || 'Vous devez renseigner un nom',
        v => (v && v.length <= 36) || 'Votre nom ne doit pas dépasser 36 caractères'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Vous devez renseigner une adresse mail',
        v => /.+@.+/.test(v) || 'Votre adresse mail doit être une adresse valide'
      ],
      password: '',
      passwordShow: false,
      passwordRules: [
        v => !!v || 'Vous devez renseigner un mot de passe',
        v => (v && v.length >= 8) || '8 caractères minimum',
      ]
    }
  }),

  methods: {
    handleSubmit () {
      if (this.$refs.form.validate()) {
        if (this.isRegistered) {
          this.$store.dispatch('authenticateUser', {
            identifier: this.form.username,
            password: this.form.password
          })
        } else {
          this.$store.dispatch('registerUser', {
            username: this.form.username,
            email: this.form.email,
            password: this.form.password
          })
        }
        this.$refs.form.reset()
      }
    }
  }
}
</script>
