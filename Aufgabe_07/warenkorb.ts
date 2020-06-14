namespace artikel {

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
        divArtikel.appendChild(kaufen);
    }












































}