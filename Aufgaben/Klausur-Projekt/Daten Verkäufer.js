"use strict";
var Klausur;
(function (Klausur) {
    async function datenv(_url) {
        let antwort1v = await fetch(_url);
        let antwort2v = await antwort1v.json();
        Klausur.produkteverkäufer = JSON.parse(JSON.stringify(antwort2v));
    }
    Klausur.datenv = datenv;
})(Klausur || (Klausur = {}));
//# sourceMappingURL=Daten Verkäufer.js.map