<template>
  <main>
    <!-- lista film -->
    <h2>Film</h2>
    <div class="row movies">
        <ul v-for="movie in dataShared.movies" :key="movie.id">
            <li><img :src="editImg(movie.poster_path)" :alt="movie.original_title"></li>
            <li>Titolo : <strong>{{movie.title}}</strong></li>
            <li>Titolo originale : <strong>{{movie.original_title}}</strong></li>
            <li>Lingua : {{languageFlag(movie.original_language)}}</li>
            <li>
            Voto : 
            <i v-show="editVoteStar(movie.vote_average) > 0" v-for="(star) in editVoteStar(movie.vote_average)" :key="star.id" class="fas fa-star"></i>
            <i v-show="editVoteStar(movie.vote_average) < 5" v-for="(star) in (5 - editVoteStar(movie.vote_average))" :key="star.id" class="far fa-star"></i>
            </li>
        </ul>
    </div>
    <!-- lista serie tv -->
    <h2>Serie</h2>
    <div class="row tv_shows">
        <ul v-for="tvShow in dataShared.tvShows" :key="tvShow.id">
        <li><img :src="editImg(tvShow.poster_path)" :alt="tvShow.original_title"></li>
        <li>Titolo : <strong>{{tvShow.name}}</strong></li>
        <li>Titolo originale : <strong>{{tvShow.original_name}}</strong></li>
        <li>Lingua : {{languageFlag(tvShow.original_language)}}</li>
        <li>
            Voto : 
            <i v-show="editVoteStar(tvShow.vote_average) > 0" v-for="(star) in editVoteStar(tvShow.vote_average)" :key="star.id" class="fas fa-star"></i>
            <i v-show="editVoteStar(tvShow.vote_average) < 5" v-for="(star) in (5 - editVoteStar(tvShow.vote_average))" :key="star.id" class="far fa-star"></i>
        </li>
        </ul>
    </div>
  </main>
</template>

<script>
import dataShared from '../dataShared'

export default {
    name : 'Main',

    data() {
        return {
            dataShared
        }
    },

    methods : {
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
        },

        editImg(filePath) {
            const baseUrl = 'https://image.tmdb.org/t/p';
            const size = '/w154';
            if(filePath != null) {
                return baseUrl + size + filePath
            } else {
                return 'http://tuscaniagres.it/wp-content/plugins/lightbox/images/No-image-found.jpg'
            }
        },

        editVoteStar(vote) {
            return vote = Math.ceil(vote/2);
        }

    }
}
</script>

<style lang="scss" scoped>
    .row {
        background-color: lightgrey;
        border: 2px solid black;
        display: flex;
        flex-wrap: wrap;

    }
</style>