namespace Aufgabe08 {

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", communiacate);

    async function communiacate(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://pretteter.herokuapp.com";
        let search: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + search.toString();
        await fetch(url);

        for (let eintrag of search) {
            let eingabefelder: number = 2;
            console.log(eintrag);
            for (let i: number = 0; i < eingabefelder; i++)
            console.log("name: " + eintrag[i]);
            
        }
    }

}