namespace Aufgabe07 {

    let kategorie: HTMLElement = document.querySelector(".warenkorb") as HTMLElement;
    
    function addItem(i: number, burger: Artikel[]): void {

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
   
    }
    function preisAufbau(): void {
        for (let i: number = 0; i < localStorage.length; ++i) {
            if (localStorage.key(i) != "summe") {
            let storageKey: string = localStorage.key(i) as string;
            let j: number = parseInt(storageKey);
            addItem(j, burger);
            }
        }
        let deletebutton: HTMLButtonElement = document.getElementById("deleteButtonID") as HTMLButtonElement;
        deletebutton.addEventListener("click", hndClear);
        function hndClear(_event: Event): void {
            localStorage.clear();
            location.reload();
        }
        let gesamt: HTMLElement = document.querySelector("#summe") as HTMLElement;
        if (localStorage.getItem("summe") != null)
        gesamt.innerHTML = "Gesamtpreis: " + localStorage.getItem("summe") + "€";
        else 
        gesamt.innerHTML = "Gesamtpreis: 0€";
    }
    async function initWarenkorb(): Promise<void> {
        await communicate("burger.json");
        preisAufbau();
    }
    initWarenkorb();
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let respJSON: String = await response.json();
        burger = JSON.parse(JSON.stringify(respJSON));
    }
}