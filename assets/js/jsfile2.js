const constante_globale = 1;
var variable_globale = 2;

function fct1() {
    const constante_locale = 3;
    var variable_locale = 4;    
    if (true) {
        let variable_bloc = 5;
    }
}

function fct2() {

    // Exercice 1
    var auj = new Date();
    var jour_semaine;
    switch(auj.getDay()) {
        case 1 : jour_semaine = "Lundi"; break;
        case 2 : jour_semaine = "Mardi"; break;
        case 3 : jour_semaine = "Mercredi"; break;
        case 4 : jour_semaine = "Jeudi"; break;
        case 5 : jour_semaine = "Vendredi"; break;
        case 6 : jour_semaine = "Samedi"; break;
        case 7 : jour_semaine = "Dimanche"; break;
    }
    console.log("Jour de la semaine : " + jour_semaine);
    console.log("Heure actuelle : " + auj.getHours() + "h " + auj.getMinutes() + "m " + auj.getSeconds() + "s");

    // Exercice 2
    for(i=1; i<=100; i++) {
        if (i%3==0 && i%5==0) {
            console.log("FizzBuzz");
        }
        else if (i%3==0) {
            console.log("Fizz");
        }
        else if (i%5==0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }

    // Exercice 3
    const tab_notes = new Array(12, 14, 19, 2, 9, 10, 15);
    var copie_tab_notes = [...tab_notes];    // la copie est nécessaire car les fcts type .sort modifient aussi les constantes...
    //var copie_tab_notes = tab_notes.slice();
    var meilleure_note = copie_tab_notes.sort(function(a,b){return b-a}).slice(0,1);
    console.log("Notes : " + tab_notes);
    console.log("Meilleure note : " + meilleure_note);
    var nb_eleves_sup_moyenne = 0;
    for(var note of tab_notes) {
        note>=10 ? nb_eleves_sup_moyenne++ : {};
    }
    console.log("Elèves ayant la moyenne : " + nb_eleves_sup_moyenne + "/" + tab_notes.length);
    console.log("Bravo à l'élève immatriculé " + tab_notes.indexOf(meilleure_note[0]) + " pour sa note !");

}
