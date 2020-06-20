"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    async function communicate(_url) {
        let response = await fetch(_url);
        let respJSON = await response.json();
        Aufgabe07.burger = JSON.parse(JSON.stringify(respJSON));
    }
    Aufgabe07.communicate = communicate;
    async function init() {
        await communicate("burger.json");
        buildpage();
    }
    init();
    let kategorie0 = document.getElementById("burger");
    let kategorie1 = document.getElementById("Sonstiges");
    function buildpage() {
        for (let i = 0; i < Aufgabe07.burger.length; i++) {
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
    }
    //Teilaufgabe1
    let einkaufswagenZahl = 0;
    let summe = 0;
    let zahl = document.createElement("string");
    function hinzufuegen(_event) {
        einkaufswagenZahl++;
        zahl.innerHTML = einkaufswagenZahl.toString();
        document.getElementById("einkaufswagen")?.appendChild(zahl);
        summe += parseFloat(_event.target?.getAttribute("artikelPreis"));
        console.log(summe);
        let id = _event.target?.getAttribute("index");
        let zähler = _event.target?.getAttribute("zähler");
        let ziel = _event.target;
        localStorage.setItem("summe", summe + "");
        if (zähler == "0") {
            localStorage.setItem(id, zähler);
            ziel.setAttribute("zähler", "1");
        }
        else {
            let zähler2 = parseInt(localStorage.getItem("id"));
            zähler2++;
            localStorage.setItem(id, zähler2 + "");
        }
        ausgabe();
    }
    //Teilaufgabe2
    let navDiv = document.createElement("div");
    let art = ["burger", "sonstiges", "Beides"];
    for (let index = 0; index < art.length; index++) {
        let nav;
        nav = document.createElement("p");
        nav.setAttribute("gegen", art[index]);
        nav.innerText = art[index];
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
    function ausgabe() {
        for (let i = 0; i < localStorage.length; ++i) {
            let storageKey = localStorage.key(i);
            console.log(storageKey + ":" + localStorage.getItem(storageKey));
        }
        console.log("__");
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map