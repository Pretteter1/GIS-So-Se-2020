"use strict";
var Hauptseite;
(function (Hauptseite) {
    //Startseite divs generieren
    for (let i = 0; i < Hauptseite.blödesachen.length; i++) {
        let newDiv1 = document.createElement("div");
        newDiv1.id = "divNr" + i;
        document.getElementById("test")?.appendChild(newDiv1);
        let imgElement1 = document.createElement("img");
        imgElement1.src = Hauptseite.blödesachen[i].bild;
        document.getElementById("divNr" + i)?.appendChild(imgElement1);
        let namePrice1 = document.createElement("p");
        namePrice1.innerHTML = `${Hauptseite.blödesachen[i].name} ${Hauptseite.blödesachen[i].preis.toLocaleString().fixed()}€`;
        document.getElementById("divNr" + i)?.appendChild(namePrice1);
        let desc1 = document.createElement("p");
        desc1.innerHTML = Hauptseite.blödesachen[i].beschreibung;
        document.getElementById("divNr" + i)?.appendChild(desc1);
        let kaufen1 = document.createElement("button");
        kaufen1.innerHTML = "kaufen";
        document.getElementById("divNr" + i)?.appendChild(kaufen1);
    }
    //Blöde_Sachen divs generieren
    for (let i = 0; i < Hauptseite.nochblöderesachen.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "divNr" + i;
        document.getElementById("test")?.appendChild(newDiv);
        let imgElement = document.createElement("img");
        imgElement.src = Hauptseite.nochblöderesachen[i].bild;
        document.getElementById("divNr" + i)?.appendChild(imgElement);
        let namePrice = document.createElement("p");
        namePrice.innerHTML = `${Hauptseite.nochblöderesachen[i].name} ${Hauptseite.nochblöderesachen[i].preis.toLocaleString().fixed()}€`;
        document.getElementById("divNr" + i)?.appendChild(namePrice);
        let desc = document.createElement("p");
        desc.innerHTML = Hauptseite.nochblöderesachen[i].beschreibung;
        document.getElementById("divNr" + i)?.appendChild(desc);
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "kaufen";
        document.getElementById("divNr" + i)?.appendChild(kaufen);
    }
})(Hauptseite || (Hauptseite = {}));
//# sourceMappingURL=script_aktionen.js.map