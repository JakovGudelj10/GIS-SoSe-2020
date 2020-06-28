namespace Aufgabe09 {


    document.getElementById("sendhtml")?.addEventListener("click", communicateHTML);
    document.getElementById("sendjson")?.addEventListener("click", communicateJSON);

    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gissose2020gudeljja.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: string;

    async function communicateHTML(_event: Event): Promise<void> {
        url = url + "?" + query.toString();
        await communicate(url);
        (<HTMLElement>document.getElementById("response")).innerHTML = response;
    }

    async function communicateJSON(_event: Event): Promise<void> {
        url = url + "?" + query.toString();
        await communicate(url);
        let ausgabe: string = JSON.parse(response);
        console.log(ausgabe);
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let resp: Response = await fetch(_url);
        let responsestring: string = await resp.text();
        response = responsestring;
    }
}