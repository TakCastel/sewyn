<template>
  <v-list v-if="topics.length === 0">
    <v-subheader inset>Aucun topics</v-subheader>
  </v-list>
  <v-list 
    v-else 
    subheader>
    <v-subheader inset>Topics récents</v-subheader>
    <v-list-tile
      v-for="topic in topics"
      :key="topic.title"
      avatar
      @click="openTopic"
    >
      <v-list-tile-avatar>
        <img src="@/assets/img/default/avatar.jpg">
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="topic.title"/>
        <v-list-tile-sub-title 
          class="grey--text caption" 
          v-html="`Dernière modification le ${formatDate(topic.updatedAt)}`"/>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-icon :color="topic.active ? 'teal' : 'grey'">chat_bubble</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
import toDate from '@/mixins/toDateTime'

export default {
  mixins: [
    toDate,
  ],

  props: {
    topics: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  methods: {
    openTopic () {
      console.log('topic ouvert')
    }
  }
}
</script>
