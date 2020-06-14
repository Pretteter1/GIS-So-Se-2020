namespace Aufgabe7 {

    let preisgesammt: number = 0;
    

    //Header generieren



    let alles:  HTMLAnchorElement = document.createElement("a");
    let blödeSachen: HTMLAnchorElement = document.createElement("a");
    let nochBlödereSachen: HTMLAnchorElement = document.createElement("a");
    headerGenerieren();

    export function headerGenerieren(): void {

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

    //Überschrift generieren
    let überschrift: HTMLHeadingElement = document.createElement("h2");
    document.getElementById("überschrifth2")?.appendChild(überschrift);
    überschrift.innerHTML = "Herzlich Willkommen beim Schrott-Händler";

    generateArtikle();
    export async function generateArtikle(): Promise<void> {
        //console.log("test");
        await daten("package-lock.json");
        for (let i: number = 0; i < produkte.length; i++) {

            f_divs_generieren(i);


        }
    }

    // divs generieren

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

        

    }

    

    //Waarenkorb Zähler
    let zählerW: number = 1;
    let nummerW: HTMLSpanElement = document.createElement("span");
    export let produkteLocal: Produkte[] = [];

    function ZumWarenkorbHinzufügen(_element: Event): void {
        nummerW.innerHTML = zählerW.toString();
        nummerW.setAttribute("id", "hochzählen");
        document.getElementById("header")?.appendChild(nummerW);

        zählerW++;

        let target: HTMLElement = (<HTMLElement>_element.target);
        let preisindex: number = parseFloat(target.getAttribute("trouble")!);

        preisgesammt = preisgesammt + preisindex;

        console.log(preisgesammt);
        //console.log(divNummer);

        
        let indexButton: string = (<HTMLDivElement>(<HTMLElement>_element.currentTarget).parentElement).getAttribute("id")!;
       // console.log(indexButton);
        let nummerAusID: string = indexButton.substring(5) ;
        let index: number = parseFloat(nummerAusID);
        //console.log(index);

        produkteLocal.push(produkte[index]);
        localStorage.setItem("artikel_name" + (produkteLocal.length - 1), produkte[index].name);
        localStorage.setItem("artikel_preis" + (produkteLocal.length - 1), produkte[index].preis.toString());
        localStorage.setItem("artikel_beschreibung" + (produkteLocal.length - 1), produkte[index].beschreibung);
        localStorage.setItem("artikel_bild" + (produkteLocal.length - 1), produkte[index].bild);
        localStorage.setItem("anzahlArtikel", (produkteLocal.length).toString());
        //console.log(produkteLocal.length.toString());
    }



    alles.addEventListener("click", f_alles);
    blödeSachen.addEventListener("click", f_blödesachen);
    nochBlödereSachen.addEventListener("click", f_nochblöderesachen);

    function f_alles(): void {

        überschrift.innerHTML = "Herzlich Willkommen beim Schrott-Händler";

        let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#test"));
        entfernen.innerHTML = "";

        //location.reload();
        for (let i: number = 0; i < produkte.length; i++) {

            f_divs_generieren(i);

        }

    }

    function f_blödesachen(): void {

        überschrift.innerHTML = "Blöde Sachen";

        let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#test"));
        entfernen.innerHTML = "";
        //location.reload();


        for (let i: number = 0; i < produkte.length; i++) {
            if (produkte[i].kategorie == "BlödeSachen") {


                f_divs_generieren(i);


                // console.log("Blöd");
            }

        }
    }

    function f_nochblöderesachen(): void {

        überschrift.innerHTML = "Noch blödere Sachen";

        let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#test"));
        entfernen.innerHTML = "";
        //location.reload();

        for (let i: number = 0; i < produkte.length; i++) {
            if (produkte[i].kategorie == "NochBlödereSachen") {


                f_divs_generieren(i);


                //  console.log("nbl");
            }
        }



    }












}



