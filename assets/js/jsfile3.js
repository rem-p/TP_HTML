// Exercice 1
var TheStudent =  {
    name : "David Rayy",
    class : "VI",
    rollno : 12
};
var TheStudent2 = TheStudent;   // TheStudent2 est une copie "liée" de TheStudent
TheStudent.name = "David Rayyes";
console.log(TheStudent);
console.log(TheStudent2);

function clone(obj){
    var obj2 = {};
    for (key in obj)
        obj2[key] = obj[key];
    return obj2;
}
TheStudent2 = clone(TheStudent);
delete TheStudent.rollno;
console.log(TheStudent);
console.log(TheStudent2);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// Exercice 2
var RecetteSocca = {
    nom : "Socca",
    portions : 2,
    ingredients : ["Pois-chiche", "Soleil", "Poivre"]
}
console.log("Recette du " + RecetteSocca.nom);
console.log("Portions : " + RecetteSocca.portions);
console.log("Ingrédients : " + RecetteSocca.ingredients);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - -");

// Exercice 3
var Livre = function(titre, auteur, etat_lecture) {
    if(typeof titre == "string")
        this.titre = titre;
    if(typeof auteur == "string")
        this.auteur = auteur;
    if(typeof etat_lecture == "string")
        this.etat_lecture = etat_lecture;
}
var liste_livres = [];
liste_livres.push(new Livre("Le ruisseau","Jean-Hugues","lu"));
liste_livres.push(new Livre("Le ruisseau II","Jean-Hugues II","non lu"));
liste_livres.push(new Livre("Le ruisseau : le retour","Jean-Hugues","non lu"));
console.log("Inventaire de la bibliothèque :");
for(i=0; i<liste_livres.length; i++) {
    console.log("Livre " + (i+1) + " : '" + liste_livres[i].titre + "' écrit par " + liste_livres[i].auteur + " (" + liste_livres[i].etat_lecture + ")");
}
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
