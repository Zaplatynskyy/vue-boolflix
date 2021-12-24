<template>
  <main>
      <!-- layover che oscura la sezione main quando facciamo una ricerca -->
    <div v-show="dataShared.searchOn" class="layover"></div>

    <!-- --------------------------
        SEZIONI DEFAULT FILM
    -------------------------- -->

    <!-- sezione film più popolari visibile al caricamento della pagina -->
    <Section v-show="!dataShared.searching" :dataArray="dataShared.popularityMovie" :titleSection ="sectionPopularityFilm"/>

    <!-- sezione film di animazione visibile al caricamento della pagina -->
    <Section v-show="!dataShared.searching" :dataArray="dataShared.animationFilm" :titleSection ="sectionAnimationFilm"/>

    <!-- sezione film di animazione visibile al caricamento della pagina -->
    <Section v-show="!dataShared.searching" :dataArray="dataShared.documentaryFilm" :titleSection ="sectionDocumentaryFilm"/>

    <!-- --------------------------
        SEZIONI DEFAULT SERIE
    -------------------------- -->

    <!-- sezione serie più popolari visibile al caricamento della pagina -->
    <Section v-show="!dataShared.searching" :dataArray="dataShared.popularityShows" :titleSection ="sectionPopularityShows"/>

    <!-- sezione serie di animazione visibile al caricamento della pagina -->
    <Section v-show="!dataShared.searching" :dataArray="dataShared.animationShows" :titleSection ="sectionAnimationShows"/>

    <!-- sezione serie di animazione visibile al caricamento della pagina -->
    <Section v-show="!dataShared.searching" :dataArray="dataShared.documentaryShows" :titleSection ="sectionDocumentaryShows"/>

    <!-- --------------------------
        SEZIONI PER RICERCA
    -------------------------- -->

    <!-- sezione lista dei film ricercati -->
    <Section :dataArray="dataShared.movies" :titleSection ="sectionFilm"/>

    <!-- sezione delle serie tv ricercate -->
    <Section :dataArray="dataShared.tvShows" :titleSection ="sectionShows"/>
  </main>
</template>

<script>
import dataShared from '../dataShared'
import Section from './sections/Section.vue'
import axios from 'axios'

export default {
    name : 'Main',

    components : {
        Section
    },

    data() {
        return {
            dataShared,
            sectionFilm : 'Film',
            sectionShows : 'Serie',
            sectionPopularityFilm : 'Film più popolari',
            sectionPopularityShows : 'Serie più popolari',
            sectionAnimationFilm : 'Film Animazione',
            sectionDocumentaryFilm : 'Film Documentari',
            sectionAnimationShows : 'Serie Animazione',
            sectionDocumentaryShows : 'Serie Documentari'
        }
    },

    created()  {

        /*--------------------- 
            GET FILM
        ---------------------*/
        // chiamata axios per i film più popolari
        axios.get('https://api.themoviedb.org/3/discover/movie', {
            params : {
                api_key :'53d59c9e8ce0cd47e3b9162e1493c788'
            }
        })
        .then ( resp => {
            this.dataShared.popularityMovie = resp.data.results;
        }),

        // chiamata axios per i film animazione
        axios.get('https://api.themoviedb.org/3/discover/movie', {
            params : {
                api_key :'53d59c9e8ce0cd47e3b9162e1493c788',
                with_genres : '16'
            }
        })
        .then ( resp => {
            this.dataShared.animationFilm = resp.data.results;
        }),

        // chiamata axios per i film documentari
        axios.get('https://api.themoviedb.org/3/discover/movie', {
            params : {
                api_key :'53d59c9e8ce0cd47e3b9162e1493c788',
                with_genres : '99'
            }
        })
        .then ( resp => {
            this.dataShared.documentaryFilm = resp.data.results;
        }),

        /*--------------------- 
            GET SERIE
        ---------------------*/

        // chiamata axios per le serie più popolari
        axios.get('https://api.themoviedb.org/3/discover/tv', {
            params : {
                api_key :'53d59c9e8ce0cd47e3b9162e1493c788'
            }
        })
        .then ( resp => {
            this.dataShared.popularityShows = resp.data.results;
        }),

        // chiamata axios per le serie animazione
        axios.get('https://api.themoviedb.org/3/discover/tv', {
            params : {
                api_key :'53d59c9e8ce0cd47e3b9162e1493c788',
                with_genres : '16'
            }
        })
        .then ( resp => {
            this.dataShared.animationShows = resp.data.results;
        }),

        // chiamata axios per le serie documentari
        axios.get('https://api.themoviedb.org/3/discover/tv', {
            params : {
                api_key :'53d59c9e8ce0cd47e3b9162e1493c788',
                with_genres : '99'
            }
        })
        .then ( resp => {
            this.dataShared.documentaryShows = resp.data.results;
        })
    }
}
</script>

<style lang="scss" scoped>

    main {
        min-height: calc(100vh - 60px);
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 84%, rgba(19,19,25,1) 100%); 
        padding: 30px 0;
        position: relative;
    }
</style>