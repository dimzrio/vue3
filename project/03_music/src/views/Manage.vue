<template>
  <div id="manage">
    <!-- Main Content -->
    <section class="container mx-auto mt-6">
      <div class="md:grid md:grid-cols-3 md:gap-4">
        <div class="col-span-1">
          <app-upload ref="upload" :addSong="addSong"></app-upload>
        </div>
        <div class="col-span-2">
          <div class="bg-white rounded border border-gray-200 relative flex flex-col">
            <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
              <span class="card-title">My Songs</span>
              <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
            </div>
            <div class="p-6">
              <!-- Composition Items -->
              <composition-item
                v-for="(song, i) in songs"
                :key="song.docID"
                :song="song"
                :updateSong="updateSong"
                :index="i"
                :removeSong="removeSong"
              >
              </composition-item>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import useUserStore from '@/stores/user'
import AppUpload from '@/components/Upload.vue'
import CompositionItem from '../components/CompositionItem.vue'
import { songsCollection, auth } from '@/includes/firebase'

export default {
  name: 'manage',
  data() {
    return {
      songs: []
    }
  },
  components: {
    AppUpload,
    CompositionItem
  },

  methods: {
    updateSong(i, values) {
      this.songs[i].modified_name = values.modified_name
      this.songs[i].genre = values.genre
    },

    removeSong(i) {
      this.songs.splice(i, 1)
    },

    // this function to show song from db in manage page
    addSong(document) {
      const song = {
        ...document.data(),
        docID: document.id
      }
      this.songs.push(song)
      console.log(song)
    }
  },
  // mounted song from db
  async created() {
    const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get()

    snapshot.forEach(this.addSong)
  }

  // beforeRouteLeave(to, from, next) {
  //   this.$refs.upload.cancelUploads()
  //   next()
  // }

  // move to global guard using meta
  //   beforeRouteEnter(to, from, next) {
  //     console.log('beforeRoute Gruad from views')
  //     const store = useUserStore()

  //     if (store.userLoggedIn) {
  //       next()
  //     } else {
  //       next({ name: 'home' })
  //     }
  //   }
}
</script>
