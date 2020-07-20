"use strict";
var Klausur;
(function (Klausur) {
    let buttonHinzufügen = document.getElementById("datenHinzufügen");
    buttonHinzufügen.addEventListener("click", handleHinzufügen);
    let buttonAnzeigen = document.getElementById("datenAnzeigen");
    buttonAnzeigen.addEventListener("click", handleAnzeigen);
    async function handleHinzufügen() {
        let form = new FormData(document.forms[0]);
        let query = new URLSearchParams(form);
        let url = "https://pretteter.herokuapp.com";
        url += "/hinzufuegen" + "?" + query.toString();
        await fetch(url);
        console.log("test");
    }
    async function handleAnzeigen() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://pretteter.herokuapp.com";
        url += "/anzeigen" + "?" + query.toString();
        let antwort = await fetch(url, { method: "get" });
        let ausgabe = await antwort.text();
        document.getElementById("serverAntwort").innerHTML = ausgabe;
    }
})(Klausur || (Klausur = {}));
//# sourceMappingURL=test.js.map