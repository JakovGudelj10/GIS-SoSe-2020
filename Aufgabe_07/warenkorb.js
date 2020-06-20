"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let kategorie0 = document.getElementById("burger");
    let kategorie1 = document.getElementById("Sonstiges");
    function addItemPay(i, obj) {
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        if (Aufgabe07.burger[i]._kategorie == 0)
            kategorie0.appendChild(divArtikel);
        if (Aufgabe07.burger[i]._kategorie == 1)
            kategorie1.appendChild(divArtikel);
        let bild = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", Aufgabe07.burger[i]._bild);
        bild.setAttribute("alt", Aufgabe07.burger[i]._bildAlt);
        divArtikel.appendChild(bild);
        let name = document.createElement("h2");
        name.innerHTML = Aufgabe07.burger[i]._name;
        divArtikel.appendChild(name);
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = Aufgabe07.burger[i]._beschreibung;
        divArtikel.appendChild(beschreibung);
        let preis = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = Aufgabe07.burger[i]._preis.toString();
        divArtikel.appendChild(preis);
        let kaufen = document.createElement("button");
        kaufen.innerText = "Kaufen";
        kaufen.addEventListener("click", hinzufuegen);
        kaufen.setAttribute("type", "button");
        kaufen.setAttribute("artikelPreis", Aufgabe07.burger[i]._preis.toString());
        kaufen.setAttribute("index", i + "");
        kaufen.setAttribute("zähler", 0 + "");
        divArtikel.appendChild(kaufen);
    }
    function buildPay() {
        for (let i = 0; i < localStorage.length; ++i) {
            if (localStorage.key(i) != "summe") {
                let storageKey = localStorage.key(i);
                let j = parseInt(storageKey);
                addItemPay(j, liste);
            }
        }
        let gesamt = document.querySelector("#gesamtpreis");
        if (localStorage.getItem("summe") != null)
            gesamt.innerHTML = localStorage.getItem("summe") + "€";
        else
            gesamt.innerHTML = "0€";
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map