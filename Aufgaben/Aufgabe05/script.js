"use strict";
var Hauptseite;
(function (Hauptseite) {
    let nichts = {
        bild: "Nichts.jpg",
        name: "Nichts | 5,00€",
        beschreibung: "Aktion!"
    };
    let stift = {
        bild: "Stift.jpg",
        name: "Stift | 1,50€",
        beschreibung: "Aktion!"
    };
    let dekodino = {
        bild: "Deko-Dinosaurier.jpg",
        name: "Deko-Dino | 25€",
        beschreibung: "Aktion!"
    };
    let startseite = [nichts, stift, dekodino];
    for (let i = 0; i < startseite.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "divNr" + i;
        document.getElementById("test")?.appendChild(newDiv);
        let imgElement = document.createElement("img");
        imgElement.src = startseite[i].bild;
        document.getElementById("divNr" + i)?.appendChild(imgElement);
        let namePrice = document.createElement("p");
        namePrice.innerHTML = startseite[i].name;
        document.getElementById("divNr" + i)?.appendChild(namePrice);
        let desc = document.createElement("p");
        desc.innerHTML = startseite[i].beschreibung;
        document.getElementById("divNr" + i)?.appendChild(desc);
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "kaufen";
        document.getElementById("divNr" + i)?.appendChild(kaufen);
    }
})(Hauptseite || (Hauptseite = {}));
//# sourceMappingURL=script.js.map