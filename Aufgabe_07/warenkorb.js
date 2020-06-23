"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let kategorie = document.querySelector(".warenkorb");
    function addItem(i, burger) {
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        kategorie.appendChild(divArtikel);
        let bild = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", burger[i]._bild);
        bild.setAttribute("alt", burger[i]._bildAlt);
        divArtikel.appendChild(bild);
        let name = document.createElement("h2");
        name.innerHTML = burger[i]._name;
        divArtikel.appendChild(name);
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = burger[i]._beschreibung;
        divArtikel.appendChild(beschreibung);
        let preis = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = burger[i]._preis.toString();
        divArtikel.appendChild(preis);
        let entfernen = document.createElement("button");
        entfernen.setAttribute("class", "entfernen");
        entfernen.setAttribute("index", i + "");
        entfernen.setAttribute("preis", burger[i]._preis + "");
        entfernen.innerHTML = "Artikel entfernen";
        divArtikel.appendChild(entfernen);
    }
    function preisAufbau() {
        for (let i = 0; i < localStorage.length; ++i) {
            if (localStorage.key(i) != "summe") {
                let storageKey = localStorage.key(i);
                let j = parseInt(storageKey);
                addItem(j, Aufgabe07.burger);
            }
        }
        let deletebutton = document.getElementById("deleteButtonID");
        deletebutton.addEventListener("click", hndClear);
        function hndClear(_event) {
            localStorage.clear();
            location.reload();
        }
        let gesamt = document.querySelector("#summe");
        if (localStorage.getItem("summe") != null)
            gesamt.innerHTML = "Gesamtpreis: " + localStorage.getItem("summe") + "€";
        else
            gesamt.innerHTML = "Gesamtpreis: 0€";
    }
    async function initWarenkorb() {
        await communicate("burger.json");
        preisAufbau();
        createPayEvents();
    }
    initWarenkorb();
    async function communicate(_url) {
        let response = await fetch(_url);
        let respJSON = await response.json();
        Aufgabe07.burger = JSON.parse(JSON.stringify(respJSON));
    }
    function löschen(_event) {
        let ziel = _event.target;
        ziel.parentElement?.setAttribute("style", "display: none");
        let index = ziel.getAttribute("index");
        localStorage.removeItem(index);
        ausgabe();
        summeBerechnen();
        let gesamt = document.querySelector("#summe");
        gesamt.innerHTML = "Gesamtpreis: " + localStorage.getItem("summe") + " €";
    }
    function summeBerechnen() {
        let gesamtwert = 0;
        for (let i = 0; i < localStorage.length; ++i) {
            if (localStorage.key(i) != "summe") {
                let storageKey = localStorage.key(i);
                let j = parseInt(storageKey);
                gesamtwert += parseInt(localStorage.getItem(storageKey)) * Aufgabe07.burger[j]._preis;
            }
        }
        localStorage.setItem("summe", gesamtwert + "");
    }
    function createPayEvents() {
        let allDel = document.getElementsByClassName("entfernen");
        for (let i = 0; i < allDel.length; i++) {
            allDel[i].addEventListener("click", löschen);
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
//# sourceMappingURL=warenkorb.js.map