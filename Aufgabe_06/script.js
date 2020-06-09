"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    const hamburger = { _name: "Hamburger", _beschreibung: "Der Klasskiker und Billigste, mit fast keinem Geschmack!", _preis: 1.49, _bild: "newhamburger.png", _bildAlt: "Hamburger", _verfuegbar: true };
    const doublecheeseburger = { _name: "Doublecheeseburger", _beschreibung: "Doppelt so teuer wie der normale Cheeseburger!", _preis: 2.99, _bild: "newdoublecheeseburger.png", _bildAlt: "Doublechheseburger", _verfuegbar: false };
    const bigmac = { _name: "BigMac", _beschreibung: "Der absolute Have to eat bei mittelgroßen Hunger!", _preis: 4.29, _bild: "newbigmac.png", _bildAlt: "BigMac", _verfuegbar: true };
    const bigtasty = { _name: "Big n'Tasty Bacon", _beschreibung: "Ein Burger mit Speck!", _preis: 5.19, _bild: "newbigy.png", _bildAlt: "BigTastyBacon", _verfuegbar: true };
    const whooper = { _name: "Cheeseburgerwhooper", _beschreibung: "Eine weitere Cheeseburgervariation!", _preis: 3.99, _bild: "newwhooper.png", _bildAlt: "Whooper", _verfuegbar: true };
    const mcchicken = { _name: "McChicken", _beschreibung: "Zur Abwechslung stwas Hähnchen!", _preis: 2.99, _bild: "newchickenburger.png", _bildAlt: "McChicken", _verfuegbar: true };
    const mcrib = { _name: "McRib", _beschreibung: "Sieht aufjedenfall speziell aus!", _preis: 3.49, _bild: "newmcrib.png", _bildAlt: "McRib", _verfuegbar: true };
    const cheesespeck = { _name: "Cheeseburger mit Speck", _beschreibung: "Mal wieder ein Cheeseburgerupgrade, aber diesmal mit etwas Speck!", _preis: 3.19, _bild: "newspecki.png", _bildAlt: "Speckcheesi", _verfuegbar: true };
    Aufgabe05.burger = [hamburger, doublecheeseburger, bigmac, bigtasty, whooper, mcchicken, mcrib, cheesespeck];
    const pommes = { _name: "Pommes", _beschreibung: "Jeder liebt doch Pommes, nicht?", _preis: 2.89, _bild: "newpommes.png", _bildAlt: "Pommes", _verfuegbar: true };
    const chickenMcNuggets = { _name: "ChickenMcNuggets", _beschreibung: "Seien wir ehrlich, das Herzstück der Filiale!", _preis: 4.99, _bild: "ewchicks.png", _bildAlt: "ChickenMcNuggets", _verfuegbar: true };
    const mcSundae = { _name: "McSundae", _beschreibung: "Nach Wahl: Schoko, Erdbeer oder Karamell!", _preis: 1.00, _bild: "newmcsun.png", _bildAlt: "McSundae", _verfuegbar: true };
    const mcflurry = { _name: "McFlurry", _beschreibung: "Wir hoffen die Eismaschine ist nicht kaputt!", _preis: 2.89, _bild: "newmcflurry.png", _bildAlt: "McFlurry", _verfuegbar: true };
    Aufgabe05.sonstiges = [pommes, chickenMcNuggets, mcSundae, mcflurry];
    let kategorie = document.createElement("div");
    kategorie.setAttribute("class", "burger");
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
        preis.innerHTML = Aufgabe05.burger[i]._preis;
        divArtikel.appendChild(preis);
    }
    document.getElementById("burger")?.appendChild(kategorie);
})(Aufgabe05 || (Aufgabe05 = {}));
//Teilaufgabe1
let kaufen = document.createElement("button");
kaufen.innerText = "Kaufen";
kaufen.addEventListener("click", hinzufuegen);
kaufen.setAttribute("type", "button");
kaufen.setAttribute("artikelPreis", burger.preis.toString());
let einkaufswagenZahl = 0;
let zahl = document.createElement("string");
function hinzufuegen() {
    einkaufswagenZahl++;
    zahl.innerHTML = einkaufswagenZahl.toString();
    document.getElementById("einkaufswagen")?.appendChild(zahl);
}
//Teilaufgabe2
let navDiv = document.createElement("div");
let artikel = ["Burger", "Sonstiges", "Beides"];
for (let index = 0; index < kategorien.length; index++) {
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
    if (gegen == "Burger") {
        document.getElementById("sonstiges")?.setAttribute("style", "display: none");
        document.getElementById("burger")?.setAttribute("style", "display: flex");
        document.getElementById("anker2")?.setAttribute("style", "display: none");
        document.getElementById("anker1")?.setAttribute("style", "display: block");
    }
    if (gegen == "Sonstiges") {
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