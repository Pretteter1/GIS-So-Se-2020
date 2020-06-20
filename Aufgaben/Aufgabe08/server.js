"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server");
    //Port wird als Variable abgespeichert
    let port = Number(process.env.PORT);
    //Wenn kein Port dann port=8100
    if (!port)
        port = 8100;
    //Server wird als Variable abgespeichert
    let server = Http.createServer();
    //Für Anfrage und zuhören werden Listener gebaut
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Server schaut nach dem Port
    server.listen(port);
    //Beim Vorgang Listening wird das auch in der Console ausgegeben
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //Für die response wird ein Header aufgebaut
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //in die Response wird die request eingetragen
        _response.write(_request.url);
        //response wird beendet
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map