<template>
  <header>
      <input type="text" placeholder="Search movie" v-model="inputSearch">
      <button class="btn" @click="search">Search</button>
      <ul v-for="movie in movies" :key="movie.id">
        <li>Titolo : <strong>{{movie.title}}</strong></li>
        <li>Titolo originale : <strong>{{movie.original_title}}</strong></li>
        <li>Lingua : {{languageFlag(movie.original_language)}}</li>
        <li>Voto : <strong>{{movie.vote_average}}</strong></li>
      </ul>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',

  data() {
    return {
      inputSearch : '',
      movies : []
    }
  },

  methods : {
    search() {
      axios.get('https://api.themoviedb.org/3/search/movie' , {
          params : {
            api_key : '53d59c9e8ce0cd47e3b9162e1493c788',
            query : this.inputSearch
          }
      })
      .then( resp => {
        this.movies = resp.data.results;
        console.log(this.movies.results);
      } )
    },

    languageFlag(lang) {
      switch(lang) {
        case 'it':
          return '🇮🇹'

        case  'fr' : 
          return '🇫🇷'

        case 'en' :
          return '🇬🇧'

        case 'de' :
          return '🇩🇪'

        case 'ru' :
          return '🇷🇺'

        case 'zh' :
          return '🇨🇳'

        default :
          return lang
      }
    }

  }

}
</script>

<style scoped lang="scss">

</style>
