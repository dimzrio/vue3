<template>
  <div id="greeting">
    <p v-if="age > 24">{{ msg }}</p>
    <p v-else> You must be 25 years or older to view this message!</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Greeting',
  props: ['age'],
  data() {
    return {
      msg: 'Hello World!',
    };
  },
};
</script>


// You need add scoped for make style private (only apply on this component)
// npm install sass
<style scoped lang="scss">
p {
    color: red;
}
</style>
