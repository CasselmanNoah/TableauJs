var btinit = document.getElementById("init");
var btcalcul = document.getElementById("calcul");
var tableau = document.getElementById("tableau");
var valeur = tableau.children[0].children;
var btajouter = document.getElementById("ajouter");
var btinsert = document.getElementById("insert");
var caseS = null;
var mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "septembre", "octobre", "novembre", "decembre"];
console.log(valeur);


btajouter.addEventListener("click", ajouterColonne, false);
btinit.addEventListener("click", resetClick, false);
btcalcul.addEventListener("click", calculClick, false);
btinsert.addEventListener("click", insertValue, false);


function ajouterColonne() {
    for (var ligne = 0; ligne < valeur.length; ligne++) {
        var td = document.createElement("td");


        td.innerText = "0";

        valeur[ligne].append(td);
        valeur[ligne].children[valeur[ligne].children.length - 1].innerText = valeur[ligne].children[valeur[ligne].children.length - 2].innerText;
        if (ligne == 0) {
            valeur[ligne].children[valeur[ligne].children.length - 2].innerText = mois[valeur[ligne].children.length - 3];

        }

        console.log(valeur[ligne].children[valeur[ligne].children.length - 1]);

    }

}


for (var ligne = 1; ligne < valeur.length - 1; ligne++) {
    for (var colonne = 1; colonne < valeur[1].children.length - 1; colonne++) {
        valeur[ligne].children[colonne].addEventListener("mouseover", changersourishover, false);
        valeur[ligne].children[colonne].addEventListener("click", changervaleur, false);
        valeur[ligne].children[colonne].addEventListener("mouseout", changersourisout, false);
        valeur[ligne].children[colonne].addEventListener("keydown", keyDownChange, false);


    }
}

function keyDownChange(e) {
    console.log(e);
    if (e.key == "Enter") {
        caseS.innerText = caseS.children[0].value;
        caseS.innerHTML = caseS.innerText;
        caseS = null;

    }
}

function changervaleur() {
    if (caseS == null) {
        var input = document.createElement("input");
        input.value = this.innerText;
        this.innerText = "";
        this.appendChild(input);
        caseS = this;
        console.log(caseS);
    } else if (this != caseS) {
        caseS.innerText = caseS.children[0].value;
        caseS.innerHTML = caseS.innerText;
        caseS = null;

    }



}



function changersourisout() {
    document.body.style.cursor = "initial";
}

function changersourishover() {
    document.body.style.cursor = "pointer";
}



function calculClick() {
    //Calculer ligne par ligne
    for (var ligne = 1; ligne < valeur.length - 1; ligne++) {
        var cumul = 0;
        for (var colonne = 1; colonne < valeur[1].children.length - 1; colonne++) {
            console.log("ligne :" + ligne + "colonne :" + colonne + " : " + parseInt(valeur[ligne].children[colonne].innerText));
            cumul = cumul + parseInt(valeur[ligne].children[colonne].innerText);

        }
        console.log("cumul:" + cumul + "ligne :" + ligne + "colonne :" + colonne);
        console.log(valeur[ligne].children.length - 1);
        valeur[ligne].children[valeur[ligne].children.length - 1].innerText = cumul;
    }

    //Calculer colonne par colonne
    for (var colonne = 1; colonne < valeur[1].children.length; colonne++) {
        cumul = 0;
        for (var ligne = 1; ligne < valeur.length - 1; ligne++) {
            cumul = cumul + parseInt(valeur[ligne].children[colonne].innerText);

        }
        valeur[valeur.length - 1].children[colonne].innerText = cumul;
    }



}


function resetClick() {


    for (var ligne = 1; ligne < valeur.length - 1; ligne++) {
        for (var colonne = 1; colonne < valeur[1].children.length - 1; colonne++) {
            valeur[ligne].children[colonne].innerText = "0";
        }
    }

}



function insertValue() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    for (var ligne = 1; ligne < valeur.length - 1; ligne++) {
        for (var colonne = 1; colonne < valeur[1].children.length - 1; colonne++) {
            valeur[ligne].children[colonne].innerText = getRandomInt(300);
        }
    }

}