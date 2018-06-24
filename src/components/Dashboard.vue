<template lang="pug">
  section#dashboard
    h3 Dashboard
    ul
      li(v-for="employee in employees")
        div id: {{employee.employee_id}}
        div name: {{employee.name}}
        div dept: {{employee.dept}}
        div position: {{employee.position}}
        router-link(:to="{ name: 'ViewEmployee', params: { employee_id: employee.employee_id } }") edit
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
    fetchEmployees() {
      db.collection('employees').orderBy('employee_id').get()
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
      .catch(error => console.log(error))
    }
  },
  created() {
    this.fetchEmployees()
  }
}
</script>

<style lang="stylus" scoped>
  section#dashboard
    ul
      li
        margin 10px
        padding 10px
</style>