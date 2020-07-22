"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Klausur = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Klausur;
(function (Klausur) {
    let datenUrl;
    datenUrl = "mongodb+srv://Test:qwertzui@uff.r1smf.mongodb.net/Test?retryWrites=true&w=majority";
    verbindungDatenbank(datenUrl);
    let daten;
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    async function verbindungDatenbank(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        daten = mongoClient.db("Test").collection("Students");
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            if (pathname == "/allesLoeschen") {
                console.log("test");
                await daten.drop();
            }
            else if (pathname == "/anzeigen") {
                _response.write(JSON.stringify(await daten.find().toArray()));
            }
            else if (pathname == "/hinzufuegen") {
                daten.insertOne(url.query);
            }
            else if (pathname == "/einsLoeschen") {
                for (let x in url.query) {
                    let wert = url.query[x];
                    let objekt = new Mongo.ObjectID(wert);
                    _response.write(await JSON.stringify(await daten.deleteOne({ "_id": objekt })));
                }
            }
        }
        _response.end();
    }
})(Klausur = exports.Klausur || (exports.Klausur = {}));
//# sourceMappingURL=server.js.map