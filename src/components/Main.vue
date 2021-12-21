<template>
  <main>
    <div v-show="dataShared.searchOn" class="layover"></div>
    <section v-show="dataShared.movies.length > 0" class="content_row">
        <div class="type">Film</div>
        <div class="container">
            <div class="turn left" @click="scrollLeft">
                <i class="fas fa-arrow-alt-circle-left"></i>
            </div>
            <div class="row" :style="{ transform : translateFunction() }">
                
                <div class="box" v-for="movie in dataShared.movies" :key="movie.id">
                    <img :src="editImg(movie.poster_path)" :alt="movie.original_title">

                    <div class="info_hover">
                        <ul class="info_list">
                            <li><strong>Titolo</strong> : {{movie.title}}</li>
                            <li><strong>Lingua</strong> : {{languageFlag(movie.original_language)}}</li>
                            <li>
                                <strong>Voto</strong> : 
                                <i v-show="editVoteStar(movie.vote_average) > 0" v-for="(star) in editVoteStar(movie.vote_average)" :key="star.id" class="fas fa-star"></i>
                                <i v-show="editVoteStar(movie.vote_average) < 5" v-for="(star) in (5 - editVoteStar(movie.vote_average))" :key="star.id" class="far fa-star"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="turn right" @click="scrollRight">
                <i class="fas fa-arrow-alt-circle-right"></i>
            </div>
        </div>
    </section>

    <section class="content_row" v-show="dataShared.tvShows.length > 0">
        <div class="type">Serie</div>
        <div class="row">
            <div class="box" v-for="tvShow in dataShared.tvShows" :key="tvShow.id">
                <img :src="editImg(tvShow.poster_path)" :alt="tvShow.original_title">

                <div class="info_hover">
                    <ul class="info_list">
                        <li><strong>Titolo</strong> : {{tvShow.name}}</li>
                        <li><strong>Lingua</strong> : {{languageFlag(tvShow.original_language)}}</li>
                        <li>
                            <strong>Voto</strong> : 
                            <i v-show="editVoteStar(tvShow.vote_average) > 0" v-for="(star) in editVoteStar(tvShow.vote_average)" :key="star.id" class="fas fa-star"></i>
                            <i v-show="editVoteStar(tvShow.vote_average) < 5" v-for="(star) in (5 - editVoteStar(tvShow.vote_average))" :key="star.id" class="far fa-star"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  </main>
</template>

<script>
import dataShared from '../dataShared'

export default {
    name : 'Main',

    data() {
        return {
            dataShared,
            translate : 0
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
        },

        translateFunction() {
            return `translateX(-${this.translate}%)`
        },

        scrollLeft() {
            if(this.translate > 0) {
                this.translate -=10
            } 
        },

        scrollRight() {
            if(this.translate < 120) {
                this.translate +=10
            } 
        }
        

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

        .layover {
            background-color: rgba(0,0,0,.6);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
        }

        .type {
            color: white;
            margin: 5px;
        }

        .container {
            position: relative;

            .turn {
                width: 100px;
                height: 100%;
                font-size: 40px;
                background-color: rgb(128,128,128,.8);
                cursor: pointer;
                position: absolute;
                z-index: 1;

                i {
                    color: rgb(190, 190, 190);
                }

                &.left {
                    left: 0;
                    top: 0;
                    z-index: 1;
                    opacity: 0;

                    &:hover {
                        opacity: 1;
                    }
                    
                    i {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 1;
                    }
                }

                &.right {
                    position: absolute;
                    right: 0;
                    top: 0;
                    opacity: 0;

                    &:hover {
                        opacity: 1;
                    }

                    i {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 1;
                    }
                }
            }
        }

        .row {
            display: flex;

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

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }

                .info_hover {
                    background-color: rgba(0,0,0,.8);
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: none;

                    .info_list {
                        color: white;
                        list-style: none;
                        padding: 20px 5px;

                        li {
                            padding: 5px 0;

                            i {
                                color: #ffbd00;
                            }
                        }
                    }
                }
            }
        }
    }
</style>