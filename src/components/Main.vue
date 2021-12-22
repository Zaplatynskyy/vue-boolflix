<template>
  <main>
      <!-- layover che oscura la sezione main quando facciamo una ricerca -->
    <div v-show="dataShared.searchOn" class="layover"></div>
    <!-- sezione lista dei film ricercati -->
    <Section :dataArray="dataShared.movies" :titleSection ="sectionFilm"/>
    <!-- sezione delle serie tv ricercate -->
    <Section :dataArray="dataShared.tvShows" :titleSection ="sectionShows"/>
  </main>
</template>

<script>
import dataShared from '../dataShared'
import Section from './sections/Section.vue'

export default {
    name : 'Main',

    components : {
        Section
    },

    data() {
        return {
            dataShared,
            sectionFilm : 'Film',
            sectionShows : 'Serie'
        }
    },
}
</script>

<style lang="scss" scoped>

    main {
        min-height: calc(100vh - 60px);
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 84%, rgba(19,19,25,1) 100%); 
        padding: 30px 0;
        position: relative;

        // layover che oscura la sezione main quando facciamo una ricerca
        .layover {
            background-color: rgba(0,0,0,.6);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
        }
    }
</style>