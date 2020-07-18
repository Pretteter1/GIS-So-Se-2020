namespace Klausur {

export interface Produkte {

    kategorie: string;
    bild: string;
    name: string;
    preis: number;
    beschreibung: string;
    
    
}



export let produkte: Produkte[];




export async function daten(_url: RequestInfo): Promise<void> {
    let antwort1: Response = await fetch(_url);
    let antwort2: JSON = await antwort1.json();
    produkte = JSON.parse(JSON.stringify(antwort2));
}
















}




