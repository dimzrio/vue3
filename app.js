// const lastName = 'Lannon'

// vm (vue model)
const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Lannon',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 32,
        }
    },

    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },

        increment(){
            return this.age++
        },

        inputUpdateLastName(msg, event){
            //https://vuejs.org/guide/essentials/event-handling.html
            // event.preventDefault()

            console.log(msg)

            this.lastName = event.target.value
        },

        inputUpdateMiddleName(event){
            this.middleName = event.target.value
        }
    },

    computed: {
        formalFullName() {
            return 'Mr. ' + this.fullName()
        }
    },

    watch: {
        // Watcher uses for watching change value on age field.
        // When value change, after 5s will be back to 32
        age(newVal, oldVal) {
            console.log(oldVal, newVal)
            setTimeout(() => {
                this.age = 32
            }, 5000)
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Joe'
}, 4000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'John',
//             lastName: 'Cannon',
//         }
//     }
// }).mount('#app2')