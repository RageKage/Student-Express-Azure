(function(){"use strict";var t={4192:function(t,e,n){var d=n(9963),r=n(6252);const s={id:"app"};function u(t,e,n,d,u,a){const i=(0,r.up)("new-student-form"),l=(0,r.up)("student-table"),o=(0,r.up)("student-message");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(i,{onStudentAdded:a.newStudentAdded},null,8,["onStudentAdded"]),(0,r.Wm)(l,{students:u.students,onStudentArrivedOrLeft:a.studentArrivedOrLeft,onDeleteStudent:a.studentDelete},null,8,["students","onStudentArrivedOrLeft","onDeleteStudent"]),(0,r.Wm)(o,{student:u.mostRecentStudents},null,8,["student"])])}var a=n(3577);const i={key:0,class:"alert alert-danger"},l={class:"card add-student m-2 p-2"},o=(0,r._)("h4",{class:"card-title"},"Add new student",-1),c={class:"form-group"},h=(0,r._)("label",{for:"name"},"Name",-1),p={class:"form-group"},m=(0,r._)("label",{for:"starID"},"Star ID",-1),v=(0,r._)("br",null,null,-1);function f(t,e,n,s,u,f){return(0,r.wg)(),(0,r.iD)("div",null,[u.errors.length>0?((0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.errors,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t},(0,a.zw)(t),1)))),128))])])):(0,r.kq)("",!0),(0,r._)("div",l,[o,(0,r._)("div",c,[h,(0,r.wy)((0,r._)("input",{id:"name",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>u.newStudentName=t)},null,512),[[d.nr,u.newStudentName,void 0,{trim:!0}]])]),(0,r._)("div",p,[m,(0,r.wy)((0,r._)("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>u.newStarID=t)},null,512),[[d.nr,u.newStarID,void 0,{trim:!0}]])]),v,(0,r._)("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=(...t)=>f.addStudent&&f.addStudent(...t))},"Add")])])}n(7658);var S={name:"NewStudentForm",emits:["student-added"],data(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent(){if(this.errors=[],this.newStudentName||this.errors.push("A name must be entered"),this.newStarID||this.errors.push("A star ID must be entered"),0==this.errors.length){let t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},A=n(3744);const w=(0,A.Z)(S,[["render",f]]);var g=w;const b={key:0},D={key:0,class:"alert alert-success"},_={key:1,class:"alert alert-danger"};function I(t,e,n,d,s,u){return(0,r.wg)(),(0,r.iD)("div",null,[n.student.name?((0,r.wg)(),(0,r.iD)("div",b,[n.student.present?((0,r.wg)(),(0,r.iD)("div",D," welcome, "+(0,a.zw)(n.student.name),1)):((0,r.wg)(),(0,r.iD)("div",_," goodbye, "+(0,a.zw)(n.student.name)+". see you later ",1))])):(0,r.kq)("",!0)])}var k={name:"StudentMessage",props:{student:Object}};const O=(0,A.Z)(k,[["render",I]]);var y=O;const j=t=>((0,r.dD)("data-v-1e3345bc"),t=t(),(0,r.Cn)(),t),C={class:"card student-list m-2 p-2"},R=j((()=>(0,r._)("h4",{class:"card-title"},"Student List",-1))),F={class:"edit-table-toggle form-check"},N=j((()=>(0,r._)("label",{for:"edit-table"},"Edit Table",-1))),L={id:"student-table"},T={class:"table"},U=j((()=>(0,r._)("th",null,"Name",-1))),Z=j((()=>(0,r._)("th",null,"StarID",-1))),H=j((()=>(0,r._)("th",null,"Present?",-1))),Q=j((()=>(0,r._)("br",null,null,-1)));function V(t,e,n,s,u,a){const i=(0,r.up)("student-row");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",C,[R,(0,r._)("div",F,[(0,r.wy)((0,r._)("input",{type:"checkbox",class:"form-check-input",id:"edit-table","onUpdate:modelValue":e[0]||(e[0]=t=>u.editTable=t)},null,512),[[d.e8,u.editTable]]),N]),(0,r._)("div",L,[(0,r._)("table",T,[(0,r._)("tr",null,[U,Z,H,(0,r.wy)((0,r._)("th",null,"Delete",512),[[d.F8,u.editTable]])]),Q,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.students,(t=>((0,r.wg)(),(0,r.j4)(i,{student:t,key:t.starID,edit:u.editTable,onStudentArrivedOrLeft:a.arrivedOrLeft,onDeleteStudent:a.deleteStudent},null,8,["student","edit","onStudentArrivedOrLeft","onDeleteStudent"])))),128))])])])])}var E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACJUlEQVRoge2YvW/TQBiHn7sjY9UFiSIYOjSiVGyt5HYAUkLyR0NVRwgJkBiRGGAEqaIsSQZKFfsYiFFUXXJ3vtdIiHtG34d/j+9svzZkMplMJhPIfFgcTEdFv6v5p4OTvfmwOIgZo0M7zsaH+wp7Zmr7av78+GF8vM1MR0XfmGqisOV8fPQodJwK6TQbH+7rypwDd5eHLqzSz7bO3n5sE/Ym01HRN7UtgXvLQ9+sqYdbL95/8I31CjjCN4hIOMI3BEl4t1DvuncF/HQ07Shbn6dspw3hAWrqW5VvjqAt9GNwvFuZugR2Hc2tVsITPnjOIAGQlZAKDxECICMhGR4iBSBNQjo8tBCAdhJdhIeWAhAn0VV4SBCAMIla2UVX4SFRADwSikssNXDHMVTkRZgsAN6VcCFWiogIQJSEaB0lJgC/JRamfq3c+x0L31H6iVR4iCinQ7ju2Z62mHXtoldriZhA86i0ip0N3W6nFoA3Ebkonue8C7H7IHkFNoa3XAIXjmHJpXhDkoD3Dav106oyj4EvjnYRidZbKKY8mA5O9oypSuC+r28srQTa1DZdSUQLpBRmXUhECUhUlUuJScocqwTfxFIl8fbkzedKq1Pgq6M5+sYOWoEu6vm/9lHf5ceIxNzeLaQWlV7TL/ltuv3y3acN20mjF2vrqj/5Qk40Oz16oLUu+Rd/LTasSCjJ8A0rEr3Q8NF0/nt9VPRjf69nMplM5v/mF/i6x8b172ZWAAAAAElFTkSuQmCC";const $=["checked"];function q(t,e,n,s,u,i){return(0,r.wg)(),(0,r.iD)("tr",{class:(0,a.C_)({present:n.student.present,absent:!n.student.present})},[(0,r._)("td",null,(0,a.zw)(n.student.name),1),(0,r._)("td",null,(0,a.zw)(n.student.starID),1),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",checked:n.student.present,onChange:e[0]||(e[0]=t=>i.arrivedOrLeft(n.student,t.target.checked))},null,40,$)]),(0,r._)("td",null,[(0,r.wy)((0,r._)("img",{onClick:e[1]||(e[1]=(...t)=>i.deleteStudent&&i.deleteStudent(...t)),src:E},null,512),[[d.F8,n.edit]])])],2)}var M={name:"StudentRow",emits:["student-arrived-or-left","delete-student"],props:{student:Object,edit:Boolean},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent(){confirm(`Delete ${this.student.name}`)&&this.$emit("delete-student",this.student)}}};const P=(0,A.Z)(M,[["render",q],["__scopeId","data-v-2daf2d66"]]);var B=P,J={name:"StudentTable",emits:["student-arrived-or-left","delete-student"],components:{StudentRow:B},props:{students:Array},data(){return{editTable:!1}},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent(t){this.$emit("delete-student",t)}}};const Y=(0,A.Z)(J,[["render",V],["__scopeId","data-v-1e3345bc"]]);var z=Y,W={name:"App",components:{NewStudentForm:g,StudentMessage:y,StudentTable:z},data(){return{students:[],mostRecentStudents:{}}},mounted(){this.updateStudents()},methods:{updateStudents(){this.$student_api.getAllStudents().then((t=>{this.students=t})).catch((()=>{alert("Unable to fetch student list")}))},newStudentAdded(t){this.$student_api.addStudents(t).then((()=>{this.updateStudents()})).catch((t=>{t.response.data.join(",");alert("Error Adding Student, make sure starID is unique")}))},studentArrivedOrLeft(t,e){t.present=e,console.log(t.present),this.$student_api.updateStudent(t).then((()=>{this.mostRecentStudents=t,this.updateStudents()})).catch((()=>{alert("Unable to Update student")}))},studentDelete(t){this.$student_api.deleteStudent(t.id).then((()=>{this.updateStudents(),this.mostRecentStudents={}})).catch((()=>{alert("Unable to Delete student")}))}}};const X=(0,A.Z)(W,[["render",u]]);var x=X,G=n(196);let K="/api/students";var tt={getAllStudents(){return G.ZP.get(K).then((t=>t.data))},addStudents(t){return G.ZP.post(K,t).then((t=>t.data))},updateStudent(t){return G.ZP.patch(`${K}/${t.id}`,t).then((t=>t.data))},deleteStudent(t){return G.ZP["delete"](`${K}/${t}`).then((t=>t.data))}};let et=(0,d.ri)(x);et.config.globalProperties.$student_api=tt,et.mount("#app")}},e={};function n(d){var r=e[d];if(void 0!==r)return r.exports;var s=e[d]={exports:{}};return t[d](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,d,r,s){if(!d){var u=1/0;for(o=0;o<t.length;o++){d=t[o][0],r=t[o][1],s=t[o][2];for(var a=!0,i=0;i<d.length;i++)(!1&s||u>=s)&&Object.keys(n.O).every((function(t){return n.O[t](d[i])}))?d.splice(i--,1):(a=!1,s<u&&(u=s));if(a){t.splice(o--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var o=t.length;o>0&&t[o-1][2]>s;o--)t[o]=t[o-1];t[o]=[d,r,s]}}(),function(){n.d=function(t,e){for(var d in e)n.o(e,d)&&!n.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:e[d]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,d){var r,s,u=d[0],a=d[1],i=d[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(i)var o=i(n)}for(e&&e(d);l<u.length;l++)s=u[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(o)},d=self["webpackChunkstudent_sign_in"]=self["webpackChunkstudent_sign_in"]||[];d.forEach(e.bind(null,0)),d.push=e.bind(null,d.push.bind(d))}();var d=n.O(void 0,[998],(function(){return n(4192)}));d=n.O(d)})();
//# sourceMappingURL=app.c68e0920.js.map