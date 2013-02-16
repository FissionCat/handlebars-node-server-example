var http = require("http");
var fs = require("fs");
var handlebars = require("handlebars");

var template = fs.readFileSync("./index.html", "utf8");

function onRequest(req, res) {

	var source = {
		message : "Hello world!"
	};

	var pageBuilder = handlebars.compile(template);
	var pageText = pageBuilder(source);
	res.writeHead(200, {"Context-Type": "text/html"});
	res.write(pageText);
	res.end();
}

http.createServer(onRequest).listen(8000);
console.log("Server has started on port 8000.");