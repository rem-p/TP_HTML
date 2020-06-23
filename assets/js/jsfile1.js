function fct2() {
    var bin = confirm("Press"); // Mini-fenetre avec OK/Annuler
    alert(bin);
}

function fct3() {
    var str = prompt("Nom","Dupont"); // Mini-fenetre avec champ d'entrée
    alert(str);
}

function check() {
    var nbr;
    nbr = Number(document.getElementById("myInput").value); // récupère l'élt avec son id (balise input)
    console.log(nbr);
}

function fct4() {
    // var x = 1;
    // var y = 3;
    // var z = ’8’;
    // var t = "2";
    // var u = "bonjour";
    // var v = "3bonjour";
    // var m;
    // var n = 2.5;
    // console.log(x + y); // 4
    // console.log(x + z); // 18
    // console.log(x + parseInt(z)); // 9
    // console.log(x + t); // 12
    // console.log(x + y + z); // 48
    // console.log(z + y + x); // 831
    // console.log(x + u); // 1bonjour
    // console.log(x + parseInt(u)); // NaN
    // console.log(x + v); // 13bonjour
    // console.log(x + parseInt(v)); // 4
    // console.log(u + v); // bonjour3bonjour
    // console.log(x + m); // NaN
    // console.log(x + n); // 3.5
    // console.log(typeof 5.2);
}

function fct5() {
    var str = "bonjour";
    console.log(str.length);
    //str.trim(3)
}

function fct6() {
    x=5;
    // console.log(x%2);
    if (x%2==0) {
        console.log(x + " est pair");
    }
    else {
        console.log(x + " est impair");
    }
}

function fct7() {
    x = Number(document.getElementById("input1").value);
    y = Number(document.getElementById("input2").value);
    x>y ? alert(x) : alert(y);
}

function fct8() {
    x = Number(document.getElementById("input3").value);
    y = Number(document.getElementById("input4").value);
    z = Number(document.getElementById("input5").value);
    if (z>x && z>y) {
        if (x>y) {
            alert(z + " > " + x + " > " + y);
        }
        else {
            alert(z + " > " + y + " > " + x);
        }
    }
    else if (x>y && x>z) {
        if (z>y) {
            alert(x + " > " + z + " > " + y);
        }
        else {
            alert(x + " > " + y + " > " + z);
        }
    }
    else {
        if (x>z) {
            alert(y + " > " + x + " > " + z);
        }
        else {
            alert(y + " > " + z + " > " + x);
        }
    }
}

function fct9() {
    // Exercice 3
    for(i=0 ; i<=10 ; i++) {
       i%2==0 ? console.log(i) : {}; 
    }
}

function fct10() {
    var tab = [12, 5, 30, 55];
    tab = tab.map(x=>x+3);
    
    console.log(tab);
}

function fct11() {

    // Exercice 1
    msg = "<p>";
    for (i=1; i<=100; i++) {
        msg = msg + i + ", ";
    }
    msg = msg + "</p>";
    document.write(msg);

    msg = "<p>";
    i=1;
    while(i<=100) {
        msg = msg + i + ", ";
        i++;
    }
    msg = msg + "</p>";
    document.write(msg);

    document.write("<p>Nb random entre 0 et 100 : " + Math.floor(Math.random() * 101) + "</p>");

    document.write("<p>Pi : " + Math.PI + "</p>");

    msg = "<div>";
    for(i=1; i<=10; i++) {
        for(j=1; j<=10; j++) {
            msg = msg + " * ";
        }
        msg = msg + "<br>";
    }
    msg = msg + "</div>";
    document.write(msg);

    // Exercice 2
    var tab = [5, 2, 3, 4, 1];
    var somme = 0;
    for(var elt of tab) {
        somme = somme + elt;
    }
    var tabmean = somme/tab.length;
    document.write("<p>[" + tab + "]<br>Moyenne : " + tabmean + "</p>");

    // Exercice 4
    var tab_eleves = [["David", 80], ["Vinoth", 77], ["Divya", 88], ["Isitha", 95], ["Thomas", 68]];
    var somme_notes=0;
    for(i=0; i<tab_eleves.length; i++) {
        somme_notes = somme_notes + tab_eleves[i][1];
    }
    var moyenne = somme_notes/tab_eleves.length;
    console.log("Somme : " + somme_notes);
    console.log("Moyenne : " + moyenne);
    document.write("<p> <table border=1> <tr> <th>Noms</th> <th>Notes</th> <th>Grade</th> </tr>");
    for(i=0; i<tab_eleves.length; i++) {
        document.write("<tr><td>" + tab_eleves[i][0] + "</td><td>" + tab_eleves[i][1] + "</td><td>");
        if (tab_eleves[i][1] < 60) {
            document.write("F</td></tr>");
        }
        else if (tab_eleves[i][1] < 70) {
            document.write("D</td></tr>");
        }
        else if (tab_eleves[i][1] < 80) {
            document.write("C</td></tr>");
        }
        else if (tab_eleves[i][1] < 90) {
            document.write("B</td></tr>");
        }
        else if (tab_eleves[i][1] <= 100) {
            document.write("A</td></tr>");
        }
    }
    document.write("</table><br>Somme des notes : " + somme + "<br>");
    document.write("Moyenne : " + moyenne + "</p>");

}

function fct12(temperature) {
    if (temperature>0) {
        msg = "<p>" + temperature + " degrés : il fait chaud</p>";
    }
    else {
        msg = "<p>" + temperature + " degrés : il fait froid</p>";
    }
    document.write(msg);
}

// Exercice 5
var tab_noms = [];

function ajouter_nom() {
    nouveau_nom = document.getElementById("input6").value;
    tab_noms.push(nouveau_nom);
    console.log("tab_noms : [" + tab_noms + "]");
}

function tirage_au_sort() {
    num_gagnant = Math.floor(Math.random() * tab_noms.length);
    console.log("Le grand gagnant est : " + tab_noms[num_gagnant]);
}

function fct13() {
    document.write("<p>" + tab_noms + "</p>");
}
