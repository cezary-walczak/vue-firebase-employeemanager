<template lang="pug">
  section#edit-employee
    h3 Edit employee
    form(@submit.prevent="updateEmployee")
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
  name: 'EditEmployee',
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null
    }
  },
  methods: {
    fetchEmployee() {
      db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.employee_id = doc.data().employee_id
          this.name = doc.data().name
          this.dept = doc.data().dept
          this.position = doc.data().position
        })
      })
      .catch(error => console.log(error))
    },

    updateEmployee() {
      db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          doc.ref.update({
            'employee_id': this.employee_id,
            'name': this.name,
            'dept': this.dept,
            'position': this.position
          })
          .then(() => {
            this.$router.push({ name: 'ViewEmployee', params: { employee_id: this.employee_id } })
          })
        })
      })
      .catch(error => console.log(error))
    },
  },
  created() {
    this.fetchEmployee()
  }
}
</script>

<style lang="stylus" scoped>
  section#edit-employee
    form 
      display flex
      flex-flow column
      width: 200px
      margin-bottom 10px
</style>
