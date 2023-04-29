<template>
  <p>The user is {{ user }} years olds.</p>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'User',
  data() {
    return {
      user: 20,
    };
  },
};
</script>
