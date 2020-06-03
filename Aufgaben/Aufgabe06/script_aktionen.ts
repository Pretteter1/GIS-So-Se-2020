namespace Hauptseite {


    //Startseite divs generieren
    for (let i: number = 0; i < blödesachen.length; i++) {
    
        let newDiv1: HTMLDivElement = document.createElement("div");
        newDiv1.id = "divNr" + i;
        document.getElementById("test")?.appendChild(newDiv1);
    
        let imgElement1: HTMLImageElement = document.createElement("img");
        imgElement1.src = blödesachen[i].bild;
        document.getElementById("divNr" + i)?.appendChild(imgElement1);
    
        let namePrice1: HTMLParagraphElement = document.createElement("p");
        namePrice1.innerHTML = `${blödesachen[i].name} ${blödesachen[i].preis.toLocaleString().fixed()}€`;
        document.getElementById("divNr" + i)?.appendChild(namePrice1);
    
        let desc1: HTMLParagraphElement = document.createElement("p");
        desc1.innerHTML = blödesachen[i].beschreibung;
        document.getElementById("divNr" + i)?.appendChild(desc1);
    
        let kaufen1: HTMLButtonElement = document.createElement("button");
        kaufen1.innerHTML = "kaufen";
        document.getElementById("divNr" + i)?.appendChild(kaufen1);
    }

    //Blöde_Sachen divs generieren
    for (let i: number = 0; i < nochblöderesachen.length; i++) {
    
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "divNr" + i;
        document.getElementById("test")?.appendChild(newDiv);
    
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = nochblöderesachen[i].bild;
        document.getElementById("divNr" + i)?.appendChild(imgElement);
    
        let namePrice: HTMLParagraphElement = document.createElement("p");
        namePrice.innerHTML = `${nochblöderesachen[i].name} ${nochblöderesachen[i].preis.toLocaleString().fixed()}€`;
        document.getElementById("divNr" + i)?.appendChild(namePrice);
    
        let desc: HTMLParagraphElement = document.createElement("p");
        desc.innerHTML = nochblöderesachen[i].beschreibung;
        document.getElementById("divNr" + i)?.appendChild(desc);
    
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "kaufen";
        document.getElementById("divNr" + i)?.appendChild(kaufen);
   
    }

}



