<template>
  <v-container 
    class="pa-0"
    fluid 
    grid-list-md>
    <v-layout 
      row 
      wrap>
      <v-flex 
        v-for="(item, index) in content" 
        :key="index" 
        xs12>
        <v-card>
          <v-toolbar>
            <v-spacer/>
            <v-toolbar-title>{{ item.title }}</v-toolbar-title>
            <v-btn
              fab
              small
              color="primary"
              bottom
              left
              absolute
              @click="dialog = !dialog">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>
          <s-layout-topic
            :topics="item.topics"/>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SLayoutTopic from '@/components/SLayoutTopic'

export default {
  components: {
    SLayoutTopic
  },
  props: {
    content: {
      type: Array,
      default: undefined
    }
  },
  mounted () {
    this.$store.dispatch('getContent')
  },
}
</script>
