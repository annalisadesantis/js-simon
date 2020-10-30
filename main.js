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

    // NUMERI RAMDOM-----------------------------------
    // Il computer deve generare 5 numeri casuali tra 1 e 5.
    while (numeri_lista.length < tot_num){
        var numeri_random = Math.floor(Math.random() * max_num) + 1;

        // controllo se il numero generato è già presente dentro l'array
        if (numeri_lista.includes(numeri_random) == false ){
            numeri_lista.push(numeri_random);
        }
    }

    // Creo una variabile di appoggio per inserire il trattino
    var stringa_numeri_lista = numeri_lista.join(" - ")
    // Stampo i numeri random in pagina
    $('#box1').text(stringa_numeri_lista);


    // COUNTDOWN-----------------------------------
    // Creo una varibile time per simulare il countdown
    var time = 30;
    // imposto un interval che ripete ogni 1000 millisecondi
    var clock = setInterval(stampaCountDown, 1000);

    // imposto un timeout che allo scadere dei 3 secondi blocca l'interval
    setTimeout(stoppaCountDown, time * 1000);

    // stampo in pagina i numeri in senso decrescente
    function stampaCountDown() {
        $('h2').text("Il tempo scorre: " + time);
        time--;
    }

    // stampo in pagina la fine del countdown
    function stoppaCountDown() {
        clearInterval(clock);
        $('h2').text("Tempo scaduto!");
    }


    // INIZIO GIOCO-----------------------------------
    // creo una varibile che mi salva il tempo in millesecondi
    var tempo = 30000;

    setTimeout(function() {

        // Rimuovo il block alla fine dei 30 secondi
        $("span").addClass("active");

        setTimeout(function() {

            // verifico che i numeri utente non siamo doppi e li metto in un array vuoto
            while(lista_utente.length < tot_num){
                numeri_utente = parseInt(prompt("Inserisci i numeri che ricordi. Uno alla volta!"));

                if (lista_utente.includes(numeri_utente) == false && !isNaN(numeri_utente)){
                    lista_utente.push(numeri_utente);

                }else{
                    alert("Hai già inserito questo numero!");
                }

                // Creo una variabile di appoggio per inserire il trattino
                var stringa_lista_utente = lista_utente.join(" - ");
                // stampo i numeri utente in pagina
                $('#box2').text(stringa_lista_utente);
            }

            setTimeout(function() {

                // verifico se i numeri utente coincidono con quelli random
                for (var i = 0; i < lista_utente.length; i++) {

                    if(numeri_lista.includes(lista_utente[i])){
                        match_numeri.push(lista_utente[i]);
                    }
                }

                // Creo una variabile di appoggio per inserire il trattino
                var stringa_match_numeri = match_numeri.join(" - ");
                // stampo i numeri che coincidono
                $('#box3').text(stringa_match_numeri);
                // stampo il punteggio finale
                $('#final').text("Hai totalizzato " + match_numeri.length + " punti!");
                // Rimetto display block ai numeri random per permettere all'utente di confrontarli con quelli inseriti da lui
                $("span").removeClass("active");

            }, 1000);

        }, 1000);

    }, tempo);

});
