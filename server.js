/** @format */

var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5"];

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/viewres", function (req, res) {
	res.sendFile(path.join(__dirname, "viewres.html"));
});

app.get("/makeres", function (req, res) {
	console.log(req);
	res.sendFile(path.join(__dirname, "makeres.html"));
});

app.get("/api/tables", function (req, res) {
	return res.json(tables);
});

// Create New Tables - takes in JSON input
app.post("/api/tables", function (req, res) {
	// req.body hosts is equal to the JSON post sent from the user
	// This works because of our body parsing middleware
	var newTable = req.body;

	// Using a RegEx Pattern to remove spaces from newTable
	// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
	newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

	console.log(newTable);

	characters.push(newTable);

	res.json(newTable);
});

/// server listening
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
