<template>
  <div>
    <v-card>
      <v-toolbar>
        <v-spacer/>
        <v-toolbar-title>Titre de catégorie</v-toolbar-title>
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
      <v-list subheader>
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
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon :color="topic.active ? 'teal' : 'grey'">chat_bubble</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    topics: {
      type: Array,
      default: undefined
    }
  },
  mounted () {
    this.$store.dispatch('getTopics')
    console.log('ici')
  },
  methods: {
    openTopic () {
      console.log('topic ouvert')
    }
  }
}
</script>
