<template>
  <div>
    <h1>Forum</h1>
    <s-layout-topic
      :topics="topics"/>
  </div>
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
