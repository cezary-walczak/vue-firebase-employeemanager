<template lang="pug">
  section#navbar
    nav
      router-link(:to="{ name: 'Dashboard' }") Employee Manager
      router-link(:to="{ name: 'NewEmployee' }") +
      router-link(:to="{ name: 'Login' }") Login
      router-link(:to="{ name: 'Register' }") Register
      div(@click="logout") Logout
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.push({ name: 'Login' })
      })
      .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="stylus" scoped>
  section#navbar
    nav
      display flex
      flex-flow column
</style>
