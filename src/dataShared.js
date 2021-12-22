import Vue from 'vue'

export default Vue.observable = {
    // array contenitore risultati della chiamata axios per i film
    movies : [],
    // array contenitore risultati della chiamata axios per le serie tv
    tvShows : [],
    // variabile 'globale' che, se è false abbiamo la condizione di default del caricamento della pagina, altrimenti se true è richiamata in diverse parti della pagina che permetto di attivare il layover del main(quindi oscurando la pagina quando effettuiamo una ricerca) e di cambiare la visualizzazione dell'header per la ricerca tramite input
    searchOn : false
}