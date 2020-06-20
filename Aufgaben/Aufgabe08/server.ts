

import * as Http from "http";

export namespace A08Server {
    console.log("Starting server");
    //Port wird als Variable abgespeichert
    let port: number = Number(process.env.PORT);
    //Wenn kein Port dann port=8100
    if (!port)
        port = 8100;
//Server wird als Variable abgespeichert
    let server: Http.Server = Http.createServer();
    //Für Anfrage und zuhören werden Listener gebaut
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Server schaut nach dem Port
    server.listen(port);

    //Beim Vorgang Listening wird das auch in der Console ausgegeben
    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
//Für die response wird ein Header aufgebaut
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
//in die Response wird die request eingetragen
        _response.write(_request.url);
//response wird beendet
        _response.end();
    }
}







