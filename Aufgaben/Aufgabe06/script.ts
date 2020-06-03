namespace Hauptseite {

export interface Produkte {

    bild: string;
    name: string;
    preis: number;
    beschreibung: string;
    
    
}


//Startseite
let nichts:         Produkte = {bild: "Nichts.jpg",             name: "Nichts | ",      preis: 5,       beschreibung: "Aktion!"};
let stift:          Produkte = {bild: "Stift.jpg",              name: "Stift | ",       preis: 1.99,    beschreibung: "Aktion!"};
let dekodino:       Produkte = {bild: "Deko-Dinosaurier.jpg",   name: "Deko-Dino | ",   preis: 24.00,   beschreibung: "Aktion!"};

//BlödeSachen
let buchpenis:              Produkte = {bild: "Blöde_Sachen/Buch_Penis.jpg",             name: "Leben mit einem großen P. | ",   preis: 7.50 ,   beschreibung: "Wer kennt nicht das Problem!"};
let christmas:              Produkte = {bild: "Blöde_Sachen/Christmas.jpg",              name: "Go Jesus Pulli | ",              preis: 7.50 ,   beschreibung: "go Jesus go"};
let waschmaschiene:         Produkte = {bild: "Blöde_Sachen/DVD-Waschmaschiene.jpg",     name: "Waschmaschienen DVD | ",         preis: 7.50 ,   beschreibung: "Für den perfekten Familienabend"};
let einhorn:                Produkte = {bild: "Blöde_Sachen/DVD-Waschmaschiene.jpg",     name: "Waschmaschienen DVD | ",         preis: 7.50 ,   beschreibung: "Für den perfekten Familienabend"};
let federhammer:            Produkte = {bild: "Blöde_Sachen/Federhammer.jpg",            name: "Federhammer | ",                 preis: 7.50 ,   beschreibung: "Niet- und Nagelfest"};
let raumduftp:              Produkte = {bild: "Blöde_Sachen/Raumduft_Pizza.jpg",         name: "Raumduft Pizza | ",              preis: 7.50 ,   beschreibung: "Wie beim Italiener"};
let reisekissen:            Produkte = {bild: "Blöde_Sachen/Reisekissenjpg.jpg",         name: "Reisekissen | ",                 preis: 7.50 ,   beschreibung: "Zählt nicht als Mundschutz"};
let williwarmer:            Produkte = {bild: "Blöde_Sachen/The-Willy-Warmerjpg.jpg",    name: "Willi Warmer | ",                preis: 7.50 ,   beschreibung: "Für warme Gedanken"};
let unicornmeat:            Produkte = {bild: "Blöde_Sachen/Unicorn_Meat.jpg",           name: "Einhorn Fleich | ",              preis: 7.50 ,   beschreibung: "aus eigener Schlachtung"};
let unterhosenspender:      Produkte = {bild: "Blöde_Sachen/Unterhosenspenderjpg.jpg",   name: "Unterhosenspender | ",           preis: 7.50 ,   beschreibung: "Wenn der Druck zu groß war"};
let zitronenpresse:         Produkte = {bild: "Blöde_Sachen/Zitronenpresse.jpg",         name: "Zitronenpresse | ",              preis: 7.50 ,   beschreibung: "Sauer auf Angie?"};
let kuschelgrillhänchen:    Produkte = {bild: "Blöde_Sachen/Kuschel-Grillhaehnchen.jpg", name: "Kuschel-Grillhaehnchen | ",      preis: 7.50 ,    beschreibung: "Dein bester Freund"};


//NochBlödereSachen
let buchschiffe:        Produkte = {bild: "Noch_Blödere_Sachen/Buch-Grossen-Schiffen-ausweichen.jpg",   name: "Schiffen ausweichen | ",         preis: 7.50 ,   beschreibung: "Schon zig mal benötigt"};
let buchholz:           Produkte = {bild: "Noch_Blödere_Sachen/Buch-Holz-identifizieren.jpg",           name: "Buch Holz identifizieren | ",    preis: 7.50 ,   beschreibung: "Lerne Dein Haus kennen"};
let puzzle:             Produkte = {bild: "Noch_Blödere_Sachen/Das-unmoegliche-Puzzle.jpg",             name: "Das unmoegliche Puzzle | ",      preis: 7.50 ,   beschreibung: "Hat nur Jack Norris lösen können"};
let plüschkartoffel:    Produkte = {bild: "Noch_Blödere_Sachen/Ein-Sack-Plueschkartoffeln.jpg",         name: "Ein Sack Plüschkartoffeln | ",   preis: 7.50 ,   beschreibung: "Geschmack bleibt lange im Mund"};
let raumspray:          Produkte = {bild: "Noch_Blödere_Sachen/Raumspray-Huehnersuppejpg.jpg",          name: "Raumspray Hühnersuppe | ",       preis: 7.50 ,   beschreibung: "Duft wie bei Oma"};
let rentierauto:        Produkte = {bild: "Noch_Blödere_Sachen/Rentier-Auto-Deko-Set.jpg",              name: "Rentier Auto Deko Set | ",       preis: 7.50 ,   beschreibung: "Für Zulassung notwendig"};
let schaukelpferd:      Produkte = {bild: "Noch_Blödere_Sachen/Riesen-Schaukelpferd.jpg",               name: "Riesen Schaukelpferd | ",        preis: 7.50 ,   beschreibung: "Es kommt auf die Größe an"};
let swattraining:       Produkte = {bild: "Noch_Blödere_Sachen/SWAT-Trainingjpg.jpg",                   name: "SWAT Training | ",               preis: 7.50 ,   beschreibung: "Jeder Ami hats bereits"};
let trexshirt:          Produkte = {bild: "Noch_Blödere_SachenT-Rex-Christmas-Sweater.jpg",             name: "T-Rex Christmas Sweater | ",     preis: 7.50 ,   beschreibung: "Der Hingucker überhaupt"};
let wcangel:            Produkte = {bild: "Noch_Blödere_Sachen/WC-Angel-Set.jpg",                       name: "WC Angel Set | ",                preis: 7.50 ,   beschreibung: "Für lange Sitzungen"};
let tvtestbild:         Produkte = {bild: "Noch_Blödere_Sachen/TV-Testbilder-aus-aller-Welt.jpg",       name: "TV-Testbilder | ",               preis: 7.50 ,   beschreibung: "Telekom Standardprogramm"};
let uranerz:            Produkte = {bild: "Noch_Blödere_Sachen/Uranerz.jpg",                            name: "Uranerz | ",                     preis: 7.50 ,   beschreibung: "Perfekt für Nachbars Fußboden"};


export let blödesachen: Produkte[] = [buchpenis, christmas, waschmaschiene, einhorn, federhammer, raumduftp, reisekissen, williwarmer, unicornmeat, unterhosenspender, zitronenpresse, kuschelgrillhänchen];
export let startseite:  Produkte[] = [nichts, stift, dekodino];
export let nochblöderesachen:  Produkte[] = [buchschiffe, buchholz, puzzle, plüschkartoffel, raumspray, rentierauto, schaukelpferd, swattraining, trexshirt, tvtestbild, uranerz, wcangel];
 















}



