namespace nBlödereSachen {

    interface NochBlödereSachen {
    
        bild: string;
        name: string;
        beschreibung: string;
    }
    
    let buchschiffe: NochBlödereSachen = {
    
        bild: "Buch-Grossen-Schiffen-ausweichen.jpg",
        name: "Schiffen ausweichen | 9,99€",
        beschreibung: "Schon zig mal benötigt"
    };
    
    let buchholz: NochBlödereSachen = {
    
        bild: "Buch-Holz-identifizieren.jpg",
        name: "Buch Holz identifizieren | 9,99€",
        beschreibung: "Lerne Dein Haus kennen"
    };
    
    let puzzle: NochBlödereSachen = {
    
        bild: "Das-unmoegliche-Puzzle.jpg",
        name: "Das unmoegliche Puzzle | 9,50€",
        beschreibung: "Hat nur Jack Norris lösen können"
    };
    
    let plüschkartoffel: NochBlödereSachen = {
    
        bild: "Ein-Sack-Plueschkartoffeln.jpg",
        name: "Ein Sack Plüschkartoffeln | 6,75€",
        beschreibung: "Geschmack bleibt lange im Mund"
    };
    
    let raumspray: NochBlödereSachen = {
    
        bild: "Raumspray-Huehnersuppejpg.jpg",
        name: "Raumspray Hühnersuppe | 5,50€",
        beschreibung: "Duft wie bei Oma"
    };
    
    let rentierauto: NochBlödereSachen = {
    
        bild: "Rentier-Auto-Deko-Set.jpg",
        name: "Rentier Auto Deko Set | 7,50€",
        beschreibung: "Für Zulassung notwendig"
    };
    
    let schaukelpferd: NochBlödereSachen = {
    
        bild: "Riesen-Schaukelpferd.jpg",
        name: "Riesen Schaukelpferd | 25€",
        beschreibung: "Es kommt auf die Größe an"
    };
    
    let swattraining: NochBlödereSachen = {
    
        bild: "SWAT-Trainingjpg.jpg",
        name: "SWAT Training | 99€",
        beschreibung: "Jeder Ami hats bereits"
    };
    
    let trexshirt: NochBlödereSachen = {
    
        bild: "T-Rex-Christmas-Sweater.jpg",
        name: "T-Rex Christmas Sweater | 9,50€",
        beschreibung: "Der Hingucker überhaupt"
    };
    
    let wcangel: NochBlödereSachen = {
    
        bild: "WC-Angel-Set.jpg",
        name: "WC Angel Set | 10€",
        beschreibung: "Für lange Sitzungen"
    };
    
    let tvtestbild: NochBlödereSachen = {
    
        bild: "TV-Testbilder-aus-aller-Welt.jpg",
        name: "TV-Testbilder | 3,50€",
        beschreibung: "Telekom Standardprogramm"
    };
    
    let uranerz: NochBlödereSachen = {
    
        bild: "Uranerz.jpg",
        name: "Uranerz | 12,99€",
        beschreibung: "Perfekt für Nachbars Fußboden"
    };
    
    
    
    let nochblöderesachen: NochBlödereSachen[] = [buchschiffe, buchholz, puzzle, plüschkartoffel, raumspray, rentierauto, schaukelpferd, swattraining, trexshirt, tvtestbild, uranerz, wcangel];
    
    
    
    
    
    
    
    
    
    
    
    
    for (let i: number = 0; i < nochblöderesachen.length; i++) {
        
        let div: HTMLDivElement = document.createElement("div");
        div.id = "divNr" + i;
        document.getElementById("test")?.appendChild(div);
    
        let img: HTMLImageElement = document.createElement("img");
        img.src = nochblöderesachen[i].bild;
        document.getElementById("divNr" + i)?.appendChild(img);
    
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = nochblöderesachen[i].name;
        document.getElementById("divNr" + i)?.appendChild(name);
    
        let besch: HTMLParagraphElement = document.createElement("p");
        besch.innerHTML = nochblöderesachen[i].beschreibung;
        document.getElementById("divNr" + i)?.appendChild(besch);
    
        let button: HTMLButtonElement = document.createElement("button");
        button.innerHTML = "kaufen";
        document.getElementById("divNr" + i)?.appendChild(button);
    }
    
    
    
    
    
    }

