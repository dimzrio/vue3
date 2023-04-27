// let vm = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!"
//     }
//   }
// }).mount('#app') // if you remove mount, {{ massage }} can't rendering.


// Sleep 5s before rendering mount.
let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
})

setTimeout(() => {
  vm.mount('#app')
}, 5000)