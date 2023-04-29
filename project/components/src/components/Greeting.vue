<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Greeting',
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
