import axios from "axios";

let base_url = "/api/students";

export default {
  getAllStudents() {
    // this is getting the all the students
    return axios.get(base_url).then((res) => {
      return res.data;
    });
  },
  addStudents(student) {
    // this is adding student same thing to curl
    return axios.post(base_url, student).then((res) => {
      return res.data;
    });
  },
  updateStudent(student) {
    return axios.patch(`${base_url}/${student.id}`, student).then( res => {
      return res.data;
    });
  },
};
