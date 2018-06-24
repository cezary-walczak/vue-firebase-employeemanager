<template lang="pug">
  section#login
    h3 Login
    form(@submit.prevent="login")
      input(type="email" placeholder="email" v-model="email")
      input(type="password" placeholder="password" v-model="password")
      input(@click="login" type="button" value="login")
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((cred) => {
        console.log(`You have login as ${cred.user.email}`)
        this.$router.push({ name: 'Dashboard' })
      })
      .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="stylus" scoped>
  section#login
    form 
      display flex
      flex-flow column
      width: 200px
      margin-bottom 10px
</style>
