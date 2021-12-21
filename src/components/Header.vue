<template>
    <header>
        <div v-show="!searchOn" class="header_nav">
          <div class="header_left">
            <i class="fas fa-bars"></i>
            <img src="../assets/img/logo.png" alt="">
          </div>

          <div class="header_right">
            <i class="fas fa-search" @click="searchBar()"></i>
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <div v-show="searchOn" class="header_search">
          <i class="fas fa-arrow-left" @click="searchBar()"></i>
          <div class="input_search" @keyup.enter="search()">
            <i class="fas fa-search" @click="search()"></i>
            <input type="text" placeholder="Cerca" v-model="inputSearch">
          </div>
        </div>
    </header>
</template>

<script>
import axios from 'axios'
import dataShared from '../dataShared'

export default {
  name: 'Header',

  data() {
    return {
      searchOn : false,
      inputSearch : '',
      dataShared
    }
  },

  methods : {

    searchBar() {
      this.searchOn = !this.searchOn
    },

    search() {
      axios.get('https://api.themoviedb.org/3/search/movie' , {
          params : {
          api_key : '53d59c9e8ce0cd47e3b9162e1493c788',
          query : this.inputSearch
          }
      })
      .then( resp => {
          this.dataShared.movies = resp.data.results;
      } ),

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

      this.inputSearch = '',

      this.searchBar()
    }

  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';

  header {
    height: 60px;
    background-color : $primary_color;

    i {
        font-size: 20px;
        color: white;
        margin: 0 15px;
        cursor: pointer;
    }
    
    .header_nav {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header_left {
        display: flex;
        align-items: center;

        img {
          height: 40px;
        }
      }
    }

    .header_search {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

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
