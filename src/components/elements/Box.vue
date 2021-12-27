<template>
    <div class="box" @click="viewInfo(movie)">
        <!-- immagine film per lo sfondo della box -->
        <img :src="editImg(movie.poster_path)" :alt="movie.original_title">
    </div>
</template>

<script>
import dataShared from '../../dataShared'

export default {
    name : 'Box',

    data() {
        return {
            dataShared
        }
    },

    props : {
        movie : Object
    },

    methods : {
        viewInfo(movie) {
            this.dataShared.popUp = movie;
            this.dataShared.infoMovieOn = true
        },

        // metodo per comporre l'url dell'immagine del film
        editImg(filePath) {
            const baseUrl = 'https://image.tmdb.org/t/p';
            const size = '/w154';
            if(filePath != null) {
                return baseUrl + size + filePath
            } else {
                return 'http://tuscaniagres.it/wp-content/plugins/lightbox/images/No-image-found.jpg'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    // elemento box rappresentante il singolo film
    .box {
        width: calc(100% / 10 - 10px);
        min-width: calc(100% / 10 - 10px);
        height: 300px;
        margin: 0 5px;
        position: relative;
        cursor: pointer;

        // immagine del film
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
</style>