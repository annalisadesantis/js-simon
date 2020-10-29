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
    var lista_utente = [];
    var numeri_utente;

    var match_numeri = [];

    // Il computer deve generare 5 numeri casuali tra 1 e 5.
    while (numeri_lista.length < tot_num){
        var numeri_random = Math.floor(Math.random() * max_num) + 1;

        // controllo se il numero generato è già presente dentro l'array
        if (numeri_lista.includes(numeri_random) == false ){
            numeri_lista.push(numeri_random);
        }
    }

    $('#box1').text(numeri_lista);

    var tempo = 3000;

    setTimeout(function() {

        $("span").addClass("active");

        setTimeout(function() {

            while(lista_utente.length < tot_num){
                numeri_utente = parseInt(prompt("Inserisci i numeri che ricordi. Uno alla volta!"));

                if (lista_utente.includes(numeri_utente) == false && !isNaN(numeri_utente)){
                    lista_utente.push(numeri_utente);

                }else{
                    alert("Hai già inserito questo numero!");
                }

                $('#box2').text(lista_utente);
            }

            setTimeout(function() {

                for (var i = 0; i < lista_utente.length; i++) {

                    if(numeri_lista.includes(lista_utente[i])){
                        match_numeri.push(lista_utente[i]);
                    }
                }

                $('#box3').text(match_numeri);
                $('#final').text("Hai totalizzato " + match_numeri.length + " punti!");

            }, 1000);

        }, 1000);

    }, tempo);

});
