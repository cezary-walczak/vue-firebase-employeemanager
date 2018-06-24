<template lang="pug">
  section#register
    h3 Register
    form(@submit.prevent="register")
      input(type="email" placeholder="email" v-model="email")
      input(type="password" placeholder="password" v-model="password")
      input(@click="register" type="button" value="register")
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
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((cred) => {
        console.log(`You have register as ${cred.user.email}`)
        this.$router.push({ name: 'Dashboard' })
      })
      .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="stylus" scoped>
  section#register
    form 
      display flex
      flex-flow column
      width: 200px
      margin-bottom 10px
</style>
