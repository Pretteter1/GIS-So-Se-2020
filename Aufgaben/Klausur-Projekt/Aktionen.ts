namespace Klausur {

    let preisgesammt: number = 0;
    let nummerkugeln: number = 0;
    let maxkugeln: number = 3;

    localStorage.setItem("W_oder_B", ("Waffel"));
    localStorage.setItem("anzahlArtikel", (0).toString());


    let home: HTMLAnchorElement = document.createElement("a");
    let shop: HTMLAnchorElement = document.createElement("a");
    let ware: HTMLAnchorElement = document.createElement("a");
    let verkäufer: HTMLAnchorElement = document.createElement("a");

    let eis: HTMLImageElement = document.createElement("img");

    let zählerW: number = 1;
    let nummerW: HTMLSpanElement = document.createElement("span");
    export let produkteLocal: Produkte[] = [];

    headerGenerieren();

    generateeisArtikle();


    export function headerGenerieren(): void {

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



    function f_Eiswaffel_genereiren(): void {
        nummerkugeln++;
        let x: number = produkteLocal.length;
        if (f_isttoppingdrinne() && x == 1) {
            f_gehtnicht();


        }

        else if (nummerkugeln <= maxkugeln) {
            let x: number = produkteLocal.length - 1;

            let newDiv1: HTMLDivElement = document.createElement("div");
            newDiv1.id = "kugelNr" + x;
            document.getElementById("zusatz")?.appendChild(newDiv1);

            let imgElement1: HTMLImageElement = document.createElement("img");
            imgElement1.src = localStorage.getItem("artikel_bild" + x)!;
            document.getElementById("kugelNr" + x)?.appendChild(imgElement1);

            if (f_isttoppingdrinne())
                f_zuviele();


        }

        if (nummerkugeln == maxkugeln)
            f_topping();
    }






    export async function generatetopingArtikle(): Promise<void> {
        //console.log("test");

        await daten("Daten.json");
        for (let i: number = 0; i < produkte.length; i++) {

            if (produkte[i].kategorie == "Topping") {


                f_divs_generieren(i);
            }


        }

    }

    export async function generateeisArtikle(): Promise<void> {


        await daten("Daten.json");
        for (let i: number = 0; i < produkte.length; i++) {

            if (produkte[i].kategorie == "Fruchteis") {


                f_divs_generieren(i);
            }


        }

    }





    export function f_divs_generieren(x: number): void {


        let newDiv1: HTMLDivElement = document.createElement("div");
        newDiv1.id = "divNr" + x;
        document.getElementById("test")?.appendChild(newDiv1);

        let imgElement1: HTMLImageElement = document.createElement("img");
        imgElement1.src = produkte[x].bild;
        document.getElementById("divNr" + x)?.appendChild(imgElement1);

        let namePrice1: HTMLParagraphElement = document.createElement("p");
        namePrice1.innerHTML = produkte[x].name;
        document.getElementById("divNr" + x)?.appendChild(namePrice1);

        let desc1: HTMLParagraphElement = document.createElement("p");
        desc1.innerHTML = produkte[x].beschreibung;
        document.getElementById("divNr" + x)?.appendChild(desc1);

        let kaufen1: HTMLButtonElement = document.createElement("button");
        kaufen1.innerHTML = `${produkte[x].preis.toLocaleString()}€`;
        document.getElementById("divNr" + x)?.appendChild(kaufen1);



        kaufen1.setAttribute("trouble", `${produkte[x].preis}`);

        kaufen1.addEventListener("click", ZumWarenkorbHinzufügen);
        kaufen1.addEventListener("click", f_Eiswaffel_genereiren);








    }



    home.addEventListener("click", f_home);
    shop.addEventListener("click", f_shop);
    ware.addEventListener("click", f_topping);
    verkäufer.addEventListener("click", f_bestellung);


    function f_shop(): void {

        home.innerHTML = "Becher/Waffel";
        shop.innerHTML = "<b>Eiskugeln</b>";
        ware.innerHTML = "Toppings";
        verkäufer.innerHTML = "Eis kaufen!!!!!";


        let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#test"));

        entfernen.innerHTML = "";
        if (f_isttoppingdrinne())
            f_zuviele();
        else
            if (nummerkugeln <= maxkugeln) {

                generateeisArtikle();

            } else
                f_zuviele();


    }

    function f_home(): void {




        if (eis.id == "Waffel") {

            eis.setAttribute("src", "images/Becher.png");
            eis.id = "Becher";
        }

        else {
            eis.setAttribute("src", "images/Waffel.png");
            eis.id = "Waffel";
        }

        let woderb: string = "";
        if (eis.id == "Waffel")
            woderb = "Waffel";
        else
            woderb = "Becher";



        localStorage.setItem("W_oder_B", (woderb));

    }

    function f_topping(): void {

        home.innerHTML = "Becher/Waffel";
        shop.innerHTML = "Eiskugeln";
        ware.innerHTML = "<b>Toppings</b>";
        verkäufer.innerHTML = "Eis kaufen!!!!!";

        let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#test"));

        entfernen.innerHTML = "";

        if (f_isttoppingdrinne())
            f_zuviele();
        else {
            generatetopingArtikle();
            nummerkugeln--;
        }

    }

    function f_bestellung(): void {

        home.innerHTML = "Becher/Waffel";
        shop.innerHTML = "Eiskugeln";
        ware.innerHTML = "Toppings";
        verkäufer.innerHTML = "<b>Eis kaufen!!!!!</b>";


        if (produkteLocal.length == 0) {
            f_gehtnicht();
        }

        else {

            let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#test"));
            entfernen.innerHTML = "";
            entfernen.id = "bestellung";


            entfernen.innerHTML = "" + "<h2>" + "Bestellung" + "</h2>"
                + "<hr>" +
                preisgesammt + "€" +
                "<hr>" +
                "<input class=Formular_Daten type=text id=Vname  placeholder=Vorname> <br>" +
                "<input class=Formular_Daten type=text id=Nname  placeholder=Nachname>" +
                "<br>" +
                "<br>" +
                "<input class=Formular_Daten type=text id=Adresse  placeholder=Adresse>" +
                "<br>" +
                "<br>" +
                "<p id=Copie>Durch das Absenden dieser Nachricht <br> akzeptiere ich den Datenschutz</p>" +
                "<br>" +

                "<button class=senden id=absenden > Bestellung abschicken</button >" +
                "<br>" +
                "<br>" +
                "<button class=senden id=senden > Neuer Versuch</button >" +

                "<br>" +
                "<br>"
                ;


            document.getElementById("senden")?.addEventListener("click", reload);
            let btnJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("absenden");
            btnJSON.addEventListener("click", JSON);

            home.removeEventListener("click", f_home);
            shop.removeEventListener("click", f_shop);
            ware.removeEventListener("click", f_topping);
            verkäufer.removeEventListener("click", f_bestellung);
        }

    }



    function f_zuviele(): void {

        let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#test"));
        entfernen.innerHTML = "";

        let newDiv0: HTMLSpanElement = document.createElement("span");
        newDiv0.id = "löschenText";
        document.getElementById("test")?.appendChild(newDiv0);
        newDiv0.innerHTML = "Mehr Kugeln gehen nicht";

        //entfernen.id = "zuvielekugeln";

        let newDiv1: HTMLSpanElement = document.createElement("span");
        newDiv1.id = "löschen";
        document.getElementById("test")?.appendChild(newDiv1);
        //document.getElementById("zuvielekugeln")?.appendChild(newDiv1);

        let kaufen1: HTMLButtonElement = document.createElement("button");
        kaufen1.innerHTML = "Neuer Versuch";
        document.getElementById("löschen")?.appendChild(kaufen1);
        // document.getElementById("löschen")?.appendChild(kaufen1);

        kaufen1.addEventListener("click", reload);

    }






    function ZumWarenkorbHinzufügen(_element: Event): void {




        nummerW.innerHTML = zählerW.toString();
        nummerW.setAttribute("id", "hochzählen");
        document.getElementById("header")?.appendChild(nummerW);

        zählerW++;

        let target: HTMLElement = (<HTMLElement>_element.target);
        let preisindex: number = parseFloat(target.getAttribute("trouble")!);

        preisgesammt = preisgesammt + preisindex;


        let indexButton: string = (<HTMLDivElement>(<HTMLElement>_element.currentTarget).parentElement).getAttribute("id")!;

        let nummerAusID: string = indexButton.substring(5);
        let index: number = parseFloat(nummerAusID);
        //console.log(index);



        produkteLocal.push(produkte[index]);
        localStorage.setItem("artikel_name" + (produkteLocal.length - 1), produkte[index].name);
        localStorage.setItem("artikel_preis" + (produkteLocal.length - 1), produkte[index].preis.toString());
        localStorage.setItem("artikel_beschreibung" + (produkteLocal.length - 1), produkte[index].beschreibung);
        localStorage.setItem("artikel_bild" + (produkteLocal.length - 1), produkte[index].bild);
        localStorage.setItem("artikel_kategorie" + (produkteLocal.length - 1), produkte[index].kategorie);
        localStorage.setItem("anzahlArtikel", (produkteLocal.length).toString());




    }

    function f_isttoppingdrinne(): boolean {

        let x: boolean = false;
        for (let i: number = 0; i <= produkteLocal.length - 1; i++) {
            if (localStorage.getItem("artikel_kategorie" + i) == "Topping") {
                x = true;

            }
            else
                x = false;
        }
        return x;
    }

    function f_gehtnicht(): void {

        let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#test"));
        entfernen.innerHTML = "Unglütige Eingabe";
        setTimeout(() => { location.reload(true); }, 1000);
        localStorage.clear();
    }

    function reload(): void {

        location.reload(true);
        localStorage.clear();
    }

    async function JSON(): Promise<void> {
        
        let formData: FormData;
        formData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://pretteter.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url = url + "/json?" + query.toString();
        console.log(url);
        
        let antwort: Response = await fetch(url);
        let json: string = await antwort.json();
        console.log(json);
    }

}
