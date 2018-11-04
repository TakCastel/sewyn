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
        v-if="!auth"
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
        <span class="text-truncate text-no-wrap ">Bonjour {{ username }}</span>
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
          <v-list dense>
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
      <v-container
        class="pb-5"
        fluid
        fill-height
        grid-list-lg>
        <v-layout 
          justify-center
          align-center
          row 
          wrap>
          <v-flex
            sm8
            xs12>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <s-bottom-nav/>
    <v-footer
      class="hidden-xs-and-down">
      © 2018
      <nuxt-link to="/policies">Mentions légales</nuxt-link>
    </v-footer>
  </v-app>
</template>

<script>
import userData from '@/mixins/globalUserData'

import SBottomNav from '@/components/SBottomNav'

export default {
  components: {
    SBottomNav
  },

  mixins: [
    userData
  ],

  data: () => ({
    items: [
      { title: 'Paramètres avancés' },
      { title: 'Déconnexion' }
    ]
  }),

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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
