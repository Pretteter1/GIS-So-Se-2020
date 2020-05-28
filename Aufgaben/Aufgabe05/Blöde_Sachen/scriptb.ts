namespace BlödeS {

interface BlödeSachen {

    bild: string;
    name: string;
    beschreibung: string;
}

let buchpenis: BlödeSachen = {

    bild: "Buch_Penis.jpg",
    name: "Leben mit einem großen P. | 7,50€",
    beschreibung: "Wer kennt nicht das Problem!"
};

let christmas: BlödeSachen = {

    bild: "Christmas.jpg",
    name: "Go Jesus Pulli | 5,50€",
    beschreibung: "go Jesus go"
};

let waschmaschiene: BlödeSachen = {

    bild: "DVD-Waschmaschiene.jpg",
    name: "Waschmaschienen DVD | 2,99€",
    beschreibung: "Für den perfekten Familienabend"
};

let einhorn: BlödeSachen = {

    bild: "DVD-Waschmaschiene.jpg",
    name: "Waschmaschienen DVD | 2,99€",
    beschreibung: "Für den perfekten Familienabend"
};

let federhammer: BlödeSachen = {

    bild: "Federhammer.jpg",
    name: "Federhammer | 7,99€",
    beschreibung: "Niet- und Nagelfest"
};

let raumduftp: BlödeSachen = {

    bild: "Raumduft_Pizza.jpg",
    name: "Raumduft Pizza | 2,50€",
    beschreibung: "Wie beim Italiener"
};

let reisekissen: BlödeSachen = {

    bild: "Reisekissenjpg.jpg",
    name: "Reisekissen | 8,50€",
    beschreibung: "Zählt nicht als Mundschutz"
};

let williwarmer: BlödeSachen = {

    bild: "The-Willy-Warmerjpg.jpg",
    name: "Willi Warmer | 3,99€",
    beschreibung: "Für warme Gedanken"
};

let unicornmeat: BlödeSachen = {

    bild: "Unicorn_Meat.jpg",
    name: "Einhorn Fleich | 15,99€",
    beschreibung: "aus eigener Schlachtung"
};

let unterhosenspender: BlödeSachen = {

    bild: "Unterhosenspenderjpg.jpg",
    name: "Unterhosenspender | 9,99€",
    beschreibung: "Wenn der Druck zu groß war"
};

let zitronenpresse: BlödeSachen = {

    bild: "Zitronenpresse.jpg",
    name: "Zitronenpresse | 5,99€",
    beschreibung: "Sauer auf Angie?"
};

let kuschelgrillhänchen: BlödeSachen = {

    bild: "Kuschel-Grillhaehnchen.jpg",
    name: "Kuschel-Grillhaehnchen | 7,50€",
    beschreibung: "Dein bester Freund"
};



let blödesachen: BlödeSachen[] = [buchpenis, christmas, waschmaschiene, einhorn, federhammer, raumduftp, reisekissen, williwarmer, unicornmeat, unterhosenspender, zitronenpresse, kuschelgrillhänchen];



for (let i: number = 0; i < blödesachen.length; i++) {
    
    let div: HTMLDivElement = document.createElement("div");
    div.id = "divNr" + i;
    document.getElementById("test")?.appendChild(div);

    let img: HTMLImageElement = document.createElement("img");
    img.src = blödesachen[i].bild;
    document.getElementById("divNr" + i)?.appendChild(img);

    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = blödesachen[i].name;
    document.getElementById("divNr" + i)?.appendChild(name);

    let besch: HTMLParagraphElement = document.createElement("p");
    besch.innerHTML = blödesachen[i].beschreibung;
    document.getElementById("divNr" + i)?.appendChild(besch);

    let button: HTMLButtonElement = document.createElement("button");
    button.innerHTML = "kaufen";
    document.getElementById("divNr" + i)?.appendChild(button);
}





}