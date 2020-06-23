"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let button = document.getElementById("senden");
    button.addEventListener("click", buttonclk);
    function buttonclk(_event) {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020gudeljja.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        addUrl(url);
    }
    async function addUrl(_url) {
        let response = await fetch(_url, { method: "get" });
        let responsestring = await response.text();
        console.log("Antwort: " + responsestring);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=server.js.map