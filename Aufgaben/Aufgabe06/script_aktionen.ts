namespace Hauptseite {

    let preisgesammt: number = 0;

    //Header generieren

    let alles: HTMLAnchorElement = document.createElement("a");
    document.getElementById("alleprodukte")?.appendChild(alles);
    alles.setAttribute("href", "#");
    alles.innerHTML = "Alle Produkte";


    let blödeSachen: HTMLAnchorElement = document.createElement("a");
    document.getElementById("blödesachen")?.appendChild(blödeSachen);
    blödeSachen.setAttribute("href", "#");
    blödeSachen.innerHTML = "Blöde Sachen";

    let nochBlödereSachen: HTMLAnchorElement = document.createElement("a");
    document.getElementById("nochblöderesachen")?.appendChild(nochBlödereSachen);
    nochBlödereSachen.setAttribute("href", "#");
    nochBlödereSachen.innerHTML = "Noch Blödere Sachen";

   
    for (let i: number = 0; i < produkte.length; i++) {
        f_divs_generieren(i);

    }

    // divs generieren

    function f_divs_generieren(x: number): void {
        

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

    function ZumWarenkorbHinzufügen(_element: Event): void {
        nummerW.innerHTML = zählerW.toString();
        nummerW.setAttribute("id", "hochzählen");
        document.getElementById("header")?.appendChild(nummerW);

        zählerW++;

        let target: HTMLElement = (<HTMLElement>_element.target);
        let preisindex: number = parseFloat(target.getAttribute("trouble")!);

        preisgesammt = preisgesammt + preisindex;

        console.log(preisgesammt);
    }



    alles.addEventListener("click", f_alles);
    blödeSachen.addEventListener("click", f_blödesachen);
    nochBlödereSachen.addEventListener("click", f_nochblöderesachen);

    function f_alles(): void {

        let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#test"));
        entfernen.innerHTML = "";

        //location.reload();
        for (let i: number = 0; i < produkte.length; i++) {
        
            f_divs_generieren(i);

        }

    }

    function f_blödesachen(): void {

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

    







    //Suchleiste
    //let searchBar: HTMLElement = <HTMLElement> <unknown>document.getElementsByClassName("suchen");
    // searchBar.addEventListener("keyup", handleSearch);

}



