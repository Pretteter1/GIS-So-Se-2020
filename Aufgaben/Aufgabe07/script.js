"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    async function daten(_url) {
        let antwort1 = await fetch(_url);
        let antwort2 = await antwort1.json();
        Aufgabe7.produkte = JSON.parse(JSON.stringify(antwort2));
    }
    Aufgabe7.daten = daten;
    //export let startseite:  Produkte[] = [nichts, stift, dekodino];
    //export let nochblöderesachen:  Produkte[] = [buchschiffe, buchholz, puzzle, plüschkartoffel, raumspray, rentierauto, schaukelpferd, swattraining, trexshirt, tvtestbild, uranerz, wcangel];
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=script.js.map