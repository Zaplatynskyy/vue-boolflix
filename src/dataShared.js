import Vue from 'vue'

export default Vue.observable = {
    /*--------------------- 
        CONTENITORI FILM
    ---------------------*/
    // array contenitore riempito al caricamento della pagina con i film più popolari
    popularityMovie : [],
    // array contenitore riempito al caricamento della pagina con film di animazione
    animationFilm : [],
    // array contenitore riempito al caricamento della pagina con film documentari
    documentaryFilm : [],
    // array contenitore riempito al caricamento della pagina con le serie più popolari

    /*--------------------- 
        CONTENITORI SERIE
    ---------------------*/
    popularityShows : [],
    // array contenitore riempito al caricamento della pagina con le serie animazioni
    animationShows : [],
    // array contenitore riempito al caricamento della pagina con le serie documentari
    documentaryShows : [],

    /*--------------------- 
        CONTENITORI RICERCA
    ---------------------*/
    // array contenitore risultati della chiamata axios per i film
    movies : [],
    // array contenitore risultati della chiamata axios per le serie tv
    tvShows : [],
    
    // variabile 'globale' che, se è false abbiamo la condizione di default del caricamento della pagina, altrimenti se true è richiamata in diverse parti della pagina che permetto di attivare il layover del main(quindi oscurando la pagina quando effettuiamo una ricerca) e di cambiare la visualizzazione dell'header per la ricerca tramite input
    searchOn : false,
    // variabile searching che definisce la visualizzazione dei film di default, quando è false mostra i film in generale, durante una ricerca diventa true mostrando solo i film cercati (quindi nascondendo tutti quelli che compaiono al caricamento della pagina)
    searching : false,

    infoMovieOn : false,

    popUp : {}
}