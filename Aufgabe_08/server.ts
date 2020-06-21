namespace Aufgabe08 {

    let button: HTMLButtonElement = document.getElementById("senden") as HTMLButtonElement;
    button.addEventListener("click", buttonclk);

    function buttonclk(_event: Event): void { 
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020gudeljja.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        addUrl(url);
    
    }
    async function addUrl(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let responsestring: String = await response.text();
        console.log("Antwort: " + responsestring);
      }


}