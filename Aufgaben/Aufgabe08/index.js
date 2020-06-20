"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let button = document.getElementById("button");
    button.addEventListener("click", communiacate);
    async function communiacate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://pretteter.herokuapp.com";
        let search = new URLSearchParams(formData);
        url = url + "?" + search.toString();
        await fetch(url);
        for (let eintrag of search) {
            let eingabefelder = 2;
            console.log(eintrag);
            for (let i = 0; i < eingabefelder; i++)
                console.log("name: " + eintrag[i]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=index.js.map