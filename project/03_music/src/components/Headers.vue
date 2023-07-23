<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <!-- exact-active-class uses for disable active link page colour -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuth">Login / Register</a>
          </li>
          <!-- <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li> -->

          <template v-else>
            <li>
              <router-link class="px-2 text-white" href="#" :to="{ name: 'manage' }"
                >Manage</router-link
              >
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut">Logout</a>
            </li>
          </template>
          <li>
            <router-link class="px-2 text-white" href="#" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
// import { mapStores, mapWritableState } from 'pinia'

import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'Headers',
  // load when page is open
  computed: {
    ...mapStores(useModalStore, useUserStore)

    // ...mapWritableState(useModalStore, ['isOpen'])
  },
  methods: {
    toggleAuth() {
      // This way to call state without mapWriteableState
      this.modalStore.isOpen = !this.modalStore.isOpen
      console.log(this.modalStore.isOpen)

      // This way to call state if define mapState & mapWriteableState
      // this.isOpen = !this.isOpen
      // console.log(this.isOpen)
    },

    signOut() {
      this.userStore.signOut()
      console.log(this.$route)

      // this way not suitable for large apps
      // if (this.$route.name === 'manage') {
      //   this.$router.push({ name: 'home' })
      // }

      // use this
      // https://router.vuejs.org/guide/advanced/meta.html

      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
