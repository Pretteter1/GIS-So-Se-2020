"use strict";
var Klausur;
(function (Klausur) {
    async function daten(_url) {
        let antwort1 = await fetch(_url);
        let antwort2 = await antwort1.json();
        Klausur.produkte = JSON.parse(JSON.stringify(antwort2));
    }
    Klausur.daten = daten;
})(Klausur || (Klausur = {}));
//# sourceMappingURL=Daten.js.map