"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let buttonHtml = document.getElementById("buttonHTML");
    buttonHtml.addEventListener("click", communicateHTML);
    let buttonJson = document.getElementById("buttonJSON");
    buttonJson.addEventListener("click", communicateJSON);
    let formData = new FormData(document.forms[0]);
    let url = "https://gissose2020gudeljja.herokuapp.com";
    let query = new URLSearchParams(formData);
    async function communicateHTML(_event) {
        url = url + "?" + query.toString();
        await communicate(url);
        document.getElementById("response").innerHTML = response;
    }
    async function communicateJSON(_event) {
        url = url + "?" + query.toString();
        await communicate(url);
        let ausgabe = JSON.parse(response);
        console.log(ausgabe);
    }
    async function communicate(_url) {
        let resp = await fetch(_url);
        let responsestring = await resp.text();
        response = responsestring;
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map