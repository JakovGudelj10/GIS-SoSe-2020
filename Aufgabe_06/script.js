"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    const hamburger = { _name: "Hamburger", _beschreibung: "Der Klasskiker und Billigste, mit fast keinem Geschmack!", _preis: 1.49, _bild: "newhamburger.png", _bildAlt: "Hamburger" };
    const doublecheeseburger = { _name: "Doublecheeseburger", _beschreibung: "Doppelt so teuer wie der normale Cheeseburger!", _preis: 2.99, _bild: "newdoublecheeseburger.png", _bildAlt: "Doublechheseburger" };
    const bigmac = { _name: "BigMac", _beschreibung: "Der absolute Have to eat bei mittelgroßen Hunger!", _preis: 4.29, _bild: "newbigmac.png", _bildAlt: "BigMac" };
    const bigtasty = { _name: "Big n'Tasty Bacon", _beschreibung: "Ein Burger mit Speck!", _preis: 5.19, _bild: "newbigy.png", _bildAlt: "BigTastyBacon" };
    const whooper = { _name: "Cheeseburgerwhooper", _beschreibung: "Eine weitere Cheeseburgervariation!", _preis: 3.99, _bild: "newwhooper.png", _bildAlt: "Whooper" };
    const mcchicken = { _name: "McChicken", _beschreibung: "Zur Abwechslung stwas Hähnchen!", _preis: 2.99, _bild: "newchickenburger.png", _bildAlt: "McChicken" };
    const mcrib = { _name: "McRib", _beschreibung: "Sieht aufjedenfall speziell aus!", _preis: 3.49, _bild: "newmcrib.png", _bildAlt: "McRib" };
    const cheesespeck = { _name: "Cheeseburger mit Speck", _beschreibung: "Mal wieder ein Cheeseburgerupgrade, aber diesmal mit etwas Speck!", _preis: 3.19, _bild: "newspecki.png", _bildAlt: "Speckcheesi", };
    Aufgabe05.burger = [hamburger, doublecheeseburger, bigmac, bigtasty, whooper, mcchicken, mcrib, cheesespeck];
    const pommes = { _name: "Pommes", _beschreibung: "Jeder liebt doch Pommes, nicht?", _preis: 2.89, _bild: "newpommes.png", _bildAlt: "Pommes" };
    const chickenMcNuggets = { _name: "ChickenMcNuggets", _beschreibung: "Seien wir ehrlich, das Herzstück der Filiale!", _preis: 4.99, _bild: "ewchicks.png", _bildAlt: "ChickenMcNuggets" };
    const mcSundae = { _name: "McSundae", _beschreibung: "Nach Wahl: Schoko, Erdbeer oder Karamell!", _preis: 1.00, _bild: "newmcsun.png", _bildAlt: "McSundae" };
    const mcflurry = { _name: "McFlurry", _beschreibung: "Wir hoffen die Eismaschine ist nicht kaputt!", _preis: 2.89, _bild: "newmcflurry.png", _bildAlt: "McFlurry" };
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
    let _newButton = document.createElement("button");
    _newButton.innerHTML = "Jetzt kaufen";
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map