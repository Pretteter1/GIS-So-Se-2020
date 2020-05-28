namespace Hauptseite{

interface Startseite {

    bild: string;
    name: string;
    beschreibung: string;
}

let nichts: Startseite = {

    bild: "Nichts.jpg",
    name: "Nichts | 5,00€",
    beschreibung: "Aktion!"

};
let stift: Startseite = {

    bild: "Stift.jpg",
    name: "Stift | 1,50€",
    beschreibung: "Aktion!"

};
let dekodino: Startseite = {

    bild: "Deko-Dinosaurier.jpg",
    name: "Deko-Dino | 25€",
    beschreibung: "Aktion!"

};

let startseite: Startseite[] = [nichts, stift, dekodino];

for (let i: number = 0; i < startseite.length; i++) {
    
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "divNr" + i;
    document.getElementById("test")?.appendChild(newDiv);

    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = startseite[i].bild;
    document.getElementById("divNr" + i)?.appendChild(imgElement);

    let namePrice: HTMLParagraphElement = document.createElement("p");
    namePrice.innerHTML = startseite[i].name;
    document.getElementById("divNr" + i)?.appendChild(namePrice);

    let desc: HTMLParagraphElement = document.createElement("p");
    desc.innerHTML = startseite[i].beschreibung;
    document.getElementById("divNr" + i)?.appendChild(desc);

    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("divNr" + i)?.appendChild(kaufen);
}


}


