var http = require("http");
var fs = require("fs");
var handlebars = require("handlebars");

template = fs.readFileSync("./index.html", "utf8");

function onRequest(req, res) {

	var source = {
		message : "Hello world!"
	};

	// Must do .toString on template when using readFileSync, or it doesn't work
	var pageBuilder = handlebars.compile(template.toString());
	var pageText = pageBuilder(source);
	res.writeHead(200, {"Context-Type": "text/html"});
	res.write(pageText);
	res.end();
}

http.createServer(onRequest).listen(8000);
console.log("Server has started on port 8000.");