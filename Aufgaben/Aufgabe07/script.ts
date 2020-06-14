namespace Aufgabe7 {

export interface Produkte {

    kategorie: string;
    bild: string;
    name: string;
    preis: number;
    beschreibung: string;
    
    
}


//Startseite
/*
let nichts:         Produkte = {kategorie: "startseite",  bild: "Nichts.jpg",             name: "Nichts | ",      preis: 5,       beschreibung: "Aktion!"};
let stift:          Produkte = {kategorie: "startseite",  bild: "Stift.jpg",              name: "Stift | ",       preis: 1.99,    beschreibung: "Aktion!"};
let dekodino:       Produkte = {kategorie: "startseite",  bild: "Deko-Dinosaurier.jpg",   name: "Deko-Dino | ",   preis: 24.00,   beschreibung: "Aktion!"};


//BlödeSachen
let buchpenis:              Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/Buch_Penis.jpg",             name: "Leben mit einem großen P.",   preis: 9.99 ,   beschreibung: "Wer kennt nicht das Problem!"};
let christmas:              Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/Christmas.jpg",              name: "Go Jesus Pulli",              preis: 14.69 ,   beschreibung: "go Jesus go"};
let waschmaschiene:         Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/DVD-Waschmaschiene.jpg",     name: "Waschmaschienen DVD",         preis: 3.99 ,   beschreibung: "Für den perfekten Familienabend"};
let einhorn:                Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/DVD-Waschmaschiene.jpg",     name: "Waschmaschienen DVD",         preis: 3.99 ,   beschreibung: "Für den perfekten Familienabend"};
let federhammer:            Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/Federhammer.jpg",            name: "Federhammer",                 preis: 4.49 ,   beschreibung: "Niet- und Nagelfest"};
let raumduftp:              Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/Raumduft_Pizza.jpg",         name: "Raumduft Pizza",              preis: 3.85 ,   beschreibung: "Wie beim Italiener"};
let reisekissen:            Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/Reisekissenjpg.jpg",         name: "Reisekissen",                 preis: 9.99 ,   beschreibung: "Zählt nicht als Mundschutz"};
let williwarmer:            Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/The-Willy-Warmerjpg.jpg",    name: "Willi Warmer",                preis: 3.99 ,   beschreibung: "Für warme Gedanken"};
let unicornmeat:            Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/Unicorn_Meat.jpg",           name: "Einhorn Fleich",              preis: 12.99 ,   beschreibung: "aus eigener Schlachtung"};
let unterhosenspender:      Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/Unterhosenspenderjpg.jpg",   name: "Unterhosenspender",           preis: 4.99 ,   beschreibung: "Wenn der Druck zu groß war"};
let zitronenpresse:         Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/Zitronenpresse.jpg",         name: "Zitronenpresse",              preis: 2.99 ,   beschreibung: "Sauer auf Angie?"};
let kuschelgrillhänchen:    Produkte = {kategorie: "BlödeSachen",    bild: "Blöde_Sachen/Kuschel-Grillhaehnchen.jpg", name: "Kuschel-Grillhaehnchen",      preis: 7.59 ,    beschreibung: "Dein bester Freund"};


//NochBlödereSachen
let buchschiffe:        Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/Buch-Grossen-Schiffen-ausweichen.jpg",   name: "Schiffen ausweichen",         preis: 7.59 ,   beschreibung: "Schon zig mal benötigt"};
let buchholz:           Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/Buch-Holz-identifizieren.jpg",           name: "Buch Holz identifizieren",    preis: 7.59 ,   beschreibung: "Lerne Dein Haus kennen"};
let puzzle:             Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/Das-unmoegliche-Puzzle.jpg",             name: "Das unmoegliche Puzzle",      preis: 10.99 ,   beschreibung: "Hat nur Jack Norris lösen können"};
let plüschkartoffel:    Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/Ein-Sack-Plueschkartoffeln.jpg",         name: "Ein Sack Plüschkartoffeln",   preis: 5.99 ,   beschreibung: "Geschmack bleibt lange im Mund"};
let raumspray:          Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/Raumspray-Huehnersuppejpg.jpg",          name: "Raumspray Hühnersuppe",       preis: 2.99 ,   beschreibung: "Duft wie bei Oma"};
let rentierauto:        Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/Rentier-Auto-Deko-Set.jpg",              name: "Rentier Auto Deko Set",       preis: 3.58 ,   beschreibung: "Für Zulassung notwendig"};
let schaukelpferd:      Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/Riesen-Schaukelpferd.jpg",               name: "Riesen Schaukelpferd",        preis: 31.99 ,   beschreibung: "Es kommt auf die Größe an"};
let swattraining:       Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/SWAT-Trainingjpg.jpg",                   name: "SWAT Training",               preis: 99.99 ,   beschreibung: "Jeder Ami hats bereits"};
let trexshirt:          Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/T-Rex-Christmas-Sweater.jpg",            name: "T-Rex Christmas Sweater",     preis: 12.49 ,   beschreibung: "Der Hingucker überhaupt"};
let wcangel:            Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/WC-Angel-Set.jpg",                       name: "WC Angel Set",                preis: 7.59 ,   beschreibung: "Für lange Sitzungen"};
let tvtestbild:         Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/TV-Testbilder-aus-aller-Welt.jpg",       name: "TV-Testbilder",               preis: 4.99 ,   beschreibung: "Telekom Standardprogramm"};
let uranerz:            Produkte = {kategorie: "NochBlödereSachen",    bild: "Noch_Blödere_Sachen/Uranerz.jpg",                            name: "Uranerz",                     preis: 15.99 ,   beschreibung: "Perfekt für Nachbars Fußboden"};

*/

//export let produkte: Produkte[] = [buchpenis, christmas, waschmaschiene, einhorn, federhammer, raumduftp, reisekissen, williwarmer, unicornmeat, unterhosenspender, zitronenpresse, kuschelgrillhänchen, buchschiffe, buchholz, puzzle, plüschkartoffel, raumspray, rentierauto, schaukelpferd, swattraining, trexshirt, tvtestbild, uranerz, wcangel];
export let produkte: Produkte[];




export async function daten(_url: RequestInfo): Promise<void> {
    let antwort1: Response = await fetch(_url);
    let antwort2: JSON = await antwort1.json();
    produkte = JSON.parse(JSON.stringify(antwort2));
}

//export let startseite:  Produkte[] = [nichts, stift, dekodino];
//export let nochblöderesachen:  Produkte[] = [buchschiffe, buchholz, puzzle, plüschkartoffel, raumspray, rentierauto, schaukelpferd, swattraining, trexshirt, tvtestbild, uranerz, wcangel];
 















}




