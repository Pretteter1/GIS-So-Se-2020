"use strict";
var Hauptseite;
(function (Hauptseite) {
    let preisgesammt = 0;
    //Header generieren
    let alles = document.createElement("a");
    document.getElementById("alleprodukte")?.appendChild(alles);
    alles.setAttribute("href", "#");
    alles.innerHTML = "Alle Produkte";
    let blödeSachen = document.createElement("a");
    document.getElementById("blödesachen")?.appendChild(blödeSachen);
    blödeSachen.setAttribute("href", "#");
    blödeSachen.innerHTML = "Blöde Sachen";
    let nochBlödereSachen = document.createElement("a");
    document.getElementById("nochblöderesachen")?.appendChild(nochBlödereSachen);
    nochBlödereSachen.setAttribute("href", "#");
    nochBlödereSachen.innerHTML = "Noch Blödere Sachen";
    /*
     for (let i: number = 0; i < produkte.length; i++) {
         f_divs_generieren(i);
 
     }
 */
    // divs generieren
    function f_divs_generieren(x) {
        let newDiv1 = document.createElement("div");
        newDiv1.id = "divNr" + x;
        document.getElementById("test")?.appendChild(newDiv1);
        let imgElement1 = document.createElement("img");
        imgElement1.src = Hauptseite.produkte[x].bild;
        document.getElementById("divNr" + x)?.appendChild(imgElement1);
        let namePrice1 = document.createElement("p");
        namePrice1.innerHTML = Hauptseite.produkte[x].name;
        document.getElementById("divNr" + x)?.appendChild(namePrice1);
        let desc1 = document.createElement("p");
        desc1.innerHTML = Hauptseite.produkte[x].beschreibung;
        document.getElementById("divNr" + x)?.appendChild(desc1);
        let kaufen1 = document.createElement("button");
        kaufen1.innerHTML = `${Hauptseite.produkte[x].preis.toLocaleString()}€`;
        document.getElementById("divNr" + x)?.appendChild(kaufen1);
        kaufen1.setAttribute("trouble", `${Hauptseite.produkte[x].preis}`);
        kaufen1.addEventListener("click", ZumWarenkorbHinzufügen);
    }
    //Waarenkorb Zähler
    let zählerW = 1;
    let nummerW = document.createElement("span");
    function ZumWarenkorbHinzufügen(_element) {
        nummerW.innerHTML = zählerW.toString();
        nummerW.setAttribute("id", "hochzählen");
        document.getElementById("header")?.appendChild(nummerW);
        zählerW++;
        let target = _element.target;
        let preisindex = parseFloat(target.getAttribute("trouble"));
        preisgesammt = preisgesammt + preisindex;
        console.log(preisgesammt);
    }
    alles.addEventListener("click", f_alles);
    blödeSachen.addEventListener("click", f_blödesachen);
    nochBlödereSachen.addEventListener("click", f_nochblöderesachen);
    function f_alles() {
        let entfernen = document.querySelector("#test");
        entfernen.innerHTML = "";
        //location.reload();
        for (let i = 0; i < Hauptseite.produkte.length; i++) {
            f_divs_generieren(i);
        }
    }
    function f_blödesachen() {
        let entfernen = document.querySelector("#test");
        entfernen.innerHTML = "";
        //location.reload();
        let x = 1;
        for (let i = 0; i < Hauptseite.produkte.length; i++) {
            if (Hauptseite.produkte[i].kategorie == "BlödeSachen") {
                f_divs_generieren(x);
                x++;
            }
        }
    }
    function f_nochblöderesachen() {
        let entfernen = document.querySelector("#test");
        entfernen.innerHTML = "";
        //location.reload();
        let x = 1;
        for (let i = 0; i < Hauptseite.produkte.length; i++) {
            if (Hauptseite.produkte[i].kategorie == "NochBlödereSachen") {
                f_divs_generieren(x);
                x++;
            }
        }
    }
    //Suchleiste
    //let searchBar: HTMLElement = <HTMLElement> <unknown>document.getElementsByClassName("suchen");
    // searchBar.addEventListener("keyup", handleSearch);
})(Hauptseite || (Hauptseite = {}));
//# sourceMappingURL=script_aktionen.js.map