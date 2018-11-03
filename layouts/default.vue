<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title>Sewyn</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn 
          flat 
          to="/">Accueil</v-btn>
        <v-btn 
          flat 
          to="/forum">Forum</v-btn>
        <v-btn 
          flat 
          to="/profile">Profile</v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <div 
        v-if="!isAuthenticated"
        class="logger">
        <v-btn 
          color="transparent"
          outline
          large
          icon
          to="/login">
          <v-icon 
            large 
            color="primary">account_circle</v-icon>
        </v-btn>
      </div>
      <div 
        v-else 
        class="logger">
        <span class="text-truncate text-no-wrap ">Bonjour {{ user ? user.username : 'Anonyme' }}</span>
        <v-menu 
          bottom 
          left>
          <v-btn 
            slot="activator"
            color="transparent"
            outline
            large
            icon>
            <v-icon 
              large 
              color="primary">more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click="handleClickMenu(index)">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
    <s-bottom-nav/>
    <v-footer
      class="hidden-xs-and-down">
      © 2018
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import roletype from '@/mixins/roletype'
import SBottomNav from '@/components/SBottomNav'

export default {
  components: {
    SBottomNav
  },
  middleware: [
    'connected'
  ],
  mixins: [
    'roletype'
  ],
  data: () => ({
    items: [
      { title: 'Paramètres avancés' },
      { title: 'Déconnexion' }
    ]
  }),
  computed: {
    ...mapState({
      isAuthenticated: state => state.auth.isAuthenticated,
      user : state => state.auth.session.user  
    })
  },
  methods: {
    handleClickMenu (menu) {
      switch (menu) {
        case 0:
          this.$router.push('/settings')
          break
        case 1:
          this.$store.dispatch('logOut')
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-footer {
    padding: 0 16px;
  }
</style>
