namespace Aufgabe07 {

    export async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let respJSON: String = await response.json();
        burger = JSON.parse(JSON.stringify(respJSON));
    }

    async function init(): Promise<void> {
        await communicate("burger.json");
        buildpage();
    }
    init();

    let kategorie0: HTMLElement = document.getElementById("burger") as HTMLElement;
    let kategorie1: HTMLElement = document.getElementById("Sonstiges") as HTMLElement;

    function buildpage(): void {
        for (let i: number = 0; i < burger.length; i++) {

            let divArtikel: HTMLElement = document.createElement("div");
            divArtikel.setAttribute("class", "artikel");
            if (burger[i]._kategorie == 0)
            kategorie0.appendChild(divArtikel);
            if (burger[i]._kategorie == 1)
            kategorie1.appendChild(divArtikel);
    
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
            kaufen.setAttribute("index", i + "");
            kaufen.setAttribute("zähler", 0 + "");
            divArtikel.appendChild(kaufen);
          
        }

    }
//Teilaufgabe1
    let einkaufswagenZahl: number = 0;
    let summe: number = 0;
    let zahl: HTMLElement = document.createElement("string");

    function hinzufuegen(_event: Event): void {    
    einkaufswagenZahl++;
    zahl.innerHTML = einkaufswagenZahl.toString();
    document.getElementById("einkaufswagen")?.appendChild(zahl);
    summe += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("artikelPreis")!);
    console.log(summe);
    let id: string = (<HTMLButtonElement>_event.target)?.getAttribute("index")!;
    let zähler: string = (<HTMLButtonElement>_event.target)?.getAttribute("zähler")!;
    let ziel: HTMLButtonElement = _event.target as HTMLButtonElement;
    localStorage.setItem("summe", summe + "");
    if (zähler == "0") {
        localStorage.setItem(id, zähler);
        ziel.setAttribute("zähler", "1");

    } else {
        let zähler2: number = parseInt(localStorage.getItem("id")!);
        zähler2 ++;
        localStorage.setItem(id, zähler2 + "");
    }
    
    ausgabe();

}
//Teilaufgabe2
    let navDiv: HTMLElement = document.createElement("div");
    let art: string[] = ["burger", "sonstiges", "Beides"];

    for (let index: number = 0; index < art.length; index++) {
    let nav: HTMLElement;
    nav = document.createElement("p");
    nav.setAttribute("gegen", art[index]);
    nav.innerText = art[index];
    nav.addEventListener("click", navWeg);
    navDiv.appendChild(nav);
}
    document.getElementById("nav")?.appendChild(navDiv);

    function navWeg(_event: Event): void {
    let nav1: HTMLElement;
    nav1 = (<HTMLElement>_event.target);
    let gegen: string = nav1.getAttribute("gegen")!;

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
    function ausgabe(): void {
    for (let i: number = 0; i < localStorage.length; ++i) { 
        let storageKey: string = localStorage.key(i) as string;
        console.log(storageKey + ":" + localStorage.getItem(storageKey) );
    }
    console.log("__");

}



}
