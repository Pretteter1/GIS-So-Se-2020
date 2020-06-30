namespace Aufgabe09 {

    let btnHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlButton");
    btnHTML.addEventListener("click", HTML);
    let btnJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonButton");
    btnJSON.addEventListener("click", JSON);

   // let antwort: string;
   // let url: string = "https://pretteter.herokuapp.com";


    let formData: FormData;
    async function HTML(): Promise<void> {
        
        formData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://pretteter.herokuapp.com";
        url = url + "?" + query.toString();
        
        let antwort: Response = await fetch(url);
        let antwort2: string = await antwort.text();
        let antwortHTML: HTMLElement = <HTMLElement>document.getElementById("ausgabe");
        antwortHTML.innerHTML = antwort2;
       
    }
    async function JSON(): Promise<void> {
        
        formData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://pretteter.herokuapp.com";
        url = url + "/json?" + query.toString();
        console.log(url);
        
        let antwort: Response = await fetch(url);
        let json: string = await antwort.json();
        console.log(json);
    }
}


