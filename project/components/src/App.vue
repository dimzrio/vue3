<template>
  <div id="app">
    <p>Hey!</p>
    <!-- props -->
    <greeting :age="age"></greeting>

    <!-- props & emit event-->
    <user :age="age" @age-change="age++" @age-change-10="updateAge10"></user>

    <!-- button on root component -->
    <button @click="age++">Update Age (from root)</button>
  </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import User from '@/components/User.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 17,
    };
  },
  methods: {
    updateAge10(num) {
      this.age += num;
    },
  },
};
</script>
