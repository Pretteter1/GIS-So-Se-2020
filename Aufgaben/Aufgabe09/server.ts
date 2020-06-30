

import * as Http from "http";
import * as Url from "url";

export namespace A09Server {
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


    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

      if (url.pathname == "/html") {
        for (let key in url.query) {
          _response.write(key + ": " + url.query[key] + "<br/>");
        }
      }
      else if (url.pathname == "/json") {
        let jsonString: string = JSON.stringify(url.query);
        _response.write(jsonString);
      }
    }
    _response.end();
  }
}







