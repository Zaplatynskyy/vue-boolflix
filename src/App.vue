<template>
  <div id="app" :class="{ info_movie_on : dataShared.infoMovieOn }">
    <div v-show="dataShared.infoMovieOn" class="layover" @click="resetInfo()"></div>
    <Header/>
    <Main/>
  </div>
</template>

<script>
import dataShared from './dataShared'
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return {
      dataShared
    }
  },

  methods : {
    resetInfo() {
      dataShared.infoMovieOn = false,
      dataShared.popUp = {}
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/global.scss';

  #app {
    overflow-x: hidden;
  }

  #app.info_movie_on {
    height: 100vh;
    overflow-y: hidden;
  }
</style>
