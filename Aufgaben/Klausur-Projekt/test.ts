namespace Klausur {

  /* let buttonHinzufügen: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("datenHinzufügen"));
  buttonHinzufügen.addEventListener("click", handleHinzufügen); */

  let buttonAnzeigen: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("datenAnzeigen"));


  buttonAnzeigen.addEventListener("click", handleAnzeigen);

  let produkte: ProdukteV[];

  async function handleAnzeigen(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    let url: string = "https://pretteter.herokuapp.com";
    // let url: string = "http://localhost:8100/";

    url += "/anzeigen" + "?" + query.toString();

    let antwort: Response = await fetch(url, { method: "get" });
    let ausgabe: string = await antwort.text();

    produkte = JSON.parse(ausgabe);
   
    neuAufbauen();
    produkteGenerieren();


    //(<HTMLElement>document.getElementById("serverAntwort")).innerHTML = ausgabe;




  }

  export async function produkteGenerieren(): Promise<void> {


    for (let i: number = 0; i < produkte.length; i++) {

      f_divs_generierenVerkäufer(i);

    }


  }

  export function neuAufbauen(): void {


    let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#body"));
    entfernen.innerHTML = "";


    entfernen.innerHTML = "<h3>Bestellunge löschen </h3>" +
      "<br>" +
      "<form>" +
      "<button type=button id=datenLöschen>Daten löschen</button>" +
      "<br>" +
      "</form>" +
      "<h3>Datenbank:</h3>" +
      "<br>" +
      "<div id=serverAntwort></div>";

    document.getElementById("datenLöschen")?.addEventListener("click", allesLöschen);
  }



  export function f_divs_generierenVerkäufer(x: number): void {

    console.log(produkte[x].Adresse);
    console.log(produkte[x].Preis);

    let newDiv1: HTMLDivElement = document.createElement("div");
    newDiv1.id = "divNr" + x;
    document.getElementById("serverAntwort")?.appendChild(newDiv1);

    let bestellNummer: HTMLParagraphElement = document.createElement("p");
    bestellNummer.innerHTML = "Bestellung " + x;
    document.getElementById("divNr" + x)?.appendChild(bestellNummer);

    let nachName: HTMLParagraphElement = document.createElement("p");
    nachName.innerHTML = produkte[x].Nachname;
    document.getElementById("divNr" + x)?.appendChild(nachName);

    let vorName: HTMLParagraphElement = document.createElement("p");
    vorName.innerHTML = produkte[x].Vorname;
    document.getElementById("divNr" + x)?.appendChild(vorName);

    let gefäß: HTMLParagraphElement = document.createElement("p");
    gefäß.innerHTML = produkte[x].Gefäß;
    document.getElementById("divNr" + x)?.appendChild(gefäß);

    let kugel1: HTMLParagraphElement = document.createElement("p");
    kugel1.innerHTML = produkte[x].Kugel1;
    document.getElementById("divNr" + x)?.appendChild(kugel1);

    let kugel2: HTMLParagraphElement = document.createElement("p");
    kugel2.innerHTML = produkte[x].Kugel2;
    document.getElementById("divNr" + x)?.appendChild(kugel2);

    let kugel3: HTMLParagraphElement = document.createElement("p");
    kugel3.innerHTML = produkte[x].Kugel3;
    document.getElementById("divNr" + x)?.appendChild(kugel3);

    let topping: HTMLParagraphElement = document.createElement("p");
    topping.innerHTML = produkte[x].Topping;
    document.getElementById("divNr" + x)?.appendChild(topping);

    let gesamtpreis: HTMLParagraphElement = document.createElement("p");
    gesamtpreis.innerHTML = `${produkte[x].Preis.toLocaleString()}€`;
    document.getElementById("divNr" + x)?.appendChild(gesamtpreis);

    let adresse: HTMLParagraphElement = document.createElement("p");
    adresse.innerHTML = produkte[x].Adresse;
    document.getElementById("divNr" + x)?.appendChild(adresse);


    let löschen: HTMLButtonElement = document.createElement("button");
    löschen.innerHTML = "löschen";
    löschen.setAttribute("class", "buttons");
    document.getElementById("divNr" + x)?.appendChild(löschen);

    let verschicken: HTMLButtonElement = document.createElement("button");
    verschicken.innerHTML = "verschicken";
    verschicken.setAttribute("class", "buttons");
    document.getElementById("divNr" + x)?.appendChild(verschicken);


  }
  async function allesLöschen(): Promise<void> {
    let form: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>form);

    let url: string = "https://pretteter.herokuapp.com";
    // let url: string = "http://localhost:8100/";
    url += "/allesLöschen" + "?" + query.toString();
    await fetch(url);

    console.log("test");
  }


}



