<template>
  <div>
    <div v-if="student.name">
      <div class="alert alert-success" v-if="student.present">
        welcome, {{ student.name }}
      </div>
      <div class="alert alert-danger" v-else>
        goodbye, {{ student.name }}. see you later
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentMessage",
  props: {
    student: Object,
  },
};
</script>

<style></style>
