<template>
  <div id="app" :class="{ layover_on : dataShared.infoMovieOn || dataShared.hamburgerOn  }">
    <div v-if="dataShared.infoMovieOn || dataShared.hamburgerOn" class="layover" @click="resetLayover()"></div>
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
    resetLayover() {
      dataShared.infoMovieOn = false,
      dataShared.popUp = {},
      dataShared.hamburgerOn = false
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/global.scss';

  #app {
    overflow-x: hidden;
  }

  #app.layover_on {
    height: 100vh;
    overflow-y: hidden;
  }
</style>
