<template>
    <!-- sezione visualizzata solo quando ho dati presenti nell'array (quindi una volta effettuata una ricerca) -->
    <section v-show="dataArray.length > 0">
        <!-- titolo sezione -->
        <div class="title_type">{{titleSection}}</div>

        <div class="container" @mouseover="displayBtn()" @mouseout="hiddenBtn()">
            <!-- bottone per scorrere la riga dei film verso destra -->
            <div class="btn left" @click="scrollLeft" :style="{ display : displayLeft}">
                <i class="fas fa-chevron-left"></i>
            </div>
            <!-- riga film distribuiti su un unica riga -->
            <div class="row" :style="{ transform : translateFunction() }">

                <!-- componente box che rappresenta il singolo film (quindi ciclato per stampare tutta la lista) -->
                <Box v-for="movie in dataArray" :key="movie.id" :movie="movie"/>

            </div>
            <!-- bottone per scorrere la riga dei film verso sinistra -->
            <div class="btn right" @click="scrollRight" :style="{ display : displayRight}">
                <i class="fas fa-chevron-right"></i>
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
            translate : 0,
            displayLeft : 'block',
            displayRight : 'block'
        }
    },

    methods : {
        // funzione che controlla il display a seconda della transizione della row
        displayBtn() {
            if(this.translate > 0 && this.translate < 100) {
                // se la row è visualizzata in mezzo, visualizza entrambi i bottoni
                this.displayLeft = 'block';
                this.displayRight = 'block'
            } else if (this.translate < 100) {
                // se la row è visualizzata alla fine, visualizza solo il bottone per tornare indietro
                this.displayRight = 'block'
            } else if (this.translate > 0) {
                // se la row è visualizzata all'inizio, visualizza solo il bottone per andare avanti
                this.displayLeft = 'block'                
            }
        },

        // funzione che assegna display none ad entrambi i bottoni(si attiva quando siamo fuori col mouse dal contenitore in questione)
        hiddenBtn() {
            this.displayLeft = 'none',
            this.displayRight = 'none'
        },

        // metodo per definire il valore translate in percentuale della proprietà transform
        translateFunction() {
            return `translateX(-${this.translate}%)`
        },

        // metodo per scorrere la row verso sinistra
        scrollLeft() {
            if(this.translate > 0) {
                this.translate -=50
            } 
        },

        // metodo per scorrere la row verso destra
        scrollRight() {
            if(this.translate < 100) {
                this.translate +=50
            } 
        }
    
    }
}
</script>

<style lang="scss" scoped>

    section {
        margin-bottom: 20px;

        // stile titolo della sezione
        .title_type {
            color: white;
            margin: 5px;
        }

        // container che contiene tutti gli elementi che compongono la riga dei film visualizzati
        .container {
            position: relative;

            // contenitore freccia destra sinistra
            .btn {
                width: 80px;
                height: 100%;
                font-size: 20px;
                background-color: rgba(0, 0, 0, .5);
                cursor: pointer;
                position: absolute;
                z-index: 1;

                // l'icona freccia destra sinistra
                i {
                    color: white;
                }

                // contenitore della freccia verso sinistra
                &.left {
                    left: 0;
                    top: 0;
                    z-index: 1;
                    
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
            transition: .5s;
        }
    }

    
</style>