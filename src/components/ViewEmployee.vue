<template lang="pug">
  section#dashboard
    h3 Dashboard
    ul
      li(v-for="employee in employees")
        div id: {{employee.employee_id}}
        div name: {{employee.name}}
        div dept: {{employee.dept}}
        div position: {{employee.position}}
        router-link(:to="{ name: 'Dashboard' }") back
    br
    input(@click="deleteEmployee" type="button" value="delete")
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Dashboard',
  data () {
    return {
      employees: []
    }
  },
  methods: {
    fetchEmployee() {
      db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const employee = {
            'id': doc.id,
            'employee_id': doc.data().employee_id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            'position': doc.data().position
          }
          this.employees.push(employee)
        })
      })
      .catch(error => console.log(errors))
    },

    deleteEmployee() {
      db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          doc.ref.delete()
          this.$router.push({ name: 'Dashboard' })
        })
      })
      .catch(error => console.log(errors))
    }
  },
  created() {
    this.fetchEmployee()
  }
}
</script>

<style lang="stylus" scoped>
  section#view-employee
    ul
      li
        margin 10px
        padding 10px
</style>
