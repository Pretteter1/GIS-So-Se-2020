"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let btnHTML = document.getElementById("htmlButton");
    btnHTML.addEventListener("click", HTML);
    let btnJSON = document.getElementById("jsonButton");
    btnJSON.addEventListener("click", JSON);
    // let antwort: string;
    // let url: string = "https://pretteter.herokuapp.com";
    let formData;
    async function HTML(_event) {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://pretteter.herokuapp.com";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = await antwort.text();
        let antwortHTML = document.getElementById("ausgabe");
        antwortHTML.innerHTML = antwort2;
    }
    async function JSON(_event) {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://pretteter.herokuapp.com";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let json = await antwort.json();
        console.log(json);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=index.js.map