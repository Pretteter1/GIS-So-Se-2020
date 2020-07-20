namespace Klausur {
   
        let buttonHinzufügen: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("datenHinzufügen"));
        buttonHinzufügen.addEventListener("click", handleHinzufügen);
      
        let buttonAnzeigen: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("datenAnzeigen"));
        buttonAnzeigen.addEventListener("click", handleAnzeigen);
      
      
        async function handleHinzufügen(): Promise<void> {
          let form: FormData = new FormData(document.forms[0]);
          let query: URLSearchParams = new URLSearchParams(<any>form);
          
          let url: string = "https://pretteter.herokuapp.com";
          url += "/hinzufuegen" + "?" + query.toString();
          await fetch(url);
      
          console.log("test");
        }
      
        async function handleAnzeigen(): Promise<void> {
          let formData: FormData = new FormData(document.forms[0]);
          let query: URLSearchParams = new URLSearchParams(<any> formData);
      
          let url: string = "https://pretteter.herokuapp.com";
          url += "/anzeigen"  + "?" + query.toString();
      
          let antwort: Response = await fetch(url, { method: "get" });
          let ausgabe: string = await antwort.text();
      
          (<HTMLElement>document.getElementById("serverAntwort")).innerHTML = ausgabe;
      
        }
      }
    
    