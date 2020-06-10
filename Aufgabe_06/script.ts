namespace Aufgabe05 {

    export interface Artikel {
        _name: string;
        _beschreibung: string;
        _preis: number;
        _bild: string;
        _bildAlt: string;
        _verfuegbar: boolean;
    }

    const hamburger: Artikel = {_name: "Hamburger", _beschreibung: "Der Klasskiker und Billigste, mit fast keinem Geschmack!", _preis: 1.49 , _bild: "newhamburger.png", _bildAlt: "Hamburger", _verfuegbar: true};
    const doublecheeseburger: Artikel = {_name: "Doublecheeseburger", _beschreibung: "Doppelt so teuer wie der normale Cheeseburger!", _preis: 2.99  , _bild: "newdoublecheeseburger.png", _bildAlt: "Doublechheseburger", _verfuegbar: false};
    const bigmac: Artikel = {_name: "BigMac", _beschreibung: "Der absolute Have to eat bei mittelgroßen Hunger!", _preis: 4.29  , _bild: "newbigmac.png", _bildAlt: "BigMac", _verfuegbar: true};
    const bigtasty: Artikel = {_name: "Big n'Tasty Bacon", _beschreibung: "Ein Burger mit Speck!", _preis: 5.19  , _bild: "newbigy.png", _bildAlt: "BigTastyBacon", _verfuegbar: true};
    const whooper: Artikel = {_name: "Cheeseburgerwhooper", _beschreibung: "Eine weitere Cheeseburgervariation!", _preis: 3.99  , _bild: "newwhooper.png", _bildAlt: "Whooper", _verfuegbar: true};
    const mcchicken: Artikel = {_name: "McChicken", _beschreibung: "Zur Abwechslung stwas Hähnchen!", _preis: 2.99  , _bild: "newchickenburger.png", _bildAlt: "McChicken", _verfuegbar: true};
    const mcrib: Artikel = {_name: "McRib", _beschreibung: "Sieht aufjedenfall speziell aus!", _preis: 3.49  , _bild: "newmcrib.png", _bildAlt: "McRib", _verfuegbar: true};
    const cheesespeck: Artikel = {_name: "Cheeseburger mit Speck", _beschreibung: "Mal wieder ein Cheeseburgerupgrade, aber diesmal mit etwas Speck!", _preis: 3.19  , _bild: "newspecki.png", _bildAlt: "Speckcheesi", _verfuegbar: true};
    
    
    export let burger: Artikel[] = [hamburger, doublecheeseburger, bigmac, bigtasty, whooper, mcchicken, mcrib, cheesespeck];

    const pommes: Artikel = {_name: "Pommes", _beschreibung: "Jeder liebt doch Pommes, nicht?", _preis: 2.89, _bild: "newpommes.png", _bildAlt: "Pommes", _verfuegbar: true};
    const chickenMcNuggets: Artikel = {_name: "ChickenMcNuggets", _beschreibung: "Seien wir ehrlich, das Herzstück der Filiale!", _preis: 4.99, _bild: "ewchicks.png", _bildAlt: "ChickenMcNuggets", _verfuegbar: true};
    const mcSundae: Artikel = {_name: "McSundae", _beschreibung: "Nach Wahl: Schoko, Erdbeer oder Karamell!", _preis: 1.00, _bild: "newmcsun.png", _bildAlt: "McSundae", _verfuegbar: true};
    const mcflurry: Artikel = {_name: "McFlurry", _beschreibung: "Wir hoffen die Eismaschine ist nicht kaputt!", _preis: 2.89, _bild: "newmcflurry.png", _bildAlt: "McFlurry", _verfuegbar: true};
   
    export let sonstiges: Artikel[] = [pommes, chickenMcNuggets, mcSundae, mcflurry];
    


    let kategorie: HTMLElement = document.createElement("div");
    kategorie.setAttribute("class", "burger");
    document.getElementsByTagName("main")[0].appendChild(kategorie);



    for (let i: number = 0; i < burger.length; i++) {

        let divArtikel: HTMLElement = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        kategorie.appendChild(divArtikel);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", burger[i]._bild);
        bild.setAttribute("alt", burger[i]._bildAlt);
        divArtikel.appendChild(bild);

        let name: HTMLElement = document.createElement("h2");
        name.innerHTML = burger[i]._name;
        divArtikel.appendChild(name);

        let beschreibung: HTMLElement = document.createElement("p");
        beschreibung.innerHTML = burger[i]._beschreibung;
        divArtikel.appendChild(beschreibung);

        let preis: HTMLElement = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = burger[i]._preis.toString();
        divArtikel.appendChild(preis);  
        
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerText = "Kaufen";
        kaufen.addEventListener("click", hinzufuegen);
        kaufen.setAttribute("type", "button");
        kaufen.setAttribute("artikelPreis", burger[i]._preis.toString());
        divArtikel.appendChild(kaufen);

    }
    document.getElementById("burger")?.appendChild(kategorie);

    for (let i: number = 0; i < sonstiges.length; i++) {

        let divArtikel: HTMLElement = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        kategorie.appendChild(divArtikel);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", sonstiges[i]._bild);
        bild.setAttribute("alt", sonstiges[i]._bildAlt);
        divArtikel.appendChild(bild);

        let name: HTMLElement = document.createElement("h2");
        name.innerHTML = sonstiges[i]._name;
        divArtikel.appendChild(name);

        let beschreibung: HTMLElement = document.createElement("p");
        beschreibung.innerHTML = sonstiges[i]._beschreibung;
        divArtikel.appendChild(beschreibung);

        let preis: HTMLElement = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = sonstiges[i]._preis.toString();
        divArtikel.appendChild(preis);  
        
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerText = "Kaufen";
        kaufen.addEventListener("click", hinzufuegen);
        kaufen.setAttribute("type", "button");
        kaufen.setAttribute("artikelPreis", sonstiges[i]._preis.toString());
        divArtikel.appendChild(kaufen);

    }
    document.getElementById("sonstiges")?.appendChild(kategorie);

}
//Teilaufgabe1


let einkaufswagenZahl: number = 0;
let preis: number = 0;
let zahl: HTMLElement = document.createElement("string");

function hinzufuegen(_event: Event): void {
    einkaufswagenZahl++;
    zahl.innerHTML = einkaufswagenZahl.toString();
    document.getElementById("einkaufswagen")?.appendChild(zahl);
    preis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("artikelPreis")!);
    console.log(preis);
}
//Teilaufgabe2

let navDiv: HTMLElement = document.createElement("div");
let artikel: string[] = ["Burger", "Sonstiges", "Beides"];

for (let index: number = 0; index < artikel.length; index++) {
    let nav: HTMLElement;
    nav = document.createElement("p");
    nav.setAttribute("gegen", artikel[index]);
    nav.innerText = artikel[index];
    nav.addEventListener("click", navWeg);
    navDiv.appendChild(nav);
}
document.getElementById("nav")?.appendChild(navDiv);

function navWeg(_event: Event): void {
    let nav1: HTMLElement;
    nav1 = (<HTMLElement>_event.target);
    let gegen: string = nav1.getAttribute("gegen")!;

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
