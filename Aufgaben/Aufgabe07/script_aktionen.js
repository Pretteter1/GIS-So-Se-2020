"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    let preisgesammt = 0;
    //Header generieren
    let alles = document.createElement("a");
    let blödeSachen = document.createElement("a");
    let nochBlödereSachen = document.createElement("a");
    headerGenerieren();
    function headerGenerieren() {
        //let alles: HTMLAnchorElement = document.createElement("a");
        document.getElementById("alleprodukte")?.appendChild(alles);
        alles.setAttribute("href", "#");
        alles.innerHTML = "Alle Produkte";
        //let blödeSachen: HTMLAnchorElement = document.createElement("a");
        document.getElementById("blödesachen")?.appendChild(blödeSachen);
        blödeSachen.setAttribute("href", "#");
        blödeSachen.innerHTML = "Blöde Sachen";
        //let nochBlödereSachen: HTMLAnchorElement = document.createElement("a");
        document.getElementById("nochblöderesachen")?.appendChild(nochBlödereSachen);
        nochBlödereSachen.setAttribute("href", "#");
        nochBlödereSachen.innerHTML = "Noch Blödere Sachen";
    }
    Aufgabe7.headerGenerieren = headerGenerieren;
    //Überschrift generieren
    let überschrift = document.createElement("h2");
    document.getElementById("überschrifth2")?.appendChild(überschrift);
    überschrift.innerHTML = "Herzlich Willkommen beim Schrott-Händler";
    generateArtikle();
    async function generateArtikle() {
        //console.log("test");
        await Aufgabe7.daten("package-lock.json");
        for (let i = 0; i < Aufgabe7.produkte.length; i++) {
            f_divs_generieren(i);
        }
    }
    Aufgabe7.generateArtikle = generateArtikle;
    // divs generieren
    function f_divs_generieren(x) {
        let newDiv1 = document.createElement("div");
        newDiv1.id = "divNr" + x;
        document.getElementById("test")?.appendChild(newDiv1);
        let imgElement1 = document.createElement("img");
        imgElement1.src = Aufgabe7.produkte[x].bild;
        document.getElementById("divNr" + x)?.appendChild(imgElement1);
        let namePrice1 = document.createElement("p");
        namePrice1.innerHTML = Aufgabe7.produkte[x].name;
        document.getElementById("divNr" + x)?.appendChild(namePrice1);
        let desc1 = document.createElement("p");
        desc1.innerHTML = Aufgabe7.produkte[x].beschreibung;
        document.getElementById("divNr" + x)?.appendChild(desc1);
        let kaufen1 = document.createElement("button");
        kaufen1.innerHTML = `${Aufgabe7.produkte[x].preis.toLocaleString()}€`;
        document.getElementById("divNr" + x)?.appendChild(kaufen1);
        kaufen1.setAttribute("trouble", `${Aufgabe7.produkte[x].preis}`);
        kaufen1.addEventListener("click", ZumWarenkorbHinzufügen);
    }
    Aufgabe7.f_divs_generieren = f_divs_generieren;
    //Waarenkorb Zähler
    let zählerW = 1;
    let nummerW = document.createElement("span");
    Aufgabe7.produkteLocal = [];
    function ZumWarenkorbHinzufügen(_element) {
        nummerW.innerHTML = zählerW.toString();
        nummerW.setAttribute("id", "hochzählen");
        document.getElementById("header")?.appendChild(nummerW);
        zählerW++;
        let target = _element.target;
        let preisindex = parseFloat(target.getAttribute("trouble"));
        preisgesammt = preisgesammt + preisindex;
        console.log(preisgesammt);
        //console.log(divNummer);
        let indexButton = _element.currentTarget.parentElement.getAttribute("id");
        // console.log(indexButton);
        let nummerAusID = indexButton.substring(5);
        let index = parseFloat(nummerAusID);
        //console.log(index);
        Aufgabe7.produkteLocal.push(Aufgabe7.produkte[index]);
        localStorage.setItem("artikel_name" + (Aufgabe7.produkteLocal.length - 1), Aufgabe7.produkte[index].name);
        localStorage.setItem("artikel_preis" + (Aufgabe7.produkteLocal.length - 1), Aufgabe7.produkte[index].preis.toString());
        localStorage.setItem("artikel_beschreibung" + (Aufgabe7.produkteLocal.length - 1), Aufgabe7.produkte[index].beschreibung);
        localStorage.setItem("artikel_bild" + (Aufgabe7.produkteLocal.length - 1), Aufgabe7.produkte[index].bild);
        localStorage.setItem("anzahlArtikel", (Aufgabe7.produkteLocal.length).toString());
        //console.log(produkteLocal.length.toString());
    }
    alles.addEventListener("click", f_alles);
    blödeSachen.addEventListener("click", f_blödesachen);
    nochBlödereSachen.addEventListener("click", f_nochblöderesachen);
    function f_alles() {
        überschrift.innerHTML = "Herzlich Willkommen beim Schrott-Händler";
        let entfernen = document.querySelector("#test");
        entfernen.innerHTML = "";
        //location.reload();
        for (let i = 0; i < Aufgabe7.produkte.length; i++) {
            f_divs_generieren(i);
        }
    }
    function f_blödesachen() {
        überschrift.innerHTML = "Blöde Sachen";
        let entfernen = document.querySelector("#test");
        entfernen.innerHTML = "";
        //location.reload();
        for (let i = 0; i < Aufgabe7.produkte.length; i++) {
            if (Aufgabe7.produkte[i].kategorie == "BlödeSachen") {
                f_divs_generieren(i);
                // console.log("Blöd");
            }
        }
    }
    function f_nochblöderesachen() {
        überschrift.innerHTML = "Noch blödere Sachen";
        let entfernen = document.querySelector("#test");
        entfernen.innerHTML = "";
        //location.reload();
        for (let i = 0; i < Aufgabe7.produkte.length; i++) {
            if (Aufgabe7.produkte[i].kategorie == "NochBlödereSachen") {
                f_divs_generieren(i);
                //  console.log("nbl");
            }
        }
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=script_aktionen.js.map