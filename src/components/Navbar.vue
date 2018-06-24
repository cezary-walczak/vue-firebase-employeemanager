<template lang="pug">
  section#navbar
    nav
      router-link(:to="{ name: 'Dashboard' }") Employee Manager
      router-link(:to="{ name: 'NewEmployee' }") +
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  section#navbar
    nav
      display flex
      flex-flow column
</style>
