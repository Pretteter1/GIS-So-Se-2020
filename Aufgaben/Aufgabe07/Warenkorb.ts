namespace Aufgabe7 {

    let preisgesammt: number = 0;

    //Überschrift generieren
    let überschrift: HTMLHeadingElement = document.createElement("h2");
    document.getElementById("überschrifth2")?.appendChild(überschrift);
    überschrift.innerHTML = "Schrott-Warenkorb";







    let gesammtpreis: HTMLAnchorElement = document.createElement("a");
    document.getElementById("alleprodukte")?.appendChild(gesammtpreis);
    gesammtpreis.setAttribute("href", "#");




    let alles: HTMLAnchorElement = document.createElement("a");
    document.getElementById("nochblöderesachen")?.appendChild(alles);
    alles.setAttribute("href", "#");
    alles.innerHTML = "Alles Löschen";
    alles.addEventListener("click", löschenAlles);









    f_divs_generieren();



    //console.log(localStorage.getItem("anzahlArtikel"));

    function f_divs_generieren(): void {
        console.log(localStorage.getItem("anzahlArtikel"));
        //console.log(produkte.length.toString());
        for (let x: number = 0; x <= (parseInt(localStorage.getItem("anzahlArtikel")!) - 1 ); x++) {

            let newDiv1: HTMLDivElement = document.createElement("div");
            newDiv1.id = "divNr" + x;
            document.getElementById("test")?.appendChild(newDiv1);
            console.log("test");

            let imgElement1: HTMLImageElement = document.createElement("img");
            imgElement1.src = localStorage.getItem("artikel_bild" + x)!;
            document.getElementById("divNr" + x)?.appendChild(imgElement1);

            let namePrice1: HTMLParagraphElement = document.createElement("p");
            namePrice1.innerHTML = localStorage.getItem("artikel_name" + x)!;
            document.getElementById("divNr" + x)?.appendChild(namePrice1);

            let desc1: HTMLParagraphElement = document.createElement("p");
            desc1.innerHTML = localStorage.getItem("artikel_beschreibung" + x)!;
            document.getElementById("divNr" + x)?.appendChild(desc1);

            let kaufen1: HTMLButtonElement = document.createElement("button");
            kaufen1.innerHTML = "löschen | " + `${localStorage.getItem("artikel_preis" + x)!.toLocaleString()}€`;
            document.getElementById("divNr" + x)?.appendChild(kaufen1);
            kaufen1.setAttribute("button", x.toLocaleString());


            preisgesammt = preisgesammt + parseFloat((localStorage.getItem("artikel_preis" + x)!));
            kaufen1.addEventListener("click", löschenArtikel);


        }

        gesammtpreis.innerHTML = `${preisgesammt.toLocaleString()}€`;

    }
    function löschenArtikel(_element: Event): void {

        let target: HTMLElement = (<HTMLElement>_element.target);
        

        
        
        let preisbutton: string = target.innerHTML.substring(10);
        
        

        let indexButton: string = (<HTMLDivElement>(<HTMLElement>_element.currentTarget).parentElement).getAttribute("id")!;
        let nummerAusID: string = indexButton.substring(5);
        let index: number = parseFloat(nummerAusID);
        
        preisgesammt = preisgesammt - parseFloat( preisbutton)  ;
        document.getElementById("divNr" + index)?.remove();

        //console.log(preisgesammt); // - document.getElementById("divNr" + index).getItem; 
        gesammtpreis.innerHTML = `${preisgesammt.toFixed(2)}€`;

        if (preisgesammt <= 0) {
            gesammtpreis.innerHTML = `${0}€`;
        }


    }
    function löschenAlles(_element: Event): void {

        for (let x: number = 0; x <= (parseInt(localStorage.getItem("anzahlArtikel")!) - 1); x++) {
            document.getElementById("divNr" + x)?.remove();

        }
        localStorage.clear();
        gesammtpreis.innerHTML = `${0}€`;

    }



}
