<template>
  <div id="user">
    <p>The user is {{ age }} years olds.</p>

    <!--
    update age from child didn't work cz data age in root
    that's why we need use emit event
    <button @click="age++">Update Age (from child)</button>
    -->

    <button @click="onClickAge">Update Age (from child)</button>
    <button @click="onClickAgeBy10">Update Age by 10 (from child)</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'User',

  // simple define props without validate
  // props: ['age'],

  // define props with validate
  // if age > 130, in console have warning like this:
  // ue warn]: Invalid prop: custom validator check failed for prop "age".
  // at <User age=137 onAgeChange=fn onAgeChange10=fn<bound updateAge10> >
  // at <App>
  props: {
    age: {
      type: Number,
      validator(value) {
        return value < 130;
      },

    },
  },

  methods: {
    onClickAge() {
      this.$emit('age-change');
    },
    onClickAgeBy10() {
      this.$emit('age-change-10', 10);
    },
  },
};
</script>
