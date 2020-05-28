"use strict";
var nBlödereSachen;
(function (nBlödereSachen) {
    let buchschiffe = {
        bild: "Buch-Grossen-Schiffen-ausweichen.jpg",
        name: "Schiffen ausweichen | 9,99€",
        beschreibung: "Schon zig mal benötigt"
    };
    let buchholz = {
        bild: "Buch-Holz-identifizieren.jpg",
        name: "Buch Holz identifizieren | 9,99€",
        beschreibung: "Lerne Dein Haus kennen"
    };
    let puzzle = {
        bild: "Das-unmoegliche-Puzzle.jpg",
        name: "Das unmoegliche Puzzle | 9,50€",
        beschreibung: "Hat nur Jack Norris lösen können"
    };
    let plüschkartoffel = {
        bild: "Ein-Sack-Plueschkartoffeln.jpg",
        name: "Ein Sack Plüschkartoffeln | 6,75€",
        beschreibung: "Geschmack bleibt lange im Mund"
    };
    let raumspray = {
        bild: "Raumspray-Huehnersuppejpg.jpg",
        name: "Raumspray Hühnersuppe | 5,50€",
        beschreibung: "Duft wie bei Oma"
    };
    let rentierauto = {
        bild: "Rentier-Auto-Deko-Set.jpg",
        name: "Rentier Auto Deko Set | 7,50€",
        beschreibung: "Für Zulassung notwendig"
    };
    let schaukelpferd = {
        bild: "Riesen-Schaukelpferd.jpg",
        name: "Riesen Schaukelpferd | 25€",
        beschreibung: "Es kommt auf die Größe an"
    };
    let swattraining = {
        bild: "SWAT-Trainingjpg.jpg",
        name: "SWAT Training | 99€",
        beschreibung: "Jeder Ami hats bereits"
    };
    let trexshirt = {
        bild: "T-Rex-Christmas-Sweater.jpg",
        name: "T-Rex Christmas Sweater | 9,50€",
        beschreibung: "Der Hingucker überhaupt"
    };
    let wcangel = {
        bild: "WC-Angel-Set.jpg",
        name: "WC Angel Set | 10€",
        beschreibung: "Für lange Sitzungen"
    };
    let tvtestbild = {
        bild: "TV-Testbilder-aus-aller-Welt.jpg",
        name: "TV-Testbilder | 3,50€",
        beschreibung: "Telekom Standardprogramm"
    };
    let uranerz = {
        bild: "Uranerz.jpg",
        name: "Uranerz | 12,99€",
        beschreibung: "Perfekt für Nachbars Fußboden"
    };
    let nochblöderesachen = [buchschiffe, buchholz, puzzle, plüschkartoffel, raumspray, rentierauto, schaukelpferd, swattraining, trexshirt, tvtestbild, uranerz, wcangel];
    for (let i = 0; i < nochblöderesachen.length; i++) {
        let div = document.createElement("div");
        div.id = "divNr" + i;
        document.getElementById("test")?.appendChild(div);
        let img = document.createElement("img");
        img.src = nochblöderesachen[i].bild;
        document.getElementById("divNr" + i)?.appendChild(img);
        let name = document.createElement("p");
        name.innerHTML = nochblöderesachen[i].name;
        document.getElementById("divNr" + i)?.appendChild(name);
        let besch = document.createElement("p");
        besch.innerHTML = nochblöderesachen[i].beschreibung;
        document.getElementById("divNr" + i)?.appendChild(besch);
        let button = document.createElement("button");
        button.innerHTML = "kaufen";
        document.getElementById("divNr" + i)?.appendChild(button);
    }
})(nBlödereSachen || (nBlödereSachen = {}));
//# sourceMappingURL=script.js.map