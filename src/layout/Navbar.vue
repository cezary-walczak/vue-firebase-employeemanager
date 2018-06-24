<template lang="pug">
  section#navbar
    nav
      router-link(v-if="isLoggedIn" :to="{ name: 'Dashboard' }") Employee Manager
      router-link(v-if="isLoggedIn" :to="{ name: 'NewEmployee' }") +
      router-link(v-if="!isLoggedIn" :to="{ name: 'Login' }") Login
      router-link(v-if="!isLoggedIn" :to="{ name: 'Register' }") Register
      div(v-if="isLoggedIn" @click="logout") Logout
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
    },
    checkIfLogged() {
      if (firebase.auth().currentUser) {
        this.isLoggedIn = true,
        this.currentUser = firebase.auth().currentUser.email
      }
    }
  },
  created() {
    this.checkIfLogged()
  }
}
</script>

<style lang="stylus" scoped>
  section#navbar
    nav
      display flex
      flex-flow column
</style>
