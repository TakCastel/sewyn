<template>
  <v-container
    fluid
    grid-list-lg>
    <v-layout 
      justify-center
      row 
      wrap>
      <v-flex
        sm8
        xs12>
        <h1>Accueil</h1>
        <v-layout 
          justify-start 
          row>
          <s-modal-form v-if="permission === 'root'"/>
        </v-layout>
      </v-flex>
      <v-flex
        v-for="(article, index) in news" 
        :key="index" 
        xs12
        sm8>
        <v-card 
          height="100%">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ article.title }}</h3>
            </div>
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <span class="text">{{ article.text }}</span>
          </v-card-text>
          <v-divider v-if="permission === 'root'"/>
          <v-card-actions v-if="permission === 'root'">
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
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import SModalForm from '@/components/SModalForm'
import SActionDelete from '@/components/SActionDelete'
import userData from '@/mixins/globalUserData'

export default {
  components: {
    SModalForm,
    SActionDelete
  },
  mixins: [
    userData
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
