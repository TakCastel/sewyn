<template>
  <div>
    <div 
      v-for="(topic, index) in topics" 
      :key="index">
      <h3>{{ topic.title }}</h3>
      <p>{{ topic.text }}</p>
    </div>
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
}
</script>
