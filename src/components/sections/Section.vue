<template>
    <!-- sezione visualizzata solo quando ho dati presenti nell'array (quindi una volta effettuata una ricerca) -->
    <section v-show="dataArray.length > 0">
        <!-- titolo sezione -->
        <div class="title_type">{{titleSection}}</div>

        <div class="container">
            <!-- bottone per scorrere la riga dei film verso destra -->
            <div class="turn left" @click="scrollLeft">
                <i class="fas fa-arrow-alt-circle-left"></i>
            </div>
            <!-- riga film distribuiti su un unica riga -->
            <div class="row" :style="{ transform : translateFunction() }">

                <!-- componente box che rappresenta il singolo film (quindi ciclato per stampare tutta la lista) -->
                <Box v-for="movie in dataArray" :key="movie.id" :movie="movie"/>

            </div>
            <!-- bottone per scorrere la riga dei film verso sinistra -->
            <div class="turn right" @click="scrollRight">
                <i class="fas fa-arrow-alt-circle-right"></i>
            </div>
        </div>

    </section>
</template>

<script>
import Box from '../elements/Box.vue'

export default {
    name : 'Section',

    components : {
        Box
    },

    props : {
        dataArray : Array,
        titleSection : String
    },

    data() {
        return {
            translate : 0
        }
    },

    methods : {
        // metodo per definire il valore translate in percentuale della proprietà transform
        translateFunction() {
            return `translateX(-${this.translate}%)`
        },

        // metodo per scorrere la row verso sinistra
        scrollLeft() {
            if(this.translate > 0) {
                this.translate -=10
            } 
        },

        // metodo per scorrere la row verso destra
        scrollRight() {
            if(this.translate < 120) {
                this.translate +=10
            } 
        }
    
    }
}
</script>

<style lang="scss" scoped>

    // stile titolo della sezione
    .title_type {
        color: white;
        margin: 5px;
    }

    // container che contiene tutti gli elementi che compongono la riga dei film visualizzati
    .container {
        position: relative;

        // contenitore freccia destra sinistra
        .turn {
            width: 100px;
            height: 100%;
            font-size: 40px;
            background-color: rgb(128,128,128,.8);
            cursor: pointer;
            position: absolute;
            z-index: 1;

            // l'icona freccia destra sinistra
            i {
                color: rgb(190, 190, 190);
            }

            // contenitore della freccia verso sinistra
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
            
            // contenitore della freccia verso destra
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

    // riga contenitore la lista dei film visualizzati
    .row {
        display: flex;
    }
</style>