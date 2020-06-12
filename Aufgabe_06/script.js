"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    const hamburger = { _name: "Hamburger", _beschreibung: "Der Klasskiker und Billigste, mit fast keinem Geschmack!", _preis: 1.49, _bild: "newhamburger.png", _bildAlt: "Hamburger", _verfuegbar: true, _kategorie: 0 };
    const doublecheeseburger = { _name: "Doublecheeseburger", _beschreibung: "Doppelt so teuer wie der normale Cheeseburger!", _preis: 2.99, _bild: "newdouble.png", _bildAlt: "Doublecheeseburger", _verfuegbar: false, _kategorie: 0 };
    const bigmac = { _name: "BigMac", _beschreibung: "Der absolute Have to eat bei mittelgroßen Hunger!", _preis: 4.29, _bild: "newbigmac.png", _bildAlt: "BigMac", _verfuegbar: true, _kategorie: 0 };
    const bigtasty = { _name: "Big n'Tasty Bacon", _beschreibung: "Ein Burger mit Speck!", _preis: 5.19, _bild: "newbigy.png", _bildAlt: "BigTastyBacon", _verfuegbar: true, _kategorie: 0 };
    const whooper = { _name: "Cheeseburgerwhooper", _beschreibung: "Eine weitere Cheeseburgervariation!", _preis: 3.99, _bild: "newwhooper.png", _bildAlt: "Whooper", _verfuegbar: true, _kategorie: 0 };
    const mcchicken = { _name: "McChicken", _beschreibung: "Zur Abwechslung stwas Hähnchen!", _preis: 2.99, _bild: "newchickenburger.png", _bildAlt: "McChicken", _verfuegbar: true, _kategorie: 0 };
    const mcrib = { _name: "McRib", _beschreibung: "Sieht aufjedenfall speziell aus!", _preis: 3.49, _bild: "newmcrib.png", _bildAlt: "McRib", _verfuegbar: true, _kategorie: 0 };
    const cheesespeck = { _name: "Cheeseburger mit Speck", _beschreibung: "Mal wieder ein Cheeseburgerupgrade, aber diesmal mit etwas Speck!", _preis: 3.19, _bild: "newspecki.png", _bildAlt: "Speckcheesi", _verfuegbar: true, _kategorie: 0 };
    Aufgabe05.burger = [hamburger, doublecheeseburger, bigmac, bigtasty, whooper, mcchicken, mcrib, cheesespeck];
    const pommes = { _name: "Pommes", _beschreibung: "Jeder liebt doch Pommes, nicht?", _preis: 2.89, _bild: "newpommes.png", _bildAlt: "Pommes", _verfuegbar: true, _kategorie: 1 };
    const chickenMcNuggets = { _name: "ChickenMcNuggets", _beschreibung: "Seien wir ehrlich, das Herzstück der Filiale!", _preis: 4.99, _bild: "newchicks.png", _bildAlt: "ChickenMcNuggets", _verfuegbar: true, _kategorie: 1 };
    const mcSundae = { _name: "McSundae", _beschreibung: "Nach Wahl: Schoko, Erdbeer oder Karamell!", _preis: 1.00, _bild: "newmcsun.png", _bildAlt: "McSundae", _verfuegbar: true, _kategorie: 1 };
    const mcflurry = { _name: "McFlurry", _beschreibung: "Wir hoffen die Eismaschine ist nicht kaputt!", _preis: 2.89, _bild: "newmcflurry.png", _bildAlt: "McFlurry", _verfuegbar: true, _kategorie: 1 };
    Aufgabe05.sonstiges = [pommes, chickenMcNuggets, mcSundae, mcflurry];
    let kategorie = document.createElement("div");
    kategorie.setAttribute("class", "burger");
    kategorie.setAttribute("class", "sonstiges");
    document.getElementsByTagName("main")[0].appendChild(kategorie);
    for (let i = 0; i < Aufgabe05.burger.length; i++) {
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        kategorie.appendChild(divArtikel);
        let bild = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", Aufgabe05.burger[i]._bild);
        bild.setAttribute("alt", Aufgabe05.burger[i]._bildAlt);
        divArtikel.appendChild(bild);
        let name = document.createElement("h2");
        name.innerHTML = Aufgabe05.burger[i]._name;
        divArtikel.appendChild(name);
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = Aufgabe05.burger[i]._beschreibung;
        divArtikel.appendChild(beschreibung);
        let preis = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = Aufgabe05.burger[i]._preis.toString();
        divArtikel.appendChild(preis);
        let kaufen = document.createElement("button");
        kaufen.innerText = "Kaufen";
        kaufen.addEventListener("click", hinzufuegen);
        kaufen.setAttribute("type", "button");
        kaufen.setAttribute("artikelPreis", Aufgabe05.burger[i]._preis.toString());
        divArtikel.appendChild(kaufen);
    }
    document.getElementById("burger")?.appendChild(kategorie);
    for (let i = 0; i < Aufgabe05.sonstiges.length; i++) {
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        kategorie.appendChild(divArtikel);
        let bild = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", Aufgabe05.sonstiges[i]._bild);
        bild.setAttribute("alt", Aufgabe05.sonstiges[i]._bildAlt);
        divArtikel.appendChild(bild);
        let name = document.createElement("h2");
        name.innerHTML = Aufgabe05.sonstiges[i]._name;
        divArtikel.appendChild(name);
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = Aufgabe05.sonstiges[i]._beschreibung;
        divArtikel.appendChild(beschreibung);
        let preis = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = Aufgabe05.sonstiges[i]._preis.toString();
        divArtikel.appendChild(preis);
        let kaufen = document.createElement("button");
        kaufen.innerText = "Kaufen";
        kaufen.addEventListener("click", hinzufuegen);
        kaufen.setAttribute("type", "button");
        kaufen.setAttribute("artikelPreis", Aufgabe05.sonstiges[i]._preis.toString());
        divArtikel.appendChild(kaufen);
    }
    document.getElementById("sonstiges")?.appendChild(kategorie);
})(Aufgabe05 || (Aufgabe05 = {}));
//Teilaufgabe1
let einkaufswagenZahl = 0;
let preis = 0;
let zahl = document.createElement("string");
function hinzufuegen(_event) {
    einkaufswagenZahl++;
    zahl.innerHTML = einkaufswagenZahl.toString();
    document.getElementById("einkaufswagen")?.appendChild(zahl);
    preis += parseFloat(_event.target?.getAttribute("artikelPreis"));
    console.log(preis);
}
//Teilaufgabe2
let navDiv = document.createElement("div");
let artikel = ["burger", "sonstiges", "Beides"];
for (let index = 0; index < artikel.length; index++) {
    let nav;
    nav = document.createElement("p");
    nav.setAttribute("gegen", artikel[index]);
    nav.innerText = artikel[index];
    nav.addEventListener("click", navWeg);
    navDiv.appendChild(nav);
}
document.getElementById("nav")?.appendChild(navDiv);
function navWeg(_event) {
    let nav1;
    nav1 = _event.target;
    let gegen = nav1.getAttribute("gegen");
    if (gegen == "burger") {
        document.getElementById("sonstiges")?.setAttribute("style", "display: none");
        document.getElementById("burger")?.setAttribute("style", "display: flex");
        document.getElementById("anker2")?.setAttribute("style", "display: none");
        document.getElementById("anker1")?.setAttribute("style", "display: block");
    }
    if (gegen == "sonstiges") {
        document.getElementById("burger")?.setAttribute("style", "display: none");
        document.getElementById("sonstiges")?.setAttribute("style", "display: flex");
        document.getElementById("anker1")?.setAttribute("style", "display: none");
        document.getElementById("anker2")?.setAttribute("style", "display: block");
    }
    if (gegen == "Beides") {
        document.getElementById("burger")?.setAttribute("style", "display: flex");
        document.getElementById("sonstiges")?.setAttribute("style", "display: flex");
        document.getElementById("anker1")?.setAttribute("style", "display: block");
        document.getElementById("anker2")?.setAttribute("style", "display: block");
    }
}
//# sourceMappingURL=script.js.map