"use strict";
var Hauptseite;
(function (Hauptseite) {
    //Startseite
    let nichts = { bild: "Nichts.jpg", name: "Nichts | ", preis: 5, beschreibung: "Aktion!" };
    let stift = { bild: "Stift.jpg", name: "Stift | ", preis: 1.99, beschreibung: "Aktion!" };
    let dekodino = { bild: "Deko-Dinosaurier.jpg", name: "Deko-Dino | ", preis: 24.00, beschreibung: "Aktion!" };
    //BlödeSachen
    let buchpenis = { bild: "Buch_Penis.jpg", name: "Leben mit einem großen P. | ", preis: 7.50, beschreibung: "Wer kennt nicht das Problem!" };
    let christmas = { bild: "Christmas.jpg", name: "Go Jesus Pulli | ", preis: 7.50, beschreibung: "go Jesus go" };
    let waschmaschiene = { bild: "DVD-Waschmaschiene.jpg", name: "Waschmaschienen DVD | ", preis: 7.50, beschreibung: "Für den perfekten Familienabend" };
    let einhorn = { bild: "DVD-Waschmaschiene.jpg", name: "Waschmaschienen DVD | ", preis: 7.50, beschreibung: "Für den perfekten Familienabend" };
    let federhammer = { bild: "Federhammer.jpg", name: "Federhammer | ", preis: 7.50, beschreibung: "Niet- und Nagelfest" };
    let raumduftp = { bild: "Raumduft_Pizza.jpg", name: "Raumduft Pizza | ", preis: 7.50, beschreibung: "Wie beim Italiener" };
    let reisekissen = { bild: "Reisekissenjpg.jpg", name: "Reisekissen | ", preis: 7.50, beschreibung: "Zählt nicht als Mundschutz" };
    let williwarmer = { bild: "The-Willy-Warmerjpg.jpg", name: "Willi Warmer | ", preis: 7.50, beschreibung: "Für warme Gedanken" };
    let unicornmeat = { bild: "Unicorn_Meat.jpg", name: "Einhorn Fleich | ", preis: 7.50, beschreibung: "aus eigener Schlachtung" };
    let unterhosenspender = { bild: "Unterhosenspenderjpg.jpg", name: "Unterhosenspender | ", preis: 7.50, beschreibung: "Wenn der Druck zu groß war" };
    let zitronenpresse = { bild: "Zitronenpresse.jpg", name: "Zitronenpresse | ", preis: 7.50, beschreibung: "Sauer auf Angie?" };
    let kuschelgrillhänchen = { bild: "Kuschel-Grillhaehnchen.jpg", name: "Kuschel-Grillhaehnchen | ", preis: 7.50, beschreibung: "Dein bester Freund" };
    //NochBlödereSachen
    let buchschiffe = { bild: "Buch-Grossen-Schiffen-ausweichen.jpg", name: "Schiffen ausweichen | ", preis: 7.50, beschreibung: "Schon zig mal benötigt" };
    let buchholz = { bild: "Buch-Holz-identifizieren.jpg", name: "Buch Holz identifizieren | ", preis: 7.50, beschreibung: "Lerne Dein Haus kennen" };
    let puzzle = { bild: "Das-unmoegliche-Puzzle.jpg", name: "Das unmoegliche Puzzle | ", preis: 7.50, beschreibung: "Hat nur Jack Norris lösen können" };
    let plüschkartoffel = { bild: "Ein-Sack-Plueschkartoffeln.jpg", name: "Ein Sack Plüschkartoffeln | ", preis: 7.50, beschreibung: "Geschmack bleibt lange im Mund" };
    let raumspray = { bild: "Raumspray-Huehnersuppejpg.jpg", name: "Raumspray Hühnersuppe | ", preis: 7.50, beschreibung: "Duft wie bei Oma" };
    let rentierauto = { bild: "Rentier-Auto-Deko-Set.jpg", name: "Rentier Auto Deko Set | ", preis: 7.50, beschreibung: "Für Zulassung notwendig" };
    let schaukelpferd = { bild: "Riesen-Schaukelpferd.jpg", name: "Riesen Schaukelpferd | ", preis: 7.50, beschreibung: "Es kommt auf die Größe an" };
    let swattraining = { bild: "SWAT-Trainingjpg.jpg", name: "SWAT Training | ", preis: 7.50, beschreibung: "Jeder Ami hats bereits" };
    let trexshirt = { bild: "T-Rex-Christmas-Sweater.jpg", name: "T-Rex Christmas Sweater | ", preis: 7.50, beschreibung: "Der Hingucker überhaupt" };
    let wcangel = { bild: "WC-Angel-Set.jpg", name: "WC Angel Set | ", preis: 7.50, beschreibung: "Für lange Sitzungen" };
    let tvtestbild = { bild: "TV-Testbilder-aus-aller-Welt.jpg", name: "TV-Testbilder | ", preis: 7.50, beschreibung: "Telekom Standardprogramm" };
    let uranerz = { bild: "Uranerz.jpg", name: "Uranerz | ", preis: 7.50, beschreibung: "Perfekt für Nachbars Fußboden" };
    Hauptseite.blödesachen = [buchpenis, christmas, waschmaschiene, einhorn, federhammer, raumduftp, reisekissen, williwarmer, unicornmeat, unterhosenspender, zitronenpresse, kuschelgrillhänchen];
    Hauptseite.startseite = [nichts, stift, dekodino];
    Hauptseite.nochblöderesachen = [buchschiffe, buchholz, puzzle, plüschkartoffel, raumspray, rentierauto, schaukelpferd, swattraining, trexshirt, tvtestbild, uranerz, wcangel];
    for (let i = 0; i < Hauptseite.startseite.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "divNr" + i;
        document.getElementById("test")?.appendChild(newDiv);
        let imgElement = document.createElement("img");
        imgElement.src = Hauptseite.startseite[i].bild;
        document.getElementById("divNr" + i)?.appendChild(imgElement);
        let namePrice = document.createElement("p");
        namePrice.innerHTML = `${Hauptseite.startseite[i].name} ${Hauptseite.startseite[i].preis.toLocaleString().fixed()}€`;
        document.getElementById("divNr" + i)?.appendChild(namePrice);
        let desc = document.createElement("p");
        desc.innerHTML = Hauptseite.startseite[i].beschreibung;
        document.getElementById("divNr" + i)?.appendChild(desc);
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "kaufen";
        document.getElementById("divNr" + i)?.appendChild(kaufen);
    }
})(Hauptseite || (Hauptseite = {}));
//# sourceMappingURL=script - Kopie.js.map