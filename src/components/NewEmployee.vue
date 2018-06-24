<template lang="pug">
  section#new-employee
    h3 New employee
    form(@submit.prevent="saveEmployee")
      input(type="text" placeholder="id" v-model="employee_id")
      input(type="text" placeholder="name" v-model="name")
      input(type="text" placeholder="dept" v-model="dept")
      input(type="text" placeholder="position" v-model="position")
      input(type="submit" value="save")
    router-link(to="/") cancel
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'NewEmployee',
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null
    }
  },
  methods: {
    saveEmployee() {
      db.collection('employees').add({
        'employee_id': this.employee_id,
        'name': this.name,
        'dept': this.dept,
        'position': this.position
      })
      .then(() => {
        this.$router.push({ name: 'Dashboard' })
      })
      .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="stylus" scoped>
  section#new-employee
    form 
      display flex
      flex-flow column
      width: 200px
      margin-bottom 10px
</style>
