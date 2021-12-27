<template>
    <header>
        <!-- header visibile di default -->
        <div v-show="!dataShared.searchOn" class="header_nav">
          <!-- parte a sinistra dell'header contenente l'icona hamburger_menu e il logo -->
          <div class="header_left">
            <i class="fas fa-bars" @click="activeMenu()"></i>
            <img src="../assets/img/logo.png" alt="logo boolflix">
          </div>

          <!-- parte a destra dell'header contenente l'icona search e l'icona impostazioni -->
          <div class="header_right">
            <!-- icona search collegata all'input text  -->
            <label for="search" @click="searchBar()">
              <i class="fas fa-search"></i>
            </label>
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <!-- header visibile (tramite una funzione) al click dell'icona search -->
        <div v-show="dataShared.searchOn" class="header_search">
          <!-- icona freccia per tornare all'header di default -->
          <i class="fas fa-arrow-left" @click="searchBar()"></i>

          <!-- contenitore input con l'icona search e la barra di input text -->
          <div class="input_search" @keyup.enter="search()">
            <i class="fas fa-search" @click="search()"></i>
            <input id="search" type="text" placeholder="Cerca" v-model="inputSearch">
          </div>

        </div>

        <!-- componente finestra informazioni del film selezionato, si visualizza al cambio valore della variabile InfoMovieOn -->
        <InfoMovie v-if="dataShared.infoMovieOn"/>

        <!-- componente finestra menu hamburger, si visualizza al click del menu hamburger che cambia il valore della variabile hamburgerOn -->
        <HamburgerMenu v-if="dataShared.hamburgerOn"/>
    </header>
</template>

<script>
import axios from 'axios'
import dataShared from '../dataShared'
import InfoMovie from './elements/InfoMovie.vue'
import HamburgerMenu from './elements/HamburgerMenu.vue'

export default {
  name: 'Header',

  components : {
    InfoMovie,
    HamburgerMenu
  },

  data() {
    return {
      inputSearch : '',
      dataShared
    }
  },

  methods : {
    // metodo che cambia il valore della variabile searchOn contenuta nello store dataShared.js (visualizza il file per maggiori info)
    searchBar() {
      this.dataShared.searchOn = !this.dataShared.searchOn
    },

    // metodo search contenente le chiamate API dato un valore in input
    search() {
      // chiamata axios per la lista dei film 
      axios.get('https://api.themoviedb.org/3/search/movie' , {
          params : {
            api_key : '53d59c9e8ce0cd47e3b9162e1493c788',
            query : this.inputSearch
          }
      })
      .then( resp => {
          this.dataShared.movies = resp.data.results;
      } ),

      // chiamata axios per la lista delle serie tv
      axios.get('https://api.themoviedb.org/3/search/tv' , {
          params : {
              api_key : '53d59c9e8ce0cd47e3b9162e1493c788',
              query : this.inputSearch
          }
      })
      .then ( resp => {
          console.log(resp.data.results);
          this.dataShared.tvShows = resp.data.results
      } ),

      // una volta effettuata la ricerca e le chiamate, svuoto la casella input
      this.inputSearch = ''

      // una volta effettuata la ricerca richiamo il metodo searchBar() (vedi sopra)
      this.searchBar(),
      // durante la ricerca cambio la variabile globale in true(vedi dataShared.js)
      this.dataShared.searching = true
    },

    activeMenu() {
      dataShared.hamburgerOn = true
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';

  header {
    width: 100%;
    height: 60px;
    background-color : $primary_color;
    position: fixed;
    z-index: 99;
    
    // header visibile di default
    .header_nav {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      // proprietà comune a tutte le icone dell'header
      i {
        font-size: 20px;
        color: white;
        margin: 0 15px;
        cursor: pointer;
      }

      .header_left {
        display: flex;
        align-items: center;

        // logo boolflix
        img {
          height: 40px;
        }
      }
    }

    // header visibile (tramite una funzione) al click dell'icona search
    .header_search {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      // proprietà comune a tutte le icone dell'header
      i {
        font-size: 20px;
        color: white;
        margin: 0 15px;
        cursor: pointer;
      }

      .input_search {
        margin: 0 auto;
        display: flex;
        align-items: center;

        input {
          width: 300px;
          color: white;
          background-color: $primary_color;
          border: 1px solid #006cbf;
          padding: 4px 10px;
        }
      }

    }
  }
</style>
