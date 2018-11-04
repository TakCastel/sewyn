<template>
  <v-layout 
    row 
    wrap>
    <v-flex xs12>
      <h1>Accueil</h1>
      <v-layout 
        justify-start 
        row>
        <s-modal-form v-if="permission === 'root'"/>
      </v-layout>
    </v-flex>
    <v-flex
      v-for="(article, index) in news" 
      :key="index">
      <v-card 
        height="100%">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ article.title }}</h3>
            <small>Publié le {{ formatDate(article.createdAt) }}</small>
          </div>
        </v-card-title>
        <v-divider light/>
        <v-card-text class="grey darken-4">
          <span class="text">{{ article.text }}</span>
        </v-card-text>
        <v-divider 
          v-if="permission === 'root'" 
          light/>
        <v-card-actions 
          v-if="permission === 'root'"
          class="grey darken-4">
          <v-spacer/>
          <s-modal-form
            :content="article"
          />
          <s-action-delete
            :id="article.id"
          />
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

import userData from '@/mixins/globalUserData'
import toDate from '@/mixins/toDateTime'

import SModalForm from '@/components/SModalForm'
import SActionDelete from '@/components/SActionDelete'

export default {
  components: {
    SModalForm,
    SActionDelete
  },
  mixins: [
    userData,
    toDate
  ],
  computed: {
    ...mapState({
      news: state => state.newsfeed.items
    })
  },
  mounted () {
    this.$store.dispatch('getNewsFeed')
  },
}
</script>

<style lang="scss" scoped>
  .text {
    white-space: pre-wrap
  }
</style>
