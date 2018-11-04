<template>
  <div>
    <h1>Forum</h1>
    <s-layout-category
      :content="content"/>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import SLayoutCategory from '@/components/SLayoutCategory'

export default {
  components: {
    SLayoutCategory
  },

  computed: {
    ...mapState({
      content: state => state.forum.content
    })
  },

  middleware: 'protected'
}
</script>
