<template>
  <header>
      <input type="text" placeholder="Search movie" v-model="inputSearch">
      <button class="btn" @click="search">Search</button>
      <!-- lista film -->
      <h2>Film</h2>
      <div class="row movies">
        <ul v-for="movie in movies" :key="movie.id">
          <li>Titolo : <strong>{{movie.title}}</strong></li>
          <li>Titolo originale : <strong>{{movie.original_title}}</strong></li>
          <li>Lingua : {{languageFlag(movie.original_language)}}</li>
          <li>Voto : <strong>{{movie.vote_average}}</strong></li>
        </ul>
      </div>
      <!-- lista serie tv -->
      <h2>Serie</h2>
      <div class="row tv_shows">
        <ul v-for="tvShow in tvShows" :key="tvShow.id">
          <li>Titolo : <strong>{{tvShow.name}}</strong></li>
          <li>Titolo originale : <strong>{{tvShow.original_name}}</strong></li>
          <li>Lingua : {{languageFlag(tvShow.original_language)}}</li>
          <li>Voto : <strong>{{tvShow.vote_average}}</strong></li>
        </ul>
      </div>

  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',

  data() {
    return {
      inputSearch : '',
      movies : [],
      tvShows : []
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
      } ),

      axios.get('https://api.themoviedb.org/3/search/tv' , {
        params : {
            api_key : '53d59c9e8ce0cd47e3b9162e1493c788',
            query : this.inputSearch
          }
      })
      .then ( resp => {
        console.log(resp.data.results);
        this.tvShows = resp.data.results
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

        case 'ja' : 
          return '🇯🇵'

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
  .row {
    background-color: lightgrey;
    border: 2px solid black;
    display: flex;
    flex-wrap: wrap;

  }
</style>
