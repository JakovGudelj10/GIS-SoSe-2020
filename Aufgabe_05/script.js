"use strict";
var Aufgabe05;
(function (Aufgabe05) {
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
        let knopf = document.createElement("button");
        knopf.setAttribute("type", "button");
        preis.appendChild(knopf);
        if (Aufgabe05.burger[i]._verfuegbar == true) {
            knopf.innerText = "Kaufen";
            knopf.setAttribute("id", "verfügbar");
        }
        else {
            knopf.innerText = "Ausverkauft";
            knopf.setAttribute("id", "nichtVerfügbar");
        }
    }
    document.getElementById("burger")?.appendChild(kategorie);
    let kategorie2 = document.createElement("div");
    kategorie2.setAttribute("class", "sonstiges");
    for (let i = 0; i < Aufgabe05.burger.length; i++) {
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        kategorie2.appendChild(divArtikel);
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
        let knopf = document.createElement("button");
        knopf.setAttribute("type", "button");
        preis.appendChild(knopf);
        if (Aufgabe05.burger[i]._verfuegbar == true) {
            knopf.innerText = "Kaufen";
            knopf.setAttribute("id", "verfügbar");
        }
        else {
            knopf.innerText = "Ausverkauft";
            knopf.setAttribute("id", "nichtVerfügbar");
        }
    }
    document.getElementById("Sonstiges")?.appendChild(kategorie2);
})(Aufgabe05 || (Aufgabe05 = {}));
(function (Aufgabe05) {
    const hamburger = { _name: "Hamburger", _beschreibung: "Der Klasskiker und Billigste, mit fast keinem Geschmack!", _preis: "1,49€  ", _bild: "newhamburger.png", _bildAlt: "Hamburger", _verfuegbar: true };
    const doublecheeseburger = { _name: "Doublecheeseburger", _beschreibung: "Doppelt so teuer wie der normale Cheeseburger!", _preis: "2,99€  ", _bild: "newdoublecheeseburger.png", _bildAlt: "Doublechheseburger", _verfuegbar: false };
    const bigmac = { _name: "BigMac", _beschreibung: "Der absolute Have to eat bei mittelgroßen Hunger!", _preis: "4,29€  ", _bild: "newbigmac.png", _bildAlt: "BigMac", _verfuegbar: true };
    const bigtasty = { _name: "Big n'Tasty Bacon", _beschreibung: "Ein Burger mit Speck!", _preis: "5,19€  ", _bild: "newbigy.png", _bildAlt: "BigTastyBacon", _verfuegbar: true };
    const whooper = { _name: "Cheeseburgerwhooper", _beschreibung: "Eine weitere Cheeseburgervariation!", _preis: "3,99€  ", _bild: "newwhooper.png", _bildAlt: "Whooper", _verfuegbar: true };
    const mcchicken = { _name: "McChicken", _beschreibung: "Zur Abwechslung stwas Hähnchen!", _preis: "2,99€  ", _bild: "newchickenburger.png", _bildAlt: "McChicken", _verfuegbar: true };
    const mcrib = { _name: "McRib", _beschreibung: "Sieht aufjedenfall speziell aus!", _preis: "3,49€  ", _bild: "newmcrib.png", _bildAlt: "McRib", _verfuegbar: true };
    const cheesespeck = { _name: "Cheeseburger mit Speck", _beschreibung: "Mal wieder ein Cheeseburgerupgrade, aber diesmal mit etwas Speck!", _preis: "3,19€  ", _bild: "newspecki.png", _bildAlt: "Speckcheesi", _verfuegbar: true };
    Aufgabe05.burger = [hamburger, doublecheeseburger, bigmac, bigtasty, whooper, mcchicken, mcrib, cheesespeck];
    const pommes = { _name: "Pommes", _beschreibung: "Jeder liebt doch Pommes, nicht?", _preis: "2,89€  ", _bild: "newpommes.png", _bildAlt: "Pommes", _verfuegbar: true };
    const chickenMcNuggets = { _name: "ChickenMcNuggets", _beschreibung: "Seien wir ehrlich, das Herzstück der Filiale!", _preis: "4,99€  ", _bild: "ewchicks.png", _bildAlt: "ChickenMcNuggets", _verfuegbar: true };
    const mcSundae = { _name: "McSundae", _beschreibung: "Nach Wahl: Schoko, Erdbeer oder Karamell!", _preis: "1€  ", _bild: "newmcsun.png", _bildAlt: "McSundae", _verfuegbar: true };
    const mcflurry = { _name: "McFlurry", _beschreibung: "Wir hoffen die Eismaschine ist nicht kaputt!", _preis: "2,89€  ", _bild: "newmcflurry.png", _bildAlt: "McFlurry", _verfuegbar: true };
    Aufgabe05.sonstiges = [pommes, chickenMcNuggets, mcSundae, mcflurry];
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map