"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Klausur = void 0;
const Http = require("http");
const Url = require("url");
var Klausur;
(function (Klausur) {
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
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
            }
            else if (url.pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(Klausur = exports.Klausur || (exports.Klausur = {}));
//# sourceMappingURL=server.js.map