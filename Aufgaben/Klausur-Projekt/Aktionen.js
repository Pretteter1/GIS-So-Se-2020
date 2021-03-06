"use strict";
var Klausur;
(function (Klausur) {
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD)
        localStorage.clear();
    let preisgesammt = 0;
    let nummerkugeln = 0;
    let maxkugeln = 3;
    localStorage.setItem("W_oder_B", ("Waffel"));
    localStorage.setItem("anzahlArtikel", (0).toString());
    console.log(Klausur.produkte);
    let home = document.createElement("a");
    let shop = document.createElement("a");
    let ware = document.createElement("a");
    let verkäufer = document.createElement("a");
    let eis = document.createElement("img");
    let zählerW = 1;
    let nummerW = document.createElement("span");
    Klausur.produkteLocal = [];
    headerGenerieren();
    generateeisArtikle();
    function headerGenerieren() {
        //let alles: HTMLAnchorElement = document.createElement("a");
        document.getElementById("home")?.appendChild(home);
        home.setAttribute("href", "#");
        home.innerHTML = "Becher/Waffel";
        document.getElementById("shop")?.appendChild(shop);
        shop.setAttribute("href", "#");
        shop.innerHTML = "<b>Eiskugeln</b>";
        document.getElementById("ware")?.appendChild(ware);
        ware.setAttribute("href", "#");
        ware.innerHTML = "Toppings";
        document.getElementById("verkäufer")?.appendChild(verkäufer);
        verkäufer.setAttribute("href", "#");
        verkäufer.innerHTML = "Eis kaufen!!!!!";
        document.getElementById("eis")?.appendChild(eis);
        eis.setAttribute("src", "images/Waffel.png");
        eis.id = "Waffel";
    }
    Klausur.headerGenerieren = headerGenerieren;
    function f_Eiswaffel_genereiren() {
        nummerkugeln++;
        let x = Klausur.produkteLocal.length;
        if (f_isttoppingdrinne() && x == 1) {
            f_gehtnicht();
        }
        else if (nummerkugeln <= maxkugeln) {
            let x = Klausur.produkteLocal.length - 1;
            let newDiv1 = document.createElement("div");
            newDiv1.id = "kugelNr" + x;
            document.getElementById("zusatz")?.appendChild(newDiv1);
            let imgElement1 = document.createElement("img");
            imgElement1.src = localStorage.getItem("artikel_bild" + x);
            document.getElementById("kugelNr" + x)?.appendChild(imgElement1);
            if (f_isttoppingdrinne())
                f_zuviele();
        }
        if (nummerkugeln == maxkugeln)
            f_topping();
    }
    async function generatetopingArtikle() {
        //console.log("test");
        await Klausur.daten("Daten.json");
        for (let i = 0; i < Klausur.produkte.length; i++) {
            if (Klausur.produkte[i].kategorie == "Topping") {
                f_divs_generieren(i);
            }
        }
    }
    Klausur.generatetopingArtikle = generatetopingArtikle;
    async function generateeisArtikle() {
        await Klausur.daten("Daten.json");
        for (let i = 0; i < Klausur.produkte.length; i++) {
            if (Klausur.produkte[i].kategorie == "Fruchteis") {
                f_divs_generieren(i);
            }
        }
    }
    Klausur.generateeisArtikle = generateeisArtikle;
    function f_divs_generieren(x) {
        let newDiv1 = document.createElement("div");
        newDiv1.id = "divNr" + x;
        document.getElementById("test")?.appendChild(newDiv1);
        let imgElement1 = document.createElement("img");
        imgElement1.src = Klausur.produkte[x].bild;
        document.getElementById("divNr" + x)?.appendChild(imgElement1);
        let namePrice1 = document.createElement("p");
        namePrice1.innerHTML = Klausur.produkte[x].name;
        document.getElementById("divNr" + x)?.appendChild(namePrice1);
        let desc1 = document.createElement("p");
        desc1.innerHTML = Klausur.produkte[x].beschreibung;
        document.getElementById("divNr" + x)?.appendChild(desc1);
        let kaufen1 = document.createElement("button");
        kaufen1.innerHTML = `${Klausur.produkte[x].preis.toLocaleString()}€`;
        document.getElementById("divNr" + x)?.appendChild(kaufen1);
        kaufen1.setAttribute("trouble", `${Klausur.produkte[x].preis}`);
        kaufen1.addEventListener("click", ZumWarenkorbHinzufügen);
        kaufen1.addEventListener("click", f_Eiswaffel_genereiren);
    }
    Klausur.f_divs_generieren = f_divs_generieren;
    home.addEventListener("click", f_home);
    shop.addEventListener("click", f_shop);
    ware.addEventListener("click", f_topping);
    verkäufer.addEventListener("click", f_bestellung);
    function f_shop() {
        home.innerHTML = "Becher/Waffel";
        shop.innerHTML = "<b>Eiskugeln</b>";
        ware.innerHTML = "Toppings";
        verkäufer.innerHTML = "Eis kaufen!!!!!";
        let entfernen = document.querySelector("#test");
        entfernen.innerHTML = "";
        if (f_isttoppingdrinne())
            f_zuviele();
        else if (nummerkugeln <= maxkugeln) {
            generateeisArtikle();
        }
        else
            f_zuviele();
    }
    function f_home() {
        if (eis.id == "Waffel") {
            eis.setAttribute("src", "images/Becher.png");
            eis.id = "Becher";
        }
        else {
            eis.setAttribute("src", "images/Waffel.png");
            eis.id = "Waffel";
        }
        let woderb = "";
        if (eis.id == "Waffel")
            woderb = "Waffel";
        else
            woderb = "Becher";
        localStorage.setItem("W_oder_B", (woderb));
    }
    function f_topping() {
        home.innerHTML = "Becher/Waffel";
        shop.innerHTML = "Eiskugeln";
        ware.innerHTML = "<b>Toppings</b>";
        verkäufer.innerHTML = "Eis kaufen!!!!!";
        let entfernen = document.querySelector("#test");
        entfernen.innerHTML = "";
        if (f_isttoppingdrinne())
            f_zuviele();
        else {
            generatetopingArtikle();
            nummerkugeln--;
        }
    }
    function f_bestellung() {
        home.innerHTML = "Becher/Waffel";
        shop.innerHTML = "Eiskugeln";
        ware.innerHTML = "Toppings";
        verkäufer.innerHTML = "<b>Eis kaufen!!!!!</b>";
        if (Klausur.produkteLocal.length == 0) {
            f_gehtnicht();
        }
        else {
            let entfernen = document.querySelector("#test");
            entfernen.innerHTML = "";
            entfernen.id = "bestellung";
            entfernen.innerHTML = "" + "<form action=https://pretteter.herokuapp.com method=GET>" + "<h2>" + "Bestellung" + "</h2>"
                + "<hr>" +
                "<p name= Preis>" + preisgesammt + "€" + "</p>" +
                "<hr>" +
                "<input class=Formular_Daten type=text name=Vorname id=Vname  placeholder=Vorname> <br>" +
                "<input class=Formular_Daten type=text name=Nachname id=Nname  placeholder=Nachname>" +
                "<br>" +
                "<br>" +
                "<input class=Formular_Daten type=text name=Adresse id=Adresse  placeholder=Adresse>" +
                "<br>" +
                "<br>" +
                "<p id=Copie>Durch das Absenden dieser Nachricht <br> akzeptiere ich den Datenschutz</p>" +
                "<p id = bestelldaten>" +
                "<input type=text name=Preis id=bpreis > <br>" +
                "<input type=text name=Gefäß id=bgefäß > <br>" +
                "</form>" +
                "<button class=senden id=server > Bestellung abschicken</button >" +
                "<br>" +
                "<p id = nochEintragen> </p>" +
                "<br>" +
                "<button class=senden id=senden > Neuer Versuch</button >";
            document.getElementById("senden")?.addEventListener("click", reload);
            f_inputsGenerieren();
            let anServer = document.getElementById("server");
            anServer.addEventListener("click", senden);
            shop.removeEventListener("click", f_shop);
            ware.removeEventListener("click", f_topping);
            verkäufer.removeEventListener("click", f_bestellung);
        }
    }
    function f_inputsGenerieren() {
        let gesammtpreis = document.getElementById("bpreis");
        gesammtpreis.value = preisgesammt.toString();
        let gefäß = document.getElementById("bgefäß");
        gefäß.value = localStorage.getItem("W_oder_B");
        for (let i = 1; i <= maxkugeln; i++) {
            let name = document.createElement("input");
            name.id = "name" + i;
            name.setAttribute("name", "Kugel" + i);
            document.getElementById("bestelldaten")?.appendChild(name);
            name.value = localStorage.getItem("artikel_name" + (i - 1));
        }
        let name = document.createElement("input");
        name.id = "topping";
        name.setAttribute("name", "Topping");
        document.getElementById("bestelldaten")?.appendChild(name);
        name.value = localStorage.getItem("artikel_name" + maxkugeln);
    }
    function f_zuviele() {
        let entfernen = document.querySelector("#test");
        entfernen.innerHTML = "";
        let newDiv0 = document.createElement("span");
        newDiv0.id = "löschenText";
        document.getElementById("test")?.appendChild(newDiv0);
        newDiv0.innerHTML = "Mehr Kugeln gehen nicht";
        //entfernen.id = "zuvielekugeln";
        let newDiv1 = document.createElement("span");
        newDiv1.id = "löschen";
        document.getElementById("test")?.appendChild(newDiv1);
        //document.getElementById("zuvielekugeln")?.appendChild(newDiv1);
        let kaufen1 = document.createElement("button");
        kaufen1.innerHTML = "Bestellung aufgeben";
        document.getElementById("löschen")?.appendChild(kaufen1);
        // document.getElementById("löschen")?.appendChild(kaufen1);
        kaufen1.addEventListener("click", f_bestellung);
    }
    function ZumWarenkorbHinzufügen(_element) {
        nummerW.innerHTML = zählerW.toString();
        nummerW.setAttribute("id", "hochzählen");
        document.getElementById("header")?.appendChild(nummerW);
        zählerW++;
        let target = _element.target;
        let preisindex = parseFloat(target.getAttribute("trouble"));
        preisgesammt = preisgesammt + preisindex;
        let indexButton = _element.currentTarget.parentElement.getAttribute("id");
        let nummerAusID = indexButton.substring(5);
        let index = parseFloat(nummerAusID);
        //console.log(index);
        Klausur.produkteLocal.push(Klausur.produkte[index]);
        localStorage.setItem("artikel_name" + (Klausur.produkteLocal.length - 1), Klausur.produkte[index].name);
        localStorage.setItem("artikel_preis" + (Klausur.produkteLocal.length - 1), Klausur.produkte[index].preis.toString());
        localStorage.setItem("artikel_beschreibung" + (Klausur.produkteLocal.length - 1), Klausur.produkte[index].beschreibung);
        localStorage.setItem("artikel_bild" + (Klausur.produkteLocal.length - 1), Klausur.produkte[index].bild);
        localStorage.setItem("artikel_kategorie" + (Klausur.produkteLocal.length - 1), Klausur.produkte[index].kategorie);
        localStorage.setItem("anzahlArtikel", (Klausur.produkteLocal.length).toString());
    }
    function f_isttoppingdrinne() {
        let x = false;
        for (let i = 0; i <= Klausur.produkteLocal.length - 1; i++) {
            if (localStorage.getItem("artikel_kategorie" + i) == "Topping") {
                x = true;
            }
            else
                x = false;
        }
        return x;
    }
    function f_gehtnicht() {
        let entfernen = document.querySelector("#test");
        entfernen.innerHTML = "Unglütige Eingabe";
        setTimeout(() => { location.reload(true); }, 1000);
        localStorage.clear();
    }
    function reload() {
        location.reload(true);
        localStorage.clear();
    }
    async function senden() {
        let vName = document.getElementById("Vname");
        let nName = document.getElementById("Nname");
        let adresse = document.getElementById("Adresse");
        console.log(vName.value.length);
        if (vName.value != "" && nName.value != "" && adresse.value != "") {
            if (vName.value.length < 18 && nName.value.length < 18 && adresse.value.length < 18) {
                let form = new FormData(document.forms[0]);
                let query = new URLSearchParams(form);
                let url = "https://pretteter.herokuapp.com";
                url += "/hinzufuegen" + "?" + query.toString();
                await fetch(url);
                danke();
            }
            else {
                let warnung = document.getElementById("nochEintragen");
                warnung.innerHTML = "Es sind zu viele Zeichen";
                let anServer = document.getElementById("server");
                anServer.addEventListener("click", senden);
            }
        }
        else {
            let warnung = document.getElementById("nochEintragen");
            warnung.innerHTML = "Es fehlen Daten";
            let anServer = document.getElementById("server");
            anServer.addEventListener("click", senden);
        }
    }
    function danke() {
        let entfernen = document.querySelector("#bestellung");
        entfernen.innerHTML = "";
        entfernen.innerHTML = "<h2>Danke für die Bestellung</h2>" +
            "<br>" +
            "<br>" +
            "<button class=senden id=senden > Neue Bestellung?</button >";
        document.getElementById("senden")?.addEventListener("click", reload);
    }
})(Klausur || (Klausur = {}));
//# sourceMappingURL=Aktionen.js.map