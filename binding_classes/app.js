let vm = Vue.createApp({
    data(){
        return {
            isPurple: false,
            textColour: '',
            size: '150',
            rotateText: '30',
        }
    },

    computed: {
        binding_classes(){
            return { purple: this.isPurple }
        },

        rotating(){
            return 'rotate(' + this.rotateText + 'deg)'
        }
    },
}).mount('#app')