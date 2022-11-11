<template>
 <div>
    <div class="alert alert-danger" v-if="errors.length > 0">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </div>

    <div class="card add-student m-2 p-2">
      <h4 class="card-title">Add new student</h4>

      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" class="form-control" v-model.trim="newStudentName" />
      </div>
      <div class="form-group">
        <label for="starID">Star ID</label>
        <input id="starID" class="form-control" v-model.trim="newStarID" />
      </div>
      <br>
      <button class="btn btn-primary" v-on:click="addStudent">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  // create component
  name: "NewStudentForm",
  emits: ["student-added"], // doc events it emits
  data() {
    return {
      newStudentName: "",
      newStarID: "",
      errors: [],
    };
  },
  methods: {
    addStudent() {
      // clear errors array
      this.errors = [];

      if (!this.newStudentName) {
        this.errors.push("A name must be entered");
      }

      if (!this.newStarID) {
        this.errors.push("A star ID must be entered");
      }

      // TODO make it not add students that already in the list
      // if (this.newStudentName === this.student) {
      //   this.errors.push("The student is already in their");
      // }

      if (this.errors.length == 0) {
        let student = {
          name: this.newStudentName,
          starID: this.newStarID,
          present: false,
        };
        //  

        this.$emit("student-added", student);

        this.newStudentName = "";
        this.newStarID = "";
      }
    },
  },
};
</script>

<style></style>
