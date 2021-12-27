<template>
    <div class="info_movie">
        <div class="img">
        <img :src="`https://image.tmdb.org/t/p/original${dataShared.popUp.backdrop_path}`" :alt="dataShared.popUp.title ? dataShared.popUp.title : dataShared.popUp.name">
        </div>  
        <div class="text">
        <div class="title">{{dataShared.popUp.title ? dataShared.popUp.title : dataShared.popUp.name}}</div>

        <div class="info">
            <span class="vote">
            <!-- stella piena per ogni voto positivo che va da 1 a 5(se c'è) -->
            <i v-show="editVoteStar(dataShared.popUp.vote_average) > 0" v-for="star in editVoteStar(dataShared.popUp.vote_average)" :key="star.id" class="fas fa-star"></i>
            <!-- stella vuota per ogni voto mancante fino ad evere 5 stelle totali (punteggio max 5) -->
            <i v-show="editVoteStar(dataShared.popUp.vote_average) < 5" v-for="star in (5 - editVoteStar(dataShared.popUp.vote_average))" :key="star.id" class="far fa-star"></i>
            </span>

            <span class="lang">{{languageFlag(dataShared.popUp.original_language)}}</span>

            <span class="date">{{format_date(dataShared.popUp.release_date)}}</span>
        
            <div class="overview">{{dataShared.popUp.overview}}</div>
        </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import dataShared from '../../dataShared'

export default {
    name : 'InfoMovie',

    data() {
        return {
            dataShared
        }
    },

    methods : {
        // metodo che trasforma il punteggio decimale in un punteggio da 0 a 5
        editVoteStar(vote) {
            return vote = Math.ceil(vote/2);
        },

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

        format_date(value){
            if (value) {
                return moment(String(value)).format('YYYY')
            }
        },
    }
}
</script>

<style scoped lang="scss">
    .info_movie {
        width: 40%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9;
        box-shadow: 0px -7px 11px 5px rgba(24,24,24,1);

        .img {
            height: 45vh;

            img {
                width: 100%;
                height: 100%;
                object-position: center;
                object-fit: cover;
            }
        }

        .text {
            height: calc(100vh - 45vh);
            color: white;
            background-color: #181818;
            box-shadow: 0px -20px 11px 5px rgba(24,24,24,1);
            padding: 0 40px;
            position: relative;
            z-index: 1;

            .title {
                font-size: 38px;
                font-weight: bold;
                position: relative;
                bottom: 45px;
            }

            // icona della stellina del voto
            i {
                color: #ffbd00;
            }

            .lang {
                margin: 0 10px;
            }

            .date {
                font-size: 18;
            }

            .overview {
                line-height: 30px;
                font-size: 20px;
                margin-top: 20px;
            }
        }
    }
</style>