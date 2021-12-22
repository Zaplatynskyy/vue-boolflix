<template>
    <div class="box">
        <!-- immagine film per lo sfondo della box -->
        <img :src="editImg(movie.poster_path)" :alt="movie.original_title">

        <!-- contenitore visibile all'over del box che riporta le info sul film in questione -->
        <div class="info_hover">
            <!-- lista informazioni film -->
            <ul class="info_list">
                <li><strong>Titolo</strong> : {{movie.title ? movie.title : movie.name}}</li>

                <li><strong>Lingua</strong> : {{languageFlag(movie.original_language)}}</li>

                <li>
                    <strong>Voto</strong> : 
                    <!-- stella piena per ogni voto positivo che va da 1 a 5(se c'è) -->
                    <i v-show="editVoteStar(movie.vote_average) > 0" v-for="(star) in editVoteStar(movie.vote_average)" :key="star.id" class="fas fa-star"></i>
                    <!-- stella vuota per ogni voto mancante fino ad evere 5 stelle totali (punteggio max 5) -->
                    <i v-show="editVoteStar(movie.vote_average) < 5" v-for="(star) in (5 - editVoteStar(movie.vote_average))" :key="star.id" class="far fa-star"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Box',

    props : {
        movie : Object
    },

    methods : {
        // metodo per l'emoji della lingua del film
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

        // metodo per comporre l'url dell'immagine del film
        editImg(filePath) {
            const baseUrl = 'https://image.tmdb.org/t/p';
            const size = '/w154';
            if(filePath != null) {
                return baseUrl + size + filePath
            } else {
                return 'http://tuscaniagres.it/wp-content/plugins/lightbox/images/No-image-found.jpg'
            }
        },

        // metodo che trasforma il punteggio decimale in un punteggio da 0 a 5
        editVoteStar(vote) {
            return vote = Math.ceil(vote/2);
        },
    }
}
</script>

<style lang="scss" scoped>
    // elemento box rappresentante il singolo film
    .box {
        width: calc(100% / 10);
        min-width: calc(100% / 10);
        height: 300px;
        margin: 0 5px;
        position: relative;
        cursor: pointer;

        &:hover .info_hover {
            display: block;
        }

        // immagine del film
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        // contenitore visibile all'over del box che riporta le info sul film in questione
        .info_hover {
            background-color: rgba(0,0,0,.8);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: none;

            // lista informazioni film
            .info_list {
                color: white;
                list-style: none;
                padding: 20px 5px;

                li {
                    padding: 5px 0;

                    // icona della stellina del voto
                    i {
                        color: #ffbd00;
                    }
                }
            }
        }
    }
</style>