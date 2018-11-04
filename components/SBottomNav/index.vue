<template>
  <v-bottom-nav
    v-show="$vuetify.breakpoint.xsOnly"
    :value="true"
    fixed
  >
    <v-btn
      v-for="button in buttons"
      :key="button.value"
      :to="button.path"
      :value="button.value"
      flat>
      <span>{{ button.title }}</span>
      <v-icon>{{ button.icon }}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  data: () => ({
    buttons: [
      { path: '/', value: 'accueil', title: 'Accueil', icon: 'home' },
      { path: '/forum', value: 'forum', title: 'Forum', icon: 'chat_bubble' },
      { path: '/profile', value: 'profile', title: 'Profile', icon: 'person' }
    ]
  })
}
</script>
