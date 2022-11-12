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
      });
    },
    newStudentAdded(student) {
      this.$student_api.addStudents(student).then(() => {
        this.updateStudents();
      });
    },
    studentArrivedOrLeft(student, present) {
      student.present = present
      this.$student_api.updateStudent(student).then( () => {
        this.mostRecentStudent = student
        this.updateStudents()
      })
    },
    studentDelete(student) {},
  },
};
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css";
</style>
