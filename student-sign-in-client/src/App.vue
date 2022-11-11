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
  methods: {
    newStudentAdded(student) {
      this.students.push(student);

      this.students.sort(function (s1, s2) {
        return s1.name.toUpperCase() < s2.name.toUpperCase() ? -1 : 1;
      });
    },
    studentArrivedOrLeft(student, present) {
      // find the student in array of students
      // update the present Attribute

      let updateStudent = this.students.find(function (s) {
        if (s.name === student.name && s.starID === student.starID) {
          return true;
        }
      });
      if (updateStudent) {
        updateStudent.present = present;
        this.mostRecentStudents = updateStudent;
        console.log(updateStudent);
      }
    },
    studentDelete(student) {
      // returns
      this.students = this.students.filter(function (s) {
        if (s != student) {
          return true;
        }
      });
      this.mostRecentStudents = ''
    },
  },
};
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css";
</style>
