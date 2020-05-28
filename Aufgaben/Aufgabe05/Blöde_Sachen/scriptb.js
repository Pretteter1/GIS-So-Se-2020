"use strict";
var BlödeS;
(function (BlödeS) {
    let buchpenis = {
        bild: "Buch_Penis.jpg",
        name: "Leben mit einem großen P. | 7,50€",
        beschreibung: "Wer kennt nicht das Problem!"
    };
    let christmas = {
        bild: "Christmas.jpg",
        name: "Go Jesus Pulli | 5,50€",
        beschreibung: "go Jesus go"
    };
    let waschmaschiene = {
        bild: "DVD-Waschmaschiene.jpg",
        name: "Waschmaschienen DVD | 2,99€",
        beschreibung: "Für den perfekten Familienabend"
    };
    let einhorn = {
        bild: "DVD-Waschmaschiene.jpg",
        name: "Waschmaschienen DVD | 2,99€",
        beschreibung: "Für den perfekten Familienabend"
    };
    let federhammer = {
        bild: "Federhammer.jpg",
        name: "Federhammer | 7,99€",
        beschreibung: "Niet- und Nagelfest"
    };
    let raumduftp = {
        bild: "Raumduft_Pizza.jpg",
        name: "Raumduft Pizza | 2,50€",
        beschreibung: "Wie beim Italiener"
    };
    let reisekissen = {
        bild: "Reisekissenjpg.jpg",
        name: "Reisekissen | 8,50€",
        beschreibung: "Zählt nicht als Mundschutz"
    };
    let williwarmer = {
        bild: "The-Willy-Warmerjpg.jpg",
        name: "Willi Warmer | 3,99€",
        beschreibung: "Für warme Gedanken"
    };
    let unicornmeat = {
        bild: "Unicorn_Meat.jpg",
        name: "Einhorn Fleich | 15,99€",
        beschreibung: "aus eigener Schlachtung"
    };
    let unterhosenspender = {
        bild: "Unterhosenspenderjpg.jpg",
        name: "Unterhosenspender | 9,99€",
        beschreibung: "Wenn der Druck zu groß war"
    };
    let zitronenpresse = {
        bild: "Zitronenpresse.jpg",
        name: "Zitronenpresse | 5,99€",
        beschreibung: "Sauer auf Angie?"
    };
    let kuschelgrillhänchen = {
        bild: "Kuschel-Grillhaehnchen.jpg",
        name: "Kuschel-Grillhaehnchen | 7,50€",
        beschreibung: "Dein bester Freund"
    };
    let blödesachen = [buchpenis, christmas, waschmaschiene, einhorn, federhammer, raumduftp, reisekissen, williwarmer, unicornmeat, unterhosenspender, zitronenpresse, kuschelgrillhänchen];
    for (let i = 0; i < blödesachen.length; i++) {
        let div = document.createElement("div");
        div.id = "divNr" + i;
        document.getElementById("test")?.appendChild(div);
        let img = document.createElement("img");
        img.src = blödesachen[i].bild;
        document.getElementById("divNr" + i)?.appendChild(img);
        let name = document.createElement("p");
        name.innerHTML = blödesachen[i].name;
        document.getElementById("divNr" + i)?.appendChild(name);
        let besch = document.createElement("p");
        besch.innerHTML = blödesachen[i].beschreibung;
        document.getElementById("divNr" + i)?.appendChild(besch);
        let button = document.createElement("button");
        button.innerHTML = "kaufen";
        document.getElementById("divNr" + i)?.appendChild(button);
    }
})(BlödeS || (BlödeS = {}));
//# sourceMappingURL=scriptb.js.map