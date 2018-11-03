<template>
  <v-container
    fluid
    grid-list-lg>
    <v-layout 
      justify-center
      row 
      wrap>
      <v-flex xs12>
        <h1>Forum</h1>
        <s-layout-topic
          :topics="topics"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { mapState } from 'vuex'
import SLayoutTopic from '@/components/SLayoutTopic'

export default {
  components: {
    SLayoutTopic
  },

  computed: {
    ...mapState({
      topics: state => state.forum.topics
    })
  },

  middleware: 'protected'
}
</script>
