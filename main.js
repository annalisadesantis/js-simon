// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi

$(document).ready(function() {

    // Creo degli array e delle variabili di supporto
    var numeri_lista = [];
    var tot_num = 5;
    var min_num = 1;
    var max_num = 100;

    // Il computer deve generare 5 numeri casuali tra 1 e 5.
    while (numeri_lista.length < tot_num){
        var numeri_random = Math.floor(Math.random() * max_num) + 1;

        // controllo se il numero generato è già presente dentro l'array
        if (numeri_lista.includes(numeri_random) == false ){
            numeri_lista.push(numeri_random);
        }
    }

    document.getElementById('box').innerHTML = numeri_lista;



});
