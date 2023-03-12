let vm = Vue.createApp({
    data(){
        return {
            isPurple: false,
            textColour: ''
        }
    },

    computed: {
        binding_classes(){
            return { purple: this.isPurple }
        }
    }
}).mount('#app')