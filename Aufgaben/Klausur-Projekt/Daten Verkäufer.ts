namespace Klausur {

export interface ProdukteV {

    _id: string;
    Vorname: string;
    Nachname: string;
    Adresse: string;
    Preis: number;
    Gefäß: string;
    Kugel1: string;
    Kugel2: string;
    Kugel3: string;
    Topping: string;

    
    
}



export let produkteverkäufer: ProdukteV[];




export async function datenv(_url: RequestInfo): Promise<void> {
    let antwort1v: Response = await fetch(_url);
    let antwort2v: JSON = await antwort1v.json();
    produkteverkäufer = JSON.parse(JSON.stringify(antwort2v));
}
















}




