namespace Klausur {

  /* let buttonHinzufügen: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("datenHinzufügen"));
  buttonHinzufügen.addEventListener("click", handleHinzufügen); */

  let buttonAnzeigen: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("datenAnzeigen"));
  let meme: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("meme"));


  buttonAnzeigen.addEventListener("click", handleAnzeigen);
  buttonAnzeigen.addEventListener("click", neuAufbauen);
  meme.addEventListener("click", meme_erstellen);

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

    //neuAufbauen();
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
      "<button type=button id=datenAktualisieren>Daten aktualisieren</button>" +
      "<br>" +
      "</form>" +
      "<h3>Alle Bestellungen</h3>" +
      "<br>" +
      "<div id=serverAntwort></div>" +
      "<div id=meme>" + "</div>";

    document.getElementById("datenLöschen")?.addEventListener("click", allesLöschen);
    document.getElementById("datenAktualisieren")?.addEventListener("click", reloadVerkäufer);
  }

  function reloadVerkäufer(): void {



    let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#serverAntwort"));
    
    entfernen.innerHTML = "";
    handleAnzeigen();


  }

  export function f_divs_generierenVerkäufer(x: number): void {



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
    löschen.id = "einsLöschen" + x;
    löschen.setAttribute("class", "buttons");
    document.getElementById("divNr" + x)?.appendChild(löschen);

    if (produkte[x].Adresse != "verschickt") {
      let verschicken: HTMLButtonElement = document.createElement("button");
      verschicken.innerHTML = "verschicken";
      verschicken.id = "update" + x;
      verschicken.setAttribute("class", "buttons");
      document.getElementById("divNr" + x)?.appendChild(verschicken);
    }

    let id: string = produkte[x]._id;


    document.getElementById("einsLöschen" + x)?.addEventListener("click", einsLöschen);
    document.getElementById("update" + x)?.addEventListener("click", update);




    async function einsLöschen(): Promise<void> {



      let url: string = "https://pretteter.herokuapp.com";
      // let url: string = "http://localhost:8100/";
      url += "/einsLoeschen" + "?" + "_id=" + id;
      await fetch(url);
      reloadVerkäufer();

    }

    async function update(): Promise<void> {



      let url: string = "https://pretteter.herokuapp.com";
      // let url: string = "http://localhost:8100/";
      url += "/update" + "?" + "_id=" + id;
      await fetch(url);

      reloadVerkäufer();





    }




  }
  async function allesLöschen(): Promise<void> {
    let form: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>form);

    let url: string = "https://pretteter.herokuapp.com";
    // let url: string = "http://localhost:8100/";
    url += "/allesLoeschen" + "?" + query.toString();
    await fetch(url);

    reloadVerkäufer();
  }

  function meme_erstellen(): void {

    let entfernen: HTMLDivElement = (<HTMLDivElement>document.querySelector("#body"));
    entfernen.innerHTML = "<h3>" + "<img src=images/meme.jpg alt=meme>" + 
    "<button type=button id=zurück>doch lieber Bestellungen anschauen?</button>";
    document.getElementById("zurück")?.addEventListener("click", neuAufbauen);
    document.getElementById("zurück")?.addEventListener("click", reloadVerkäufer);
    
  }


}



