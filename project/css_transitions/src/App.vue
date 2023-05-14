<template>
  <div id="app">
    <button type="button" @click="flag = !flag">Toggle</button>
    <!-- <transition name="dmz" mode="out-in">
      <h2 v-if="flag" key="main"> Hello world! </h2>
      <h2 v-else key="secondary"> Hello dimzrio! </h2>
    </transition> -->

    <transition name="zoom">
      <h2 v-if="flag"> Hello world! </h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false
    }
  }
}
</script>

<style>
/* .dmz-enter-from{
  opacity: 0;
}

.dmz-enter-active{
  transition: all 1s linear;
  color: rebeccapurple;
}

.dmz-leave-to{
  transition: all 1s linear;
  color: greenyellow;
  opacity: 0;
} */

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

/* Zoom in out */
.zoom-enter-active{
  animation: zoom-in 1s linear forwards;
}

.zoom-leave-active{
  animation: zoom-out 1s linear forwards;
}

/* feading zoom in out */
.zoom-enter-from{
  opacity: 0;
}

.zoom-enter-active{
  transition: all 1s linear;
  color: rebeccapurple;
}

.zoom-leave-to{
  transition: all 1s linear;
  color: greenyellow;
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }

  to {
    transform: scale(0, 0);
  }
}
</style>
