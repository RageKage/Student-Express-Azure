<template>
  <div id="app">
    <new-student-form v-on:student-added="newStudentAdded"></new-student-form>
    <student-table
      v-bind:students="students"
      v-on:student-arrived-or-left="studentArrivedOrLeft"
      v-on:delete-student="studentDelete"
    ></student-table>
    <student-message :student="mostRecentStudents"></student-message>
  </div>
</template>

<script>
import NewStudentForm from "./components/NewStudentForm.vue";
import StudentMessage from "./components/StudentMessage.vue";
import StudentTable from "./components/StudentTable.vue";

export default {
  name: "App",
  components: {
    NewStudentForm,
    StudentMessage,
    StudentTable,
  },
  data() {
    return {
      students: [],
      mostRecentStudents: {},
    };
  },
  mounted() {
    this.updateStudents();
  },
  methods: {
    updateStudents() {
      this.$student_api.getAllStudents().then((students) => {
        this.students = students;
      }).catch(() => { alert( "Unable to fetch student list")})
    },
    newStudentAdded(student) {
      this.$student_api.addStudents(student).then(() => {
        this.updateStudents();
      })
      .catch(err => {
        let msg = err.response.data.join(',')
        // console.log(`Error Adding Student ${msg}`)
        alert(`Error Adding Student ${msg}`)
      })
    },
    studentArrivedOrLeft(student, present) {
      student.present = present
      this.$student_api.updateStudent(student).then( () => {
        this.mostRecentStudent = student
        this.updateStudents()
      }).catch(() => { alert( "Unable to Update student")})
    },
    studentDelete(student) {
      this.$student_api.deleteStudent(student.id).then( () => {
        this.updateStudents()
        this.mostRecentStudents = {} // this will clear the welcome msg
      }).catch(() => { alert( "Unable to Delete student")})
    },
  },
};
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css";
</style>
